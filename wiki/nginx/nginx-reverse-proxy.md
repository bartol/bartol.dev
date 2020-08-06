# Nginx reverse proxy

`/etc/nginx/sites-available/bartol.dev`

	server {
		server_name bartol.dev www.bartol.dev;
		listen 80;
		listen [::]:80;
		listen 443 ssl http2;
		listen [::]:443 ssl http2;

		if ($scheme != "https") {
			return 301 https://$host$request_uri;
		}

		location / {
			proxy_pass http://localhost:8080;

			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}
	}

```
$ sudo ln -s /etc/nginx/sites-available/bartol.dev /etc/nginx/sites-enabled/
```
