# JavaScript remove HTML tags from string

	`<p>content<img onload="alert('hey')"></p>`.replace(/<[^>]*>/g, '')
	// output: content
