# shell

all examples posix compatible

## cleanup function

	trap cleanup SIGINT SIGTERM ERR EXIT
	cleanup() {
		trap - SIGINT SIGTERM ERR EXIT
		# ...
	}
