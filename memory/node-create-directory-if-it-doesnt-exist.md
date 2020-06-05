# Node create directory if it doesn't exist

	const fs = require('fs')

	const createDirectoryIfItDoesntExist = directoryName => {
		return !fs.existsSync(directoryName) ? fs.mkdirSync(directoryName) : undefined
	}