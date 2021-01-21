move to linux.md

# Run commands non-interactively

	#!/usr/bin/env bash

	sftp server <<EOF
	ls
	get file1
	put file2
	EOF
# Sftp change local directory

	sftp> lcd path
# Sftp change remote directory

	sftp> cd path
# Sftp close connection

	sftp> bye

or

	sftp> exit

or

	sftp> quit
# Sftp connect to server

	$ sftp server
# Sftp create local directory

	sftp> lmkdir path
# Sftp create remote directory

	sftp> mkdir path
# Sftp delete remote file

	sftp> rm path
# Sftp display local directory listing

	sftp> lls
# Sftp display local working directory

	sftp> lpwd
# Sftp display remote directory listing

	sftp> ls
# Sftp display remote working directory

	sftp> pwd
# Sftp download directory

	sftp> get -r remote [local]
# Sftp download file

	sftp> get remote [local]
# Sftp escape to local shell

	sftp> !
# Sftp rename remote file

	sftp> rename oldpath newpath
# Sftp show disk usage

	sftp> df -h
# Sftp show help

	sftp> ?

or

	sftp> help
# Sftp upload directory

	sftp> put -r local [remote]
# Sftp upload file

	sftp> put local [remote]
# Thunar connect to sftp

`^L`

then enter `sftp://server`
