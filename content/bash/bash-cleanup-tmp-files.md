# Bash cleanup tmp files

	function cleanup {
		rm -f $TMPFILE
		exit 1
	}
	trap cleanup EXIT
