# Fix detached HEAD

if you want to delete changes

	$ git checkout master

if you want to keep changes

	$ git branch tmp
	$ git checkout master
	$ git merge tmp
