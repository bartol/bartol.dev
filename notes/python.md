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
