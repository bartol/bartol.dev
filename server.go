package main

import (
	"log"
	"net/http"
	"strings"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

// routes //////////////////////////////////////////////////////////////////////

// GET  - /                - home
// GET  - /:path.ext       - static files

// GET  - /til             - til index
// GET  - /til.xml         - til index rss
// GET  - /til/:path       - til subindex
// GET  - /til/:path       - til post content
// GET  - /til/:path.md    - til post source

// GET  - /blog            - blog index
// GET  - /blog.xml        - blog index rss
// GET  - /blog/:path      - blog subindex
// GET  - /blog/:path      - blog post content
// GET  - /blog/:path.md   - blog post source

// GET  - /files           - files index
// GET  - /files/:path     - files subindex
// GET  - /files/:path.ext - file
// GET  - /upload          - upload files web gui
// POST - /upload          - upload files

// GET  - /share           - webrtc file share
// GET  - /chess           - webrtc chess

// GET  - /color           - color image api
// GET  - /random          - generate random number

// GET  - /ping            - pong

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Compress(5))

	r.Get("/", indexHandler)
	serveStatic(r, "/robots.txt")

	r.Route("/til", func(r chi.Router) {
		// r.Get("/", tilIndexHandler)
		r.Get("/{path}", tilPostHandler)
	})

	redirectSlash(r, "/files")
	r.Get("/files/*", filesHandler)

	r.Get("/ping", pingHandler)

	r.NotFound(notFoundHandler)

	log.Fatal(http.ListenAndServe(":8080", r))
}

// utils ///////////////////////////////////////////////////////////////////////

func redirect(r chi.Router, from, to string, method int) {
	r.Get(
		from,
		http.RedirectHandler(to, http.StatusPermanentRedirect).ServeHTTP,
	)
}

func redirectSlash(r chi.Router, from string) {
	to := from + "/"
	redirect(r, from, to, http.StatusMovedPermanently)
}

func serve(r chi.Router, src, path string) {
	r.Get(path, func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, src)
	})
}

func serveStatic(r chi.Router, path string) {
	src := "./static" + path
	serve(r, src, path)
}

// handlers ////////////////////////////////////////////////////////////////////

func indexHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/plain")
	w.Write([]byte("index"))
}

func tilPostHandler(w http.ResponseWriter, r *http.Request) {
	path := "./til/" + chi.URLParam(r, "path")

	if strings.HasSuffix(path, ".md") {
		w.Write([]byte("md: " + path))
		return
	}
	w.Write([]byte("html: " + path))
}

func filesHandler(w http.ResponseWriter, r *http.Request) {
	fs := http.StripPrefix("/files/", http.FileServer(http.Dir("./files")))
	fs.ServeHTTP(w, r)
}

func pingHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Ping-Pong, Umjetnost Zdravog Đira"))
}

func notFoundHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("404 t"))
}
