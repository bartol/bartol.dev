# Copy file

	$ cp file_1 file_2

Copying multiple files in directory:

	$ cp file_1 file_2 directory_1

Useful flags:

- `-n` - don't overwrite an existing file
- `-f` - if destination file can't be opened, delete it and create new file
- `-p` - preserve file modification time, access time...
- `-v` - verbose output (print copied files to stdout)
