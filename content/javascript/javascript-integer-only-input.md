# JavaScript integer only input

	el.addEventListener('keyup', (e) => {
		const int = e.target.value | 0
		console.log("int value is", int)
	})
