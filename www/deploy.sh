#!/usr/bin/env bash

[ "$1" == "init" ] && ssh srv1 << 'END'
sudo mkdir -p /home/www-data/www.bdeak.net
sudo chown -R $USER /home/www-data/www.bdeak.net
curl https://www.bdeak.net/nginx-site | sudo tee -a /etc/nginx/sites-available/bdeak.net
sudo ln -s /etc/nginx/sites-{available,enabled}/bdeak.net
sudo certbot --nginx -n -d www.bdeak.net -d bdeak.net --redirect
END

./generate.py

rsync -r --delete out/ srv1:/home/www-data/www.bdeak.net
rm -r out
