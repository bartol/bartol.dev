# Rename files with Vim

You will first have to install [moreutils](https://joeyh.name/code/moreutils/).
After that you can run command:

	vidir

It will open files in current in vim. You can then edit them as you like.

If you want to rename only specific file type:

	vidir *.png

And if you want to do it recursively:

	find . -type f | vidir -
