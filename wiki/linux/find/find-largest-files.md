# Find largest files

	$ find . -type f -exec ls -s {} \; | sort -rn | head -5
