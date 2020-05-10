package main

import (
	"log"
	"net/http"
	"strings"
)

// GET  - /blog            - blog index
// GET  - /blog.xml        - blog index rss
// GET  - /blog/:path      - blog subindex
// GET  - /blog/:path      - blog post content
// GET  - /blog/:path.md   - blog post source

// GET  - /upload          - upload index
// POST - /upload          - new upload
// GET  - /upload/:id      - view upload

// GET  - /paste           - paste index
// POST - /paste           - new paste
// GET  - /paste/:id       - view paste

// GET  - /share           - webrtc file share
// GET  - /chess           - webrtc chess

// GET  - /color           - color image api
// GET  - /random          - generate random number

func main() {
	http.HandleFunc("/", indexHandler)

	http.HandleFunc("/til/", tilHandler)
	http.HandleFunc("/til.xml", tilFeedHandler)

	serveFile("/robots.txt")
	serveDir("/css/")
	serveDir("/js/")
	serveDir("/files/")

	http.HandleFunc("/ping", pingHandler)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

// middleware //////////////////////////////////////////////////////////////////

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

func pingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Ping-Pong, Umjetnost Zdravog Đira"))
}

func notFoundHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("404"))
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
