# Setup Git server

working demo: [git.bartol.dev](https://git.bartol.dev)

login to debian-based vps

	$ sudo apt install git cgit fcgiwrap nginx python3-markdown
	$ sudo adduser git
	$ sudo mkdir /srv/git
	$ sudo chown -R git /srv/git
	$ su git
	$ cd
	$ mkdir .ssh && chmod 700 .ssh
	$ touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
	$ vi .ssh/authorized_keys

copy your public key from local machine

	$ cd /srv/git
	$ mkdir repo.git
	$ cd repo.git
	$ git init --bare

open repository on local machine

	$ git remote add server git@server:/srv/git/repo.git
	$ git push server master

login back to vps

	$ sudo vi /etc/cgitrc

[cgitrc](/files/setup-git-server/cgitrc)

	$ sudo vi /etc/nginx/sites-available/git.bartol.dev

[nginx-site](/files/setup-git-server/nginx-site)

	$ sudo ln -s /etc/nginx/sites-available/git.bartol.dev /etc/nginx/sites-enabled/
	$ sudo nginx -t
	$ sudo nginx -s reload
	$ sudo certbot --nginx --no-redirect -d git.bartol.dev
