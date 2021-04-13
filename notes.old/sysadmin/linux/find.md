# Find all empty directories

	$ find / -type d -empty
# Find all empty files

	$ find / -type f -empty
# Find all executable files

	$ find . -perm /a=x
# Find all files accessed X days ago

	$ find / -atime 5
# Find all files modified X days ago

	$ find / -mtime 5
# Find all files owned by

	$ find . -user bartol

or

	$ $ find . -group admin
# Find all files that fit in size range

	$ find / -size +2M -size -5M
# Find all hidden files

	$ find . -type f name ".*"
# Find all read-only files

	$ find . -perm /u=r
# Find case insensitive name

	$ find . -iname "todo.txt"
# Find delete files

	$ find / -type f -name 'todo.*' -exec rm -f {} \;
# Find everything except

	$ find . -not -name "todo.txt"
# Find largest files

	$ find . -type f -exec ls -s {} \; | sort -rn | head -5
# Find OR condition

	$ find . -name "todo.txt" -o -name "notes.txt"
# Find smallest files

	$ find . -type f -exec ls -s {} \; | sort -n | head -5
# Get file count recursively

	$ find wiki/ -type f | wc -l
# List all directories recursively

	$ find . -type d
# List all files and directories recursively

	$ find
# List all files recursively

	$ $ find . -type f
# Run command on files in directory

	$ find . -iname '*.py' -exec command {} \;
# Run spell checker on files in directory

	$ find . -iname '*.md' -exec aspell check {} \;
# Search for file in multiple directories

	$ find /home /etc -name "todo.txt"
