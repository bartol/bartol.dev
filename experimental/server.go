package main

import (
	"bufio"
	"bytes"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/renderer/html"
)

type node struct {
	Title    string
	Path     string
	URL      string
	Type     string
	Children []node
}

type indexTmplData struct {
	MetaTitle string
	MetaURL   string
	Tree      []node
}

type postTmplData struct {
	MetaTitle string
	MetaURL   string
	Body      template.HTML
}

type errorTmplData struct {
	MetaTitle string
	MetaURL   string
}

var (
	posts     = make(map[string]template.HTML)
	tree      []node
	indexTmpl = template.Must(template.ParseFiles(
		"templates/base.html",
		"templates/index.html",
		"templates/node.html",
	))
	postTmpl = template.Must(template.ParseFiles(
		"templates/base.html",
		"templates/post.html",
	))
	errorTmpl = template.Must(template.ParseFiles(
		"templates/base.html",
		"templates/error.html",
	))
)

func main() {
	tree = getContent("content/")
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			data := indexTmplData{
				"Bartol Deak",
				r.URL.Path,
				tree,
			}
			err := indexTmpl.Execute(w, data)
			if err != nil {
				w.Write([]byte("internal server error"))
			}
			return
		}
		body, ok := posts[r.URL.Path]
		if ok {
			title, err := getTitle("content" + r.URL.Path + ".md")
			if err != nil {
				w.Write([]byte("internal server error"))
			}
			data := postTmplData{
				title,
				r.URL.Path,
				body,
			}
			err = postTmpl.Execute(w, data)
			if err != nil {
				w.Write([]byte("internal server error"))
			}
			return
		}
		data := errorTmplData{
			"404 Not Found",
			r.URL.Path,
		}
		err := errorTmpl.Execute(w, data)
		if err != nil {
			w.Write([]byte("internal server error"))
		}
	})
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func getContent(root string) []node {
	var t []node
	files, err := ioutil.ReadDir(root)
	if err != nil {
		log.Fatal(err)
	}
	for _, file := range files {
		if file.IsDir() {
			title := file.Name() + "/"
			path := root + title
			t = append(t, node{
				title,
				path,
				"",
				"folder",
				getContent(path),
			})
			continue
		}
		path := root + file.Name()
		title, err := getTitle(path)
		if err != nil {
			log.Fatal(err)
		}
		ext := filepath.Ext(path)
		url := path[len("content") : len(path)-len(ext)]
		t = append(t, node{
			title,
			path,
			url,
			"post",
			[]node{},
		})
		body, err := getBody(path)
		if err != nil {
			log.Fatal(err)
		}
		posts[url] = body
	}
	return t
}

func getBody(path string) (template.HTML, error) {
	md, err := ioutil.ReadFile(path)
	if err != nil {
		return template.HTML(""), err
	}
	renderer := goldmark.New(
		goldmark.WithRendererOptions(html.WithUnsafe()),
	)
	var buf bytes.Buffer
	err = renderer.Convert(md, &buf)
	if err != nil {
		return template.HTML(""), err
	}
	html := template.HTML(buf.Bytes())
	return html, nil
}

func getTitle(path string) (string, error) {
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
	title := firstLine[len("# ") : len(firstLine)-1]
	return title, nil
}
