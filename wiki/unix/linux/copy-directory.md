# Copy directory

	$ cp -R dir_1 dir_2

There is one more tricky thing with `cp` and directories.

If you include `/` after directory name, it will only copy files from `dir_1`
and not directory itself.

	$ cp -R dir_1/ dir_2
