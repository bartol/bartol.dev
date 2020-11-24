# Git

## Branches

### List all branches

	$ git branch

### Change branch

	$ git checkout <branch-name>

### Create branch

	$ git branch <branch-name>

### Create and change branch

	$ git checkout -b <branch-name>

### Delete branch

only if it's fully merged:

	$ git branch -d <branch-name>

force:

	$ git branch -D <branch-name>

### Get file from another branch

	$ git checkout <branch-name> -- <file-name>

### Merge branch in current branch

	$ git merge <branch-name>

## Config

### Set merge tool

	$ git config --global merge.tool vimdiff

## Ignored files

### Remove ignored file that is already committed but keep local ignored copy

	$ git rm --cached test.pyc
	$ git commit
