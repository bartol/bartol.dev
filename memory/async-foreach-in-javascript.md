# Async forEach in JavaScript

	async function asyncForEach(array, callback) {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array)
		}
	}

[source](https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404)
