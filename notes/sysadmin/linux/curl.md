# Curl

# Curl add headers to request

	$ curl -H "Content-Type: application/json" bartol.dev
# Curl allow insecure connections

	$ curl -k bartol.dev
# Curl display progress bar

	$ curl -# bartol.dev
# Curl download file

	$ curl -LO https://github.com/bartol/bdeak.net/archive/master.zip
# Curl return only headers

	$ curl -I bartol.dev
# Curl save output to file

	$ curl -O url

or

	$ curl -o file url
# Curl specify HTTP method

	$ curl -X POST bartol.dev
# Curl upload file

	$ curl -T photo.jpg https://linx.bartol.dev/upload/
