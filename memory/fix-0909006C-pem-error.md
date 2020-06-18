# Fix 0909006C PEM error

	const replace = require('lodash.replace')
	const apiKey = replace(process.env.YOUR_API_KEY, new RegExp('\\\\n', 'g'), '\n')

[source](https://github.com/googleapis/google-api-nodejs-client/issues/1110#issuecomment-436868760)
