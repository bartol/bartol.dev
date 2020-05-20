# Check if program exists

	if command -v kak >/dev/null; then
		# ...
	fi

Why not `which`?

`which` is external binary and might not be present on machine while `command
-v` is built into shell.
