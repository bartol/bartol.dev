# Rename files with editor

You will first have to install [moreutils](https://joeyh.name/code/moreutils/).

	$ vidir

If you want to rename only specific file type:

	$ vidir *.png

And if you want to do it recursively:

	$ find . -type f | vidir -
