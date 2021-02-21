% python

## virtual environment

### create virtual environment

	$ python3 -m venv venv

### activate virtual environment

	$ . venv/bin/activate

### deactivate virtual environment

	$ deactivate

## break into debugger

	breakpoint()

or

	import pdb; pdb.set_trace()

## break into post mortem debugger

	import pdb; pdb.pm()


## code patterns

### handling errors

bad:

	if path:
		# readfile
	else:
		# handle no path

good:

	try:
		# readfile
	except PathErr:
		# handle no path

- use only one function in try block

## list all methods available for object

	dir(x)

## get object type

	type(x)

## get input from stdin

	text = input('Enter text: ')

## type conversions

	<type>(x)

types: `str`, `int`, `float`

## string length

	len(x)

## python interactive shell last command output

	_

## round number

	round(x)

to 2 digits:

	round(x, 2)

## get operating system name

	import os
	os.name

## list dir contents

	import os
	os.listdir(path)

## get script arguments

	import sys
	sys.argv

## generate random int

	import random
	random.randint(1, 100)

## use variable from global scope in function

	global x

## infinite loop

	while True:
		# ...

## loop over list

	for x in listofx:
		# ...

## loop over list with index

	for idx, x in enumerate(listofx):
		# ...

## loop over range of numbers

	for x in range([min, ]max[, step]):
		# ...

## write data to file

	f = open('data.txt', 'w')
	f.write('some data')
	f.close()

## read data from file

	f = open('data.txt', 'r')
	data = f.read() # or f.readlines()
	f.close()

## read data from remote file

	from urllib.request import urlopen
	f = urlopen('https://bdeak.net/c/.vimrc')
	data = f.read() # or f.readlines()
	f.close()

## import module

	import <module>

## import specific objects in current namespace

	from <package/module> import <object>

## import all objects in current namespace

	from <package/module> import *

## change module namespace

	import <package/module> as x

## run code when running as script and not when being imported

	if __name__ == '__main__':
		# ...

## create package from directory

- create `__init__.py` file
- import all objects from modules in it

## sort list

	sorted(x)

## sort list of dicts

	import operator
	sorted(x, key=operator.itemgetter('name'))

## reverse sort

	reversed(sorted(x))

## pretty print data

	from pprint import pprint
	pprint(x)

## format string

	'formatted {}'.format('string')
	'{fo} {st}'.format(st='string', fo='formatted')

or

	st = 'string'
	f'formatted {st}'

## map over list

	list(map(lambda x: len(x) * 2, ['x', 'abc'])

## reduce list

	from functools import reduce
	reduce(lambda a, x: a + x, [2,3,4,5])

## args

	import argparse
	parser = argparse.ArgumentParser(prog='xyz', description='about program...')
	parser.add_argument('f')
	parser.add_argument('-n', type=int, default=5, help='num of lines')
	parser.add_argument('--version', action='version', version='1.0.0')
	parser.add_argument('-i', '--input')
	parser.add_argument('-p', action=argparse.BooleanOptionalAction)
	parser.add_argument('--verbose', '-v', action='count', default=0)
	args = parser.parse_args()

## date and time

### unix time

	import time
	time.time()

### wait for x seconds

	import time
	time.sleep(x)

### date

	import datetime
	datetime.date(2020, 12, 25)

### today's date

	import datetime
	datetime.date.today()

### yesterday's date

	import datetime
	datetime.date.today() - datetime.timedelta(days=1)

### date from timestamp

	import datetime
	datetime.date.fromtimestamp(ts)

## logging

	import logging
	logging.critical('x')
	logging.error('x')
	logging.warning('x')
	logging.info('x')
	logging.debug('x')

### show all levels

	import logging
	logging.basicConfig(level=logging.DEBUG)

### log to file and console

	import logging
	from logging.handlers import RotatingFileHandler
	logging.basicConfig(
		handlers=[
			RotatingFileHandler('debug.log', maxBytes=2000000, backupCount=25)
			logging.StreamHandler()
		]
	)

### show stack trace

	import logging
	logging.error("Exception occurred", exc_info=True)

## run regex on string

	import re
	m = re.search('regex', 'string')
	m.group(idx)

## compile regex

	import re
	c = re.compile('regex')
	m = c.search('string')

## hash string

	from hashlib import sha256
	sha256('abc'.encode('ascii')).hexdigest()

## capture output from shell command

	import subprocess
	output = subprocess.check_output('cmd', shell=True)

## pad string with whitespace

	'test'.ljust(20)
	'test'.rjust(20)
	'test'.center(20)

## remove whitespace from string

	'  test  '.strip()

## copy text to clipboard

install:

	$ pip install pyperclip

use:

	import pyperclip
	pyperclip.copy('test')

## paste text from clipboard

install:

	$ pip install pyperclip

use:

	data = pyperclip.paste()

## open url in web browser

	import webbrowser
	webbrowser.open('https://www.bdeak.net/')

## sources

- <https://archive.org/details/comp3321/mode/2up>
- <https://automatetheboringstuff.com/>
