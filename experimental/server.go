package main

import (
	"bufio"
	"bytes"
	"html/template"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"

	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/renderer/html"
)

type node struct {
	Title    string
	Path     string
	Type     string
	Children []node
}

var (
	posts = make(map[string]template.HTML)
	tree  []node
)

func main() {
	tree = getContent("content/")
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
		t = append(t, node{
			title,
			path,
			"post",
			[]node{},
		})
		body, err := getBody(path)
		if err != nil {
			log.Fatal(err)
		}
		ext := filepath.Ext(path)
		url := path[len("content") : len(path)-len(ext)]
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
