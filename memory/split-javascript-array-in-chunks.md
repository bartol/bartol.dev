# Split JavaScript array in chunks

	const chunkSize = 5
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunk)
		// ...
	}
