#!/usr/bin/env bash

[ "$1" == "init" ] && ssh srv1 << 'END'
sudo mkdir -p /home/www-data/www.bdeak.net
sudo chown -R $USER /home/www-data/www.bdeak.net
cat << 'EOF' | sudo tee -a /etc/nginx/sites-available/bdeak.net
server {
    server_name www.bdeak.net;

	root /home/www-data/www.bdeak.net;
	autoindex on;

	location / {
		if ($request_uri ~ ^/(.*)\.html) {
			return 301 /$1;
		}
		try_files $uri $uri.html $uri/ =404;
	}
}
EOF
sudo ln -s /etc/nginx/sites-{available,enabled}/bdeak.net
sudo certbot --nginx -n -d www.bdeak.net --redirect
END

./generate.py

rsync -r --delete out/ srv1:/home/www-data/www.bdeak.net
rm -r out
