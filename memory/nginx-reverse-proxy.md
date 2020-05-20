# Nginx reverse proxy

Reverse proxy with ssl and http2.

	server {
		server_name bartol.dev;
		listen 443 http2 ssl;

		location / {
			proxy_pass http://localhost:8080;
		}
	}

Then run `certbot --nginx -d bartol.dev` to add certificate file.
