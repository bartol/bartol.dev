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
