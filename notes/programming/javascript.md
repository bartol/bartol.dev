# Assert in JavaScript

	function assert(condition, message) {
		if (!condition) {
			throw new Error(message || "assert failed");
		}
	}

[source](https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript)
# Async forEach in JavaScript

	async function asyncForEach(array, callback) {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array)
		}
	}

[source](https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404)
# Check if JavaScript array contains

	if (users.includes('b')) {
		// ...
	}# Check if JavaScript array of objects contains

	if (users.some(u => u.name === 'b')) {
		// ...
	}# Check if string ends with in JavaScript

	name.endsWith('b')# Check if string starts with in JavaScript

	name.startsWith('b')# Check is string snake case in JavaScript

	const re = /^([a-z]{1,})(_[a-z0-9]{1,})*$/;
	const isSnakeCase = re.test(str)
# Clear local storage

	localStorage.clear()# ESLint disable rule for current file

on top add:

	/* eslint rule-name: 0 */
# Gatsby console message

in `gatsby-browser.js`:

	console.log("hey")
# Generate random hex code in JavaScript

	'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');# Get current ISO date in JavaScript

	new Date().toISOString().substring(0, 10)
# Get current Unix timestamp in JavaScript

	Math.round(new Date().getTime() / 1000)

[source](https://stackoverflow.com/questions/11893083/convert-normal-date-to-unix-timestamp/11893157#11893157)# Get current URL

	window.location.href
# Get date X months ago in JavaScript

	const threeMonthsAgo = new Date()
	threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)# Get last element from JavaScript array

	arr[arr.length - 1]# Get last X elements from JavaScript array

	const last3 = arr.slice(-3)# Get random element from JavaScript array

	const random = arr[Math.floor(Math.random() * arr.length)]
# Get Unix timestamp for date in JavaScript

	Math.round(new Date("2002-09-16").getTime() / 1000)

[source](https://stackoverflow.com/questions/11893083/convert-normal-date-to-unix-timestamp/11893157#11893157)# Get user agent

	navigator.userAgent
# Javascript convert string to kebab case

	const x = title
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase()
# JavaScript currying

example:

	const doTheHardStuff = function(x) {
		const z = doSomethingComputationallyExpensive(x)
		return function (y){
			z + y
		}
	}

	const finishTheJob = doTheHardStuff(10)
	finishTheJob(20)
	finishTheJob(30)
# Javascript default parameters

	const sayHi = (user = "default user") => {
		return `Hey, ${user}!`;
	};

or

	const newUser = (name, greeting = `Hey, ${name}`) => {
		saveNameToDB(name);
		console.log(greeting);
	};
# JavaScript error reporter

	window.onerror = function(msg, _path, line, column, error) {
		fetch('/errors', {
			error: error ? error.stack : '',
			column: column,
			line: line,
			msg: msg,
		})
		return false
	}# JavaScript integer only input

	el.addEventListener('keyup', (e) => {
		const int = e.target.value | 0
		console.log("int value is", int)
	})
# JavaScript remove HTML tags from string

	`<p>content<img onload="alert('hey')"></p>`.replace(/<[^>]*>/g, '')
	// output: content
# Javascript rename destructured variable

	const { firstName: name, lastName } = user
# JavaScript scroll left max

	const scrollLeftMax = element.scrollWidth - element.clientWidth
# JavaScript scroll top max

	const scrollTopMax = element.scrollHeight - element.clientHeight
# Local storage get item

	localStorage.getItem('key')# Local storage remove item

	localStorage.removeItem('key')# Local storage set item

	localStorage.setItem('key', 'value')# Make whole web page editable

	document.designMode = 'on'
# Node create directory if it doesn't exist

	const fs = require('fs')

	const createDirectoryIfItDoesntExist = directoryName => {
		return !fs.existsSync(directoryName) ? fs.mkdirSync(directoryName) : undefined
	}# Open .json file in Node

	const json = require("file.json")

or

	const json = JSON.parse(fs.readFileSync("file.json", "utf8"))
# Private property in package.json

used to prevent accidental package publishing
# Reload page with JavaScript

	window.location.reload()

hard reload

	window.location.reload(true)# Remove duplicates in JavaScript array

	[...new Set(arr)]# Repeat string in JavaScript

	'a'.repeat(3) // 'aaa'# Replace substring in JavaScript string

	'hi world'.replace('hi', 'hello') // 'hello world'# Reset HTML form state with JavaScript

	document.querySelector('form').reset()
# Return object from JavaScript arrow function

	const arrowFunc = () => ({ user: 'b' })# Reverse array in JavaScript

	[...arr].reverse()
# Reverse string in JavaScript

	[...name].reverse().join('')# Shuffle an array in JavaScript

	arr.sort(() => Math.random() - 0.5);

# Split JavaScript array in chunks

	const chunkSize = 5
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunk)
		// ...
	}
# Trim string in JavaScript

	'      hello world  '.trim()      // 'hello world'
	'      hello world  '.trimStart() // 'hello world  '
	'      hello world  '.trimEnd()   // '      hello world'# Use window object in Gatsby

	if (typeof window !== 'undefined') {
		// ...
	}# Use window object in Next

	if (process.browser) {
		// ...
	}