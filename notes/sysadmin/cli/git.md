# git

## Branches

### List all branches

	$ git branch

### List branches merged in branch

	$ git branch --merged <branch>

### List branches not merged in branch

	$ git branch --no-merged <branch>

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

![git branch graph](/files/sysadmin/cli/git/git-rebase-graph.png)

	$ git rebase master

if there are conflicts run:

	$ git mergetool
	$ git rebase --continue

or stop rebase and restore original branch:

	$ git rebase --abort

### Create branch from commit

	$ git checkout <commit-name>
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

## Commits

### Commit references

- branch is commit reference
- tag is commit reference
- `HEAD` is reference to last commit in current branch
- `<commit>~1` is reference to commit before commit
- `<commit>^1` is reference to first parent commit

![git parent reference graph](/files/sysadmin/cli/git/git-parent-reference-graph.png)

- `@{"1 day ago"}` is reference to commit from 1 day ago
- `@{2020-11-25}` is reference to commit from 25/11/2020

### Apply changes from commit in other branch

	$ git cherry-pick <commit-hash>

### Get file from x commits ago

	$ git checkout HEAD~<x> -- <file>

### Revert changes from commit

	$ git revert <commit-hash>

(creates new commit, used only for recent commits)

### Delete last x commits

	$ git reset --hard HEAD~<x>

## Diff

### Diff between 2 branches

	$ git diff <first-branch-name> <second-branch-name>

### Diff between 2 commits

	$ git diff <first-commit-hash> <second-commit-hash>

### Diff between current branche and other branch

	$ git diff <branch-name>

### Diff between current commit and other commit

	$ git diff <commit-hash>

### Diff for commit and its predecessor

	$ git diff <commit-hash>{~1,}

## Log

### Show log for current branch

	$ git log

### Show log for other branch

	$ git log <branch-name>

### Show log from commit

	$ git log <commit-hash>

### Show changed files in log

	$ git whatchanged

### Log compact mode

	$ git log --oneline

### Log show branch graph

	$ git log --graph

### Grep through commit titles

	$ git log --grep=<pattern>

### Search commit diffs

	$ git log -S<string>

### Show who changed line in file

	$ git blame -C <file>

### Show HEAD history

	$ git reflog

## Remote

### Clone repository

	$ git clone <repository-url>

### Fast clone with only recent history

	$ git clone --depth 5 --no-hardlinks <repository-url>

### Show remote branches

	$ git branch -a

### Show remotes

	$ git remote

### Show remotes with their addresses

	$ git remote -v

### Add remote

	$ git remote add <name> <address>

### Remove remote

	$ git remote remove <name>

### Pull changes from remote

	$ git fetch
	$ git merge <remote>/<branch>

or

	$ git pull

### Push changes

	$ git push <remote> <branch>

### Push local tags

	$ git push <remote> --tags

### Remove tag from remote

	$ git push origin :refs/tags/<tag-name>

### Create local branch from remote

	$ git checkout <remote>/<branch>
	$ git checkout -b <local-branch>

### Remove branch from remote

	$ git push origin :<branch-name>

### Remove branches removed from remote

	$ git fetch --prune

### Working with multiple remotes

get changes from remote:

	$ git fetch <remote>

try out changes:

	$ git checkout <remote>/<branch>

if we want to merge changes from remote:

	$ git checkout <branch>
	$ git merge <remote>/<branch>

## Config

### Set merge tool

	$ git config --global merge.tool vimdiff

### Make repository bare (for servers)

	$ git config --bool core.bare true

## Files

### Remove untracked files

	$ git clean -id

### Cleanup unnecessary files

	$ git gc

### Remove ignored file that is already committed but keep local ignored copy

	$ git rm --cached test.pyc
	$ git commit

## Note sources

- <http://tkrajina.github.io/uvod-u-git/git.pdf>