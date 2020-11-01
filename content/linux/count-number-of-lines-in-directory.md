# Count number of lines in directory

	$ find . -type f -exec cat {} + | wc -l
