% shell

all examples posix compatible

## cleanup function

	trap cleanup SIGINT SIGTERM ERR EXIT
	cleanup() {
		trap - SIGINT SIGTERM ERR EXIT
		# ...
	}

## replace extension in file name

	${<old-filename>%.<old-extension>}.<new-extension>

## strip suffix

	${<string>%<suffix>}

## strip prefix

	${<string>#<prefix>}

