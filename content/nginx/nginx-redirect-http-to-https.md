# Nginx redirect http to https

	server {
		...

		if ($scheme != "https") {
			return 301 https://$host$request_uri;
		}

		...
	}
