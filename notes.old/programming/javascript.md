# JavaScript

## Assert func

	function assert(condition, message) {
		if (!condition) {
			throw new Error(message || "assert failed");
		}
	}

[source](https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript)

## Async forEach

	async function asyncForEach(array, callback) {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array)
		}
	}

[source](https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404)

## array contains

	<arr>.includes(<val>)

## array of objects contains

	<arr>.some(el => el.<key> === <val>)

## Generate random hex code

	'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');

## Get current ISO date

	new Date().toISOString().substring(0, 10)

## Get current Unix timestamp

	Math.round(new Date().getTime() / 1000)

## Get current URL

	window.location.href

## Get date X months ago

	const threeMonthsAgo = new Date()
	threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
	
## Get last element from array

	arr[arr.length - 1]
	
## Get last X elements from array

	const last3 = arr.slice(-3)

## Get random element from array

	const random = arr[Math.floor(Math.random() * arr.length)]

## Get Unix timestamp for date

	Math.round(new Date("2002-09-16").getTime() / 1000)

[source](https://stackoverflow.com/questions/11893083/convert-normal-date-to-unix-timestamp/11893157#11893157)

## Get user agent

	navigator.userAgent

## Convert string to kebab case

	const x = title
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase()

## JavaScript currying

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

## Default parameters

	const sayHi = (user = "default user") => {
		return `Hey, ${user}!`;
	};

or

	const newUser = (name, greeting = `Hey, ${name}`) => {
		saveNameToDB(name);
		console.log(greeting);
	};

## Error reporter

	window.onerror = function(msg, _path, line, column, error) {
		fetch('/errors', {
			error: error ? error.stack : '',
			column: column,
			line: line,
			msg: msg,
		})
		return false
	}
	
## Integer only input

	el.addEventListener('keyup', (e) => {
		const int = e.target.value | 0
		console.log("int value is", int)
	})

## Remove HTML tags from string

	`<p>content<img onload="alert('hey')"></p>`.replace(/<[^>]*>/g, '')
	// output: content

## Rename destructured variable

	const { firstName: name, lastName } = user

## Scroll left max

	const scrollLeftMax = element.scrollWidth - element.clientWidth

## Scroll top max

	const scrollTopMax = element.scrollHeight - element.clientHeight

local storage get item

	localStorage.getItem('key')

local storage remove item

	localStorage.removeItem('key')
	
local storage set item

	localStorage.setItem('key', 'value')




html reload page
	window.location.reload()

array remove duplicates
	[...new Set(arr)]

string replace substring
	str.replace('old', 'new')

html form reset state
	document.querySelector('form').reset()

array reverse
	[...arr].reverse()

string reverse
	[...str].reverse().join('')

array shuffle
	arr.sort(() => Math.random() - 0.5);

array split in chunks
	const chunk_size = 10
	for (let i = 0; i < arr.length; i += chunk_size) {
		const chunk = arr.slice(i, i + chunk)
		// ...
	}

string trim
	str.trim()
