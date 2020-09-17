# Nginx remove .html from URLs

	location / {
		if ($request_uri ~ ^/(.*)\.html) {
			return 301 /$1;
		}
		try_files $uri $uri.html $uri/ =404;
	}

[source](https://stackoverflow.com/a/38238001)
