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
	data = f.read()
	f.close()

## sources

- <https://archive.org/details/comp3321/mode/2up>
