# Setup Git server

working demo: [git.bdeak.net](https://git.bdeak.net)

login to debian-based vps

	$ sudo apt install git cgit fcgiwrap nginx certbot python3-certbot-nginx
	$ sudo adduser git
	$ sudo mkdir /srv/git
	$ sudo chown -R git /srv/git
	$ su git
	$ cd
	$ mkdir .ssh && chmod 700 .ssh
	$ touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
	$ vi .ssh/authorized_keys

copy your public key from local machine

	$ exit
	$ curl https://bartol.dev/files/git-server/cgitrc | sudo tee /etc/cgitrc
	$ curl https://bartol.dev/files/git-server/nginx | sudo tee -a /etc/nginx/sites-available/bdeak.net
	$ sudo ln -s /etc/nginx/sites-available/bdeak.net /etc/nginx/sites-enabled/
	$ sudo nginx -s reload
	$ sudo certbot --nginx -d git.bdeak.net

add repository:

	$ su git
	$ cd /srv/git
	$ mkdir repo
	$ cd repo
	$ git init --bare
	^D
	$ echo | sudo tee -a /etc/cgitrc
	$ echo repo.url=bdeak.net | sudo tee -a /etc/cgitrc
	$ echo repo.path=/srv/git/bdeak.net | sudo tee -a /etc/cgitrc
	$ echo repo.desc=my website | sudo tee -a /etc/cgitrc
	$ echo repo.owner=Bartol Deak | sudo tee -a /etc/cgitrc
	$ echo repo.section=web | sudo tee -a /etc/cgitrc
	$ echo repo.homepage=https://www.bdeak.net | sudo tee -a /etc/cgitrc

open existing repository on local machine

	$ git remote add srv1 git@srv1:/srv/git/repo
	$ git push --all srv1

or clone empty repository

	$ git clone git@srv1:/srv/git/repo
