# Nginx allow only GET requests

	server {
		# ...

		location / {
			# ...

			limit_except GET {
				deny all;
			}
		}
	}

