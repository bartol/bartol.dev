# Python

## Access Flask server from local network

	$ flask run --host=0.0.0.0

Server is now accessible on `local_ip_of_your_machine:5000`

## Extract directory path from file path

	from pathlib import Path
	dir_path = Path("/home/bartol/todo.txt").parent

## Local file server

	$ python -m SimpleHTTPServer

## Pip create requirements file

	$ pip freeze > requirements.txt

## Pip dependency tree

	$ pip install pipdeptree
	$ pipdeptree -fl

## Pip install from file

	$ pip install -r requirements.txt

## Pip install from GitHub repository

	$ pip install https://github.com/<user>/<repository>/archive/<branch>.zip

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

## Python load environment variables from .env file

	$ pip install python-dotenv

then

	import os
	from dotenv import load_dotenv

	load_dotenv('.env')

	os.getenv('API_KEY')

## Python run linux command

	import os

	os.system("ls -la")

## Python shebang

	#!/usr/bin/env python3

## View file metadata

	$ python3 -m pip install -U hachoir
	$ hachoir-metadata file
