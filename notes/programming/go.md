# Go

## Check if program exists

	path, err := exec.LookPath("vim")

## Clean go.mod

	$ go mod tidy

## Convert string to kebab case

	var re = regexp.MustCompile("[^a-z0-9]+")

	func kebabCase(s string) string {
		return strings.Trim(re.ReplaceAllString(strings.ToLower(s), "-"), "-")
	}

[source](https://www.reddit.com/r/golang/comments/3a5asx/slugify_a_very_simple_and_small_library_to_create/cs9m2lu/)

## Delete file

	err := os.Remove("/path/to/file")

## int64 to int

	numint := int(numint64)

## int to int64

	numint64 := int64(numint)

## Printf to variable

	pi := fmt.Sprintf("%.2f\n", 3.1415)

## Print struct

	fmt.Printf("%#v\n", data)

## Run specific test

	$ go test -run NameOfTest

## Slugify string

add `github.com/metal3d/go-slugify` to imports

	post.URL = slugify.Marshal(post.Title, true)

## Go templates recursive loop

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

## JSON to Go struct

<https://mholt.github.io/json-to-go/>