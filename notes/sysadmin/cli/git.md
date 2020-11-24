# Git

## Branches

### List all branches

	$ git branch

### Create branch

	$ git branch <branch-name>

### Checkout branch

	$ git checkout <branch-name>

### Create and checkout branch

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

if there are conflicts run:

	$ git mergetool
	$ git commit

### Rebase current branch

![git branch graph](/files/sysadmin/linux/git/git-rebase-graph.png){height=300px}

	$ git rebase master

if there are conflicts run:

	$ git mergetool
	$ git rebase --continue

or stop rebase and restore original branch:

	$ git rebase --abort

### Apply changes from commit in other branch

	$ git cherry-pick <commit-hash>

### Create branch from tag

	$ git checkout <tag-name>
	$ git checkout -b <branch-name>

## Tags

### List all tags

	$ git tag

### Create tag

	$ git tag <tag-name>

### Checkout tag

	$ git checkout <tag-name>

### Delete tag

	$ git tag -d <tag-name>

## Config

### Set merge tool

	$ git config --global merge.tool vimdiff

## Ignored files

### Remove ignored file that is already committed but keep local ignored copy

	$ git rm --cached test.pyc
	$ git commit

## Note sources

- <http://tkrajina.github.io/uvod-u-git/git.pdf>