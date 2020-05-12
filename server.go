package main

import (
	"database/sql"
	"html/template"
	"log"
	"net/http"
	"strconv"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

// GET  - /blog            - blog index
// GET  - /blog.xml        - blog index rss
// GET  - /blog/:path      - blog subindex
// GET  - /blog/:path      - blog post content
// GET  - /blog/:path.md   - blog post source

// GET  - /upload          - upload index
// POST - /upload          - new upload
// GET  - /upload/:id      - view upload

// GET  - /share           - webrtc file share
// GET  - /chess           - webrtc chess

// GET  - /color           - color image api
// GET  - /random          - generate random number

var db *sql.DB

func main() {
	var err error
	db, err = sql.Open("sqlite3", "./stuff.db")
	if err != nil {
		log.Fatal(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS
		paste (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT,
			content TEXT,
			date TEXT
		);
	`)
	if err != nil {
		log.Fatal(err)
	}

	http.HandleFunc("/", indexHandler)

	http.HandleFunc("/til/", tilHandler)
	http.HandleFunc("/til.xml", tilFeedHandler)

	serveFile("/robots.txt")
	serveDir("/css/")
	serveDir("/js/")
	serveDir("/files/")

	http.HandleFunc("/search", searchHandler)

	http.HandleFunc("/paste/", pasteHandler)
	flushTable("paste")

	http.HandleFunc("/ping", pingHandler)

	log.Fatal(http.ListenAndServe(":8080", logRequest(http.DefaultServeMux)))
}

// handlers ////////////////////////////////////////////////////////////////////

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		notFoundHandler(w, r)
		return
	}

	w.Write([]byte("index"))
}

func tilHandler(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path[len("/til/"):]
	if path != "" {
		if strings.HasSuffix(path, ".md") {
			w.Write([]byte("md " + path))
			return
		}

		w.Write([]byte("html " + path))
		return
	}

	w.Write([]byte("til index"))
}

func tilFeedHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("til feed"))
}

func searchHandler(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")
	if query != "" {
		w.Write([]byte("search query: " + query))
		return
	}

	w.Write([]byte("enter search query"))
}

type item struct {
	ID   int
	Name string
	Date string
}

type pastePage struct {
	Items []item
}

func pasteHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		name := r.FormValue("name")
		content := r.FormValue("content")

		if name == "" || content == "" {
			w.Write([]byte("bad request"))
			return
		}

		result, err := db.Exec(`
			INSERT INTO
				paste (
					name,
					content,
					date
				)
				VALUES (
					?,
					?,
					DATETIME('NOW')
				)
		`, name, content)
		if err != nil {
			w.Write([]byte("internal server error" + err.Error()))
			return
		}

		id, err := result.LastInsertId()
		if err != nil {
			w.Write([]byte("internal server error" + err.Error()))
			return
		}
		location := "/paste/" + strconv.FormatInt(id, 10)
		w.Header().Add("Location", location)
		w.WriteHeader(http.StatusSeeOther)
		return
	}

	id := r.URL.Path[len("/paste/"):]
	if id != "" {
		row := db.QueryRow("SELECT content FROM paste WHERE id=?", id)
		var content string
		err := row.Scan(&content)
		if err != nil {
			notFoundHandler(w, r)
			return
		}
		w.Write([]byte(content))
		return
	}

	page := pastePage{}

	rows, err := db.Query("SELECT id,name,date FROM paste ORDER BY id DESC")
	if err != nil {
		w.Write([]byte("internal server error" + err.Error()))
		return
	}
	defer rows.Close()
	for rows.Next() {
		var (
			id   int
			name string
			date string
		)
		err := rows.Scan(&id, &name, &date)

		if err != nil {
			w.Write([]byte("internal server error" + err.Error()))
			return
		}
		page.Items = append(page.Items, item{id, name, date})
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	tmpl, err := template.ParseFiles("templates/paste.html")
	if err != nil {
		w.Write([]byte("internal server error" + err.Error()))
		return
	}
	tmpl.Execute(w, page)
}

func pingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Ping-Pong, Umjetnost Zdravog Đira"))
}

func notFoundHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("404"))
}

// internalServerErrorHandler
// unauthorizedHandler

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
