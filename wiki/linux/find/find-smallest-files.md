# Find smallest files

	$ find . -type f -exec ls -s {} \; | sort -n | head -5
