# Run commands non-interactively

	#!/usr/bin/env bash

	sftp server <<EOF
	ls
	get file1
	put file2
	EOF
