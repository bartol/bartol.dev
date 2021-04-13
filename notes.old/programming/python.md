# Python

## Extract directory path from file path

	from pathlib import Path
	dir_path = Path("/home/bartol/todo.txt").parent

## Local file server

	$ python -m SimpleHTTPServer

pip create requirements file
	pip freeze > requirements.txt

pip install from file
	pip install -r requirements.txt

## Python access command arguments

	import sys
	print(sys.argv[1]) # first argument

## Python activate virtual environment

	$ . venv/bin/activate

## Python break into debugger

	breakpoint()

or

	import ipdb; ipdb.set_trace()

## Python create virtual environment

	$ python3 -m venv venv

## Python deactivate virtual environment

	$ deactivate

## Python run linux command

	import os

	os.system("ls -la")

## Python shebang

	#!/usr/bin/env python3
