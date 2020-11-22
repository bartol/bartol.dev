# Go

# Check if program exists in Go

	path, err := exec.LookPath("kak")
# Clean go.mod

	$ go mod tidy
# Convert string to kebab case in Go

	var re = regexp.MustCompile("[^a-z0-9]+")

	func kebabCase(s string) string {
		return strings.Trim(re.ReplaceAllString(strings.ToLower(s), "-"), "-")
	}

[source](https://www.reddit.com/r/golang/comments/3a5asx/slugify_a_very_simple_and_small_library_to_create/cs9m2lu/)
# Go delete file

	err := os.Remove("/path/to/file")
# Go int64 to int

	numint := int(numint64)
# Go int to int64

	numint64 := int64(numint)
# Go printf to variable

	pi := fmt.Sprintf("%.2f\n", 3.1415)
# Go print struct

	fmt.Printf("%#v\n", data)
# Go run specific test

	$ go test -run NameOfTest
# Go slugify string

add `github.com/metal3d/go-slugify` to imports

	post.URL = slugify.Marshal(post.Title)
# Go templates recursive loop

	{{ define "item" }}
	<li>
		<span>{{ .Title }}</span>
		{{ if gt (len .Children) 0}}
			<ul>
				{{ range .Chidren }}
				{{ template "item" . }}
				{{ end }}
			</ul>
		{{ end }}
	</li>
	{{ end }}

	<ul>
		{{ range .Items }}
		{{ template "item" . }}
		{{ end }}
	</ul>
# JSON to Go struct

<https://mholt.github.io/json-to-go/>