package main

import (
	"bufio"
	"bytes"
	"database/sql"
	"html/template"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	_ "github.com/mattn/go-sqlite3"
	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/renderer/html"
)

// routes //////////////////////////////////////////////////////////////////////

// /memory.xml 		- memory index rss feed
// t: memory.xml

// unauthorizedHandler

// GET  - /share           - webrtc file share
// GET  - /chess           - webrtc chess
// GET  - /sudoku          - sudoku

// GET  - /color           - color image api
// GET  - /random          - generate random number

var db *sql.DB

func main() {
	var err error
	db, err = sql.Open("sqlite3", "./www.db")
	if err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS
		paste (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			content TEXT
		);
	`)
	if err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS
		upload (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			content BLOB
		);
	`)
	if err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/", indexHandler)

	http.HandleFunc("/memory/", memoryHandler)

	serveFile("/manifest.webmanifest")
	serveFile("/robots.txt")
	serveDir("/css/")
	serveDir("/js/")
	serveDir("/files/")

	http.HandleFunc("/paste/", pasteHandler)
	flushTable("paste")

	http.HandleFunc("/upload/", uploadHandler)
	flushTable("upload")

	http.HandleFunc("/ping", pingHandler)

	log.Println("server listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", logRequest(http.DefaultServeMux)))
}

// handlers ////////////////////////////////////////////////////////////////////

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		notFoundHandler(w, r)
		return
	}

	page := indexData{
		MetaTitle: "Bartol Deak",
		MetaURL:   r.URL.Path,
	}

	err := indexTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

func memoryHandler(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path[len("/memory/"):]
	if path != "" {
		postHandler(w, r, path, "Memory")
		return
	}

	var posts []post
	err := filepath.Walk("./memory/", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if isPost(path) {
			title, err := getPostTitle(path)
			if err != nil {
				return err
			}

			post := post{
				Title: title,
				Path:  "/" + path[:len(path)-len(".md")] + "/",
			}

			posts = append(posts, post)
		}

		return nil
	})
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	page := memoryData{
		MetaTitle: "Memory :: Bartol Deak",
		MetaURL:   r.URL.Path,
		Posts:     posts,
	}

	err = memoryTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

func postHandler(w http.ResponseWriter, r *http.Request, path, pathPrefixTitle string) {
	srcPath := getSourcePath(r.URL.Path)
	if !isPost(srcPath) {
		notFoundHandler(w, r)
		return
	}

	md, err := ioutil.ReadFile(srcPath)
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	if strings.HasSuffix(path, ".md") {
		w.Write(md)
		return
	}

	title, err := getPostTitle(srcPath)
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	html, err := renderMarkdown(md)
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	page := postData{
		MetaTitle: title + " :: " + pathPrefixTitle + " :: Bartol Deak",
		MetaURL:   r.URL.Path,
		Content:   html,
	}

	err = postTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

func pasteHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		pasteCreateHandler(w, r)
		return
	}

	id := r.URL.Path[len("/paste/"):]
	if id != "" {
		pasteViewHandler(w, r)
		return
	}

	var items []item
	rows, err := db.Query("SELECT id,name FROM paste ORDER BY id DESC")
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}
	defer rows.Close()

	for rows.Next() {
		var (
			id   int
			name string
		)
		err := rows.Scan(&id, &name)
		if err != nil {
			internalServerErrorHandler(w, r)
			return
		}

		item := item{
			Name: name,
			Path: "/paste/" + strconv.Itoa(id),
		}

		items = append(items, item)
	}

	page := pasteData{
		MetaTitle: "Paste :: Bartol Deak",
		MetaURL:   r.URL.Path,
		Items:     items,
	}

	err = pasteTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

func pasteCreateHandler(w http.ResponseWriter, r *http.Request) {
	name := r.FormValue("name")
	content := r.FormValue("content")

	if name == "" || content == "" {
		badRequestHandler(w, r)
		return
	}

	result, err := db.Exec(`
	INSERT INTO
		paste (name,content)
		VALUES (?,?)
	`, name, content)
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	id, err := result.LastInsertId()
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	w.Header().Add("Location", "/paste/"+strconv.FormatInt(id, 10))
	w.WriteHeader(http.StatusSeeOther)
}

func pasteViewHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Path[len("/paste/"):]
	row := db.QueryRow("SELECT content FROM paste WHERE id=?", id)
	var content string
	err := row.Scan(&content)
	if err != nil {
		notFoundHandler(w, r)
		return
	}

	w.Write([]byte(content))
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		uploadCreateHandler(w, r)
		return
	}

	name := r.URL.Path[len("/upload/"):]
	if name != "" {
		uploadViewHandler(w, r)
		return
	}

	var items []item
	rows, err := db.Query("SELECT name FROM upload ORDER BY id DESC")
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}
	defer rows.Close()

	for rows.Next() {
		var name string
		err := rows.Scan(&name)
		if err != nil {
			internalServerErrorHandler(w, r)
			return
		}

		item := item{
			Name: name,
			Path: "/upload/" + name,
		}

		items = append(items, item)
	}

	page := uploadData{
		MetaTitle: "Upload :: Bartol Deak",
		MetaURL:   r.URL.Path,
		Items:     items,
	}

	err = uploadTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

func uploadCreateHandler(w http.ResponseWriter, r *http.Request) {
	file, metadata, err := r.FormFile("file")
	if err != nil {
		badRequestHandler(w, r)
		return
	}
	defer file.Close()

	buf := bytes.NewBuffer(nil)
	_, err = io.Copy(buf, file)
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	name := metadata.Filename
	content := buf.Bytes()
	if metadata.Size > 20000000 {
		ok := basicAuth(w, r)
		if !ok {
			http.Error(w, "Not authorized", 401)
			return
		}
	}

	_, err = db.Exec(`
	INSERT INTO
		upload (name,content)
		VALUES (?,?)
		`, name, content)
	if err != nil {
		internalServerErrorHandler(w, r)
		return
	}

	w.Header().Add("Location", "/upload/")
	w.WriteHeader(http.StatusSeeOther)
}

func uploadViewHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Path[len("/upload/"):]
	row := db.QueryRow("SELECT content FROM upload WHERE name=?", name)
	var content string
	err := row.Scan(&content)
	if err != nil {
		notFoundHandler(w, r)
		return
	}

	w.Header().Set("Content-Disposition", "attachment; filename=\""+name+"\"")
	w.Write([]byte(content))
}

func pingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Ping-Pong, Umjetnost Zdravog Đira"))
}

func notFoundHandler(w http.ResponseWriter, r *http.Request) {
	page := errorData{
		MetaTitle: "404 Not Found",
		MetaURL:   r.URL.Path,
	}

	err := errorTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

func internalServerErrorHandler(w http.ResponseWriter, r *http.Request) {
	page := errorData{
		MetaTitle: "500 Internal Server Error",
		MetaURL:   r.URL.Path,
	}

	err := errorTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

func badRequestHandler(w http.ResponseWriter, r *http.Request) {
	page := errorData{
		MetaTitle: "400 Bad Request",
		MetaURL:   r.URL.Path,
	}

	err := errorTemplates.Execute(w, page)
	if err != nil {
		internalServerErrorHandler(w, r)
	}
}

// templates ///////////////////////////////////////////////////////////////////

var indexTemplates = template.Must(template.ParseFiles(
	"templates/base.html",
	"templates/header.html",
	"templates/footer.html",
	"templates/index.html",
))

var memoryTemplates = template.Must(template.ParseFiles(
	"templates/base.html",
	"templates/header.html",
	"templates/footer.html",
	"templates/memory.html",
))

var postTemplates = template.Must(template.ParseFiles(
	"templates/base.html",
	"templates/header.html",
	"templates/footer.html",
	"templates/post.html",
))

var pasteTemplates = template.Must(template.ParseFiles(
	"templates/base.html",
	"templates/header.html",
	"templates/footer.html",
	"templates/paste.html",
))

var uploadTemplates = template.Must(template.ParseFiles(
	"templates/base.html",
	"templates/header.html",
	"templates/footer.html",
	"templates/upload.html",
))

var errorTemplates = template.Must(template.ParseFiles(
	"templates/base.html",
	"templates/header.html",
	"templates/footer.html",
	"templates/error.html",
))

// template data ///////////////////////////////////////////////////////////////

type indexData struct {
	MetaTitle string
	MetaURL   string
}

type memoryData struct {
	MetaTitle string
	MetaURL   string
	Posts     []post
}

type postData struct {
	MetaTitle string
	MetaURL   string
	Content   template.HTML
}

type pasteData struct {
	MetaTitle string
	MetaURL   string
	Items     []item
}

type uploadData struct {
	MetaTitle string
	MetaURL   string
	Items     []item
}

type errorData struct {
	MetaTitle string
	MetaURL   string
}

type post struct {
	Title string
	Path  string
}

type item struct {
	Name string
	Path string
}

// utils ///////////////////////////////////////////////////////////////////////

func serveFile(path string) {
	http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "."+path)
	})
}

func serveDir(path string) {
	fs := http.FileServer(http.Dir("." + path))
	http.Handle(path, http.StripPrefix(path, fs))
}

func flushTable(table string) {
	path := "/" + table + "/flush"
	http.HandleFunc(path, func(w http.ResponseWriter, r *http.Request) {
		ok := basicAuth(w, r)
		if !ok {
			http.Error(w, "Not authorized", 401)
			return
		}

		_, err := db.Exec("DELETE FROM " + table)
		if err != nil {
			w.Write([]byte("internal server error" + err.Error()))
			return
		}

		w.Write([]byte("done"))
	})
}

func basicAuth(w http.ResponseWriter, r *http.Request) bool {
	w.Header().Set("WWW-Authenticate", `Basic realm="Restricted"`)

	username, password, authOK := r.BasicAuth()
	// env[pw]...
	return authOK && username == "usr" && password == "pw"
}

func logRequest(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s %s\n", r.RemoteAddr, r.Method, r.URL)
		handler.ServeHTTP(w, r)
	})
}

func getSourcePath(path string) string {
	if strings.HasSuffix(path, "/") {
		path = path[:len(path)-1] + ".md"
	}

	if !strings.HasSuffix(path, ".md") {
		path += ".md"
	}

	return "." + path
}

func isPost(path string) bool {
	info, err := os.Stat(path)
	return err == nil && !info.IsDir() && filepath.Ext(path) == ".md"
}

func getPostTitle(path string) (string, error) {
	file, err := os.Open(path)
	if err != nil {
		return "", err
	}
	defer file.Close()

	reader := bufio.NewReader(file)
	firstLine, err := reader.ReadString('\n')
	if err != nil {
		return "", err
	}

	return firstLine[len("# ") : len(firstLine)-1], nil
}

func renderMarkdown(md []byte) (template.HTML, error) {
	renderer := goldmark.New(goldmark.WithRendererOptions(html.WithUnsafe()))
	var buf bytes.Buffer
	err := renderer.Convert(md, &buf)
	if err != nil {
		return template.HTML(""), err
	}

	return template.HTML(buf.Bytes()), nil
}
