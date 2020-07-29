# Assert in JavaScript

	function assert(condition, message) {
		if (!condition) {
			throw new Error(message || "assert failed");
		}
	}

[source](https://stackoverflow.com/questions/15313418/what-is-assert-in-javascript)
