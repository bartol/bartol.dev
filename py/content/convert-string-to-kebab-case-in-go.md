# Convert string to kebab case in Go

	var re = regexp.MustCompile("[^a-z0-9]+")

	func kebabCase(s string) string {
		return strings.Trim(re.ReplaceAllString(strings.ToLower(s), "-"), "-")
	}

[source](https://www.reddit.com/r/golang/comments/3a5asx/slugify_a_very_simple_and_small_library_to_create/cs9m2lu/)
