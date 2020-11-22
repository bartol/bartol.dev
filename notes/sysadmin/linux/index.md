# Linux

# Create pdf from manpage

	$ man -t vim | ps2pdf - vim.pdf

# Get Github latest release

	$ curl -fsSLI -o /dev/null -w %{url_effective} https://github.com/hadolint/hadolint/releases/latest && echo

[source](https://gist.github.com/lukechilds/a83e1d7127b78fef38c2914c4ececc3c#gistcomment-2758860)
