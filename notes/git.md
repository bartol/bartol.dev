% git

	$ curl -L bdeak.net/c/.gitconfig
	$ curl -L bdeak.net/c/.gitignore

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

![git branch graph](/files/git/git-rebase-graph.png)

	$ git rebase master

if there are conflicts run:

	$ git mergetool
	$ git rebase --continue

or stop rebase and restore original branch:

	$ git rebase --abort

### Create branch from commit

	$ git checkout <commit-name>
	$ git checkout -b <branch-name>

### Undo unpushed merge

	$ git reset --hard <merge-commit-hash>^1

### undo last merge

	$ git reset --hard master@{1}

### Undo pushed merge

	$ git revert -m 1 <merge-commit-hash>

## Tags

### List all tags

	$ git tag

### Create tag

	$ git tag <tag-name>

### Checkout tag

	$ git checkout <tag-name>

### Delete tag

	$ git tag -d <tag-name>

### delete remote tag

	$ git push --delete <remote> <tag>

### list remote tags

	$ git ls-remote --tags <remote>

## Commits

### Commit staged changes

	$ git commit

### Commit staged changes with inline message

	$ git commit -m "message..."

### Commit references

- branch is commit reference
- tag is commit reference
- `HEAD` is reference to last commit in current branch
- `<commit>~1` is reference to commit before commit
- `<commit>^1` is reference to first parent commit

![git parent reference graph](/files/git/git-parent-reference-graph.png)

- `@{"1 day ago"}` is reference to commit from 1 day ago
- `@{2020-11-25}` is reference to commit from 25/11/2020

### Get commit reference from hash

	$ git name-rev <commit-hash>

### Apply changes from commit in other branch

	$ git cherry-pick <commit-hash>

### Get file from x commits ago

	$ git checkout HEAD~<x> -- <file>

### Revert changes from commit

	$ git revert <commit-hash>

(creates new commit, used only for recent commits, can be used for remote commits)

### Delete last x commits

	$ git reset --hard HEAD~<x>

(can be used only for local commits)

### Get last commit hash

	$ git log -n1 --format=%H

### Fix commiting in wrong branch

last commit in the wrong branch:

	$ git checkout <right-branch-name>
	$ git cherry-pick <wrong-branch-name>
	$ git checkout <wrong-branch-name>
	$ git reset --hard <wrong-branch-name>~1

last 2 commits are in the wrong branch:

	$ git checkout <right-branch-name>
	$ git cherry-pick <wrong-branch-name>~1 # second to last commit
	$ git cherry-pick <wrong-branch-name>   # last commit
	$ git checkout <wrong-branch-name>
	$ git reset --hard <wrong-branch-name>~2

### Move commit from master to new branch

	git branch <new-branch-name>
	git reset --hard HEAD~1
	git checkout <new-branch-name>

### Git time machine

	$ git reflog
	$ git reset HEAD@{index}

### Add change to last commit

	$ git add <file>
	$ git commit --amend --no-edit

### Change last commit message

	$ git commit --amend

### Sign commit with gpg

	$ git commit -S

## Add

### Add all changes

	$ git add -A

### Interactively add changes

	$ git add -p

- stage change: `y`
- skip file: `d`

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

### Diff staged changes

	$ git diff --staged

### Show diff for words instead of lines

	$ git diff --word-diff

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

### Show files modified by each commit

	$ git log --stat

### Show HEAD history in all branches

	$ git reflog

### Show commit authors

	$ git shortlog -sen

## Stash

### Stash local changes

	$ git stash

### Get stash changes

	$ git stash pop <stash-ref>

### Get changes from last stash

	$ git stash pop

### List stashes

	$ git stash list

### Show stash changed files

	$ git stash show <stash-ref>

### Show stash diff

	$ git stash show -v <stash-ref>

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

	$ git push <remote> :refs/tags/<tag-name>

### Create local branch from remote

	$ git checkout <remote>/<branch>
	$ git checkout -b <local-branch>

### Remove branch from remote

	$ git push <remote> :<branch-name>

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

### Reset local branch state to remote branch state

	$ git fetch <remote>
	$ git checkout <branch>
	$ git reset --hard <remote>/<branch>
	$ git clean -df

### Reset local repository state to remote repository state

	$ cd ..
	$ rm -rf <repository-dir>
	$ git clone <repository-url>
	$ cd <repository-dir>

### Git shell

used to restrict access when hosting repository on server with ssh access

	$ chsh -s /usr/bin/git-shell git
	$ cp -R /usr/share/doc/git/contrib/git-shell-commands /home/git/
	$ chmod +x /home/git/git-shell-commands/help
	$ chmod +x /home/git/git-shell-commands/list

only `help` and `list` commands will be available if user tries to log in to
server via ssh

## Bisect

	$ git bisect start <bad-commit> <good-commit>

test if bug is present and run:

	$ git bisect good

or

	$ git bisect bad

automated way:

	$ git bisect run <script>

if script returns 0 exit code bisect will make commit good and if it returns
between 1 and 127 bisect will make commit bad until it finds first bad commit

return to original HEAD:

	$ git bisect reset

## Config

### List all options currently used

	$ git config -l

### Set identity

	$ git config --global user.name <your-name>
	$ git config --global user.email <your-email>

### Show diff in commit editor

	$ git config --global commit.verbose true

### Set merge tool

	$ git config --global merge.tool vimdiff

### Remove backup files from merge

	$ git config --global mergetool.keepBackup false

### Sign commits with gpg

	$ git config --global commit.gpgsign true

### Set command alias

	$ git config --global alias.<alias-name> <command>

for example:

	$ git config --global alias.s status

### Run shell command from git alias

	$ git config --global alias.<alias-name> "\!<shell-command>"

for example:

	$ git config --global alias.echo "\!echo hi"

### Useful git aliases

push all branches to all remotes:

	$ git config --global alias.p "\!git remote | xargs -L1 git push --all"

compact log:

	$ git config --global alias.l "log --oneline --graph"

add all changes and commit them:

	$ git config --global alias.ca "\!git add -A && git commit"

### Make repository bare (for servers)

	$ git config --bool core.bare true

### Change default branch for new repositories

	$ git config --global init.defaultBranch master

### Autocorrect commands

	$ git config --global help.autocorrect 1

add 2 second delay:

	$ git config --global help.autocorrect 20

### global git ignore

	$ git config --global core.excludesFile '~/.gitignore'

## Plugin

create executable file `git-<plugin-name>` and add it to shell path

run plugin:

	$ git <plugin-name>

## Files

### Check repository for corruption

	$ git fsck

### Remove untracked files

	$ git clean -id

### Cleanup unnecessary files

	$ git gc

### Remove ignored file that is already committed but keep local ignored copy

	$ git rm --cached test.pyc
	$ git commit

## Note sources

- <https://tkrajina.github.io/uvod-u-git/git.pdf>
- <https://ohshitgit.com/>

## number of commits between 2 commits

	$ git log <start-commit-hash>..<end-commit-hash> --oneline | wc -l

## changed lines between 2 commits

	$ git log <start-commit-hash>..<end-commit-hash> --numstat --pretty=tformat: --numstat | nawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s\n", add, subs, loc }'

## stash only one file

	$ git stash push <file>

## merge repositories

merge `<project-a>` in `<project-b>`

(optional) put merged repository in subfolder

	$ git clone <url>
	$ cd <project-a>
	$ git filter-repo --to-subdirectory-filter <project-a>

merge

	$ cd path/to/<project-b>
	$ git remote add <project-a> /path/to/<project-a>
	$ git fetch <project-a> --tags
	$ git merge --allow-unrelated-histories <project-a>/<branch>
	$ git remote remove <project-a>

## last commit diff

	$ git diff HEAD~1

## list all commits for branch

	$ git rev-list <branch>
