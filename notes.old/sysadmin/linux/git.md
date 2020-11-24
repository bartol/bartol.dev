# Git
# Better commit messages

	feat     | new feature for the user, not a new feature for build script
	fix      | bug fix for the user, not a fix to a build script
	docs     | changes to the documentation
	style    | formatting, missing semi colons, etc; no production code change
	refactor | refactoring production code, eg. renaming a variable
	test     | adding missing tests, refactoring tests; no production code change
	chore    | updating dependencies etc; no production code change

[source](https://seesparkbox.com/foundry/semantic_commit_messages)
# Fix detached HEAD

if you want to delete changes

	$ git checkout master

if you want to keep changes

	$ git branch tmp
	$ git checkout master
	$ git merge tmp
# Git add interactive

	$ git add -i
# Git add patch

	$ git add -p
# Git add remote

	$ git remote add origin git@server:/srv/git/bartol.dev

or

	$ git remote add origin git@github.com:bartol/bartol.dev

# Git apply patch

	$ git am mypatch.patch

# Git delete untracked files

	$ git clean -id
# Git discard local changes

	$ git reset --hard HEAD
# Git discard unstaged changes

	$ git restore .
# Git edit last unpushed commit

	$ git commit --amend
# Git generate patch

	$ git format-patch -<n>

where `<n>` is number of last commits that you want to include in patch
# Git list modified files

	$ git diff --name-only
# Git list staged files

	$ git diff --name-only --cached
# Git list unpushed commits

	$ git log --branches --not --remotes --oneline
# Git list untracked files

	$ git ls-files --others --exclude-standard
# Git log for renamed file

	git log --follow file
# Git log view diff

	$ git log -p

# Git merge patch from email

	$ git am

then paste email body and click `^D` to end input

	$ git add -A
	$ git commit
# Git push to all remotes

	$ git remote | xargs -L1 git push --all
# Git remove tracked directory

	$ git rm -r <dir>

# Git remove tracked file

	$ git rm <file>

# Git rename tracked file

	$ git mv <src> <dst>

# Git send patch via email

if `sendmail` is working then you can run this command to send last 3 commits

	$ git send-email HEAD~3

[more info](https://git-send-email.io/)
# Git set upstream branch

	$ git branch -u origin/master
# Git tutorial

	$ git help everyday
# Git undo last commit

preserve changes in staged:

	$ git reset --soft HEAD~1

discard changes:

	$ git reset --hard HEAD~1
# Git undo multiple commits

	$ git reset --hard fc52ec0
# Git unstage file

	$ git restore --staged file
# Git view remotes

	$ git remote -v
# Git view staged diff

	$ git diff --staged

or

	$ git diff --cached

# Run Git in another directory

	$ git -C ~/path/to/dir status
# Setup GitHub

1. Create SSH key

		$ ssh-keygen -t rsa -b 4096 -C "b@bartol.dev"

1. Start SSH agent

		$ eval "$(ssh-agent -s)"

1. Add key to SSH agent

		$ ssh-add ~/.ssh/id_rsa

1. Copy key to clipboard

		$ xclip -sel clip < ~/.ssh/id_rsa.pub

1. Add key in [GitHub settings](https://github.com/settings/keys)
# Setup Git remotes

	$ git remote remove origin
	$ git remote add server git@server:/srv/git/repo
	$ git remote add github git@github.com:bartol/repo
	$ git remote add sourcehut git@git.sr.ht:~bd/repo
	$ git push -u server master
	$ git p
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
	$ curl https://www.bdeak.net/files/git-server/cgitrc | sudo tee /etc/cgitrc
	$ curl https://www.bdeak.net/files/git-server/nginx | sudo tee -a /etc/nginx/sites-available/bdeak.net
	$ sudo ln -s /etc/nginx/sites-available/bdeak.net /etc/nginx/sites-enabled/
	$ sudo nginx -s reload
	$ sudo certbot --nginx -d git.bdeak.net --redirect

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
# Show diff in Git commit editor

Add to `~/.gitconfig`

	[commit]
		verbose = true
