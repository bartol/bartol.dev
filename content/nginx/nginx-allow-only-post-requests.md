# Nginx allow only POST requests

server {
	# ...

	location / {
		# ...

		limit_except POST {
			deny all;
		}
	}
}
