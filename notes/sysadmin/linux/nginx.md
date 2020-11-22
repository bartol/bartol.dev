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
# Nginx basic auth

	auth_basic "Restricted site";
	auth_basic_user_file /opt/nginx/.htpasswd;

add user:

	$ echo -n 'bartol:' >> /opt/nginx/.htpasswd
	$ openssl passwd >> /opt/nginx/.htpasswd# Nginx file server

	root /var/www/files
	autoindex on;
	autoindex_exact_size off;
	autoindex_localtime on;
# Nginx redirect http to https

	server {
		...

		if ($scheme != "https") {
			return 301 https://$host$request_uri;
		}

		...
	}
# Nginx remove .html from URLs

	location / {
		if ($request_uri ~ ^/(.*)\.html) {
			return 301 /$1;
		}
		try_files $uri $uri.html $uri/ =404;
	}

[source](https://stackoverflow.com/a/38238001)
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
# Nginx reverse proxy SSL certificate

	$ sudo apt install -y certbot python-certbot-nginx
	$ sudo certbot --nginx --no-redirect
