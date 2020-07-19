# Check is string snake case in JavaScript

	const re = /^([a-z]{1,})(_[a-z0-9]{1,})*$/;
	const isSnakeCase = re.test(str)
