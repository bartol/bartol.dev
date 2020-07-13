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

	$ exit
	$ sudo vi /etc/cgitrc

[cgitrc](/files/setup-git-server/cgitrc)

	$ sudo vi /etc/nginx/sites-available/git.bartol.dev

[nginx-site](/files/setup-git-server/nginx-site)

	$ sudo ln -s /etc/nginx/sites-available/git.bartol.dev /etc/nginx/sites-enabled/
	$ sudo nginx -t
	$ sudo nginx -s reload
	$ sudo certbot --nginx --no-redirect -d git.bartol.dev

add repository:

	$ su git
	$ cd /srv/git
	$ mkdir repo
	$ cd repo
	$ git init --bare
	$ echo section=web >> cgitrc
	$ echo owner=bartol >> cgitrc
	$ echo readme=:README.md >> cgitrc
	$ vi description

open repository on local machine

	$ git remote add server git@server:/srv/git/repo
	$ git push --all server

