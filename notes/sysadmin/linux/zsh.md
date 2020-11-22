# Customize prompt in Zsh

	PROMPT="[%n@%m %~]%(#.#.$) "

- `%n` - username
- `%m` - hostname
- `%~` - relative path
- `%/` - absolute path
- `%1~` - current directory
- `%#` - `#` for root user, `%` for others
- `%(#.#.$)` - `#` for root user, `$` for others
- `%?` - exit code of previous command
- `%(?..%?)` - show exit code only if error
- `%*` - show current time
# Enable completion in Zsh

add to zshrc

	autoload -Uz compinit && compinit# Fix command typo in Zsh

add to zshrc

	setopt correct
# List most used commands

	$ history 1 | awk '{a[$2]++}END{for(i in a){print a[i] " " i}}' | sort -rn | head
# Load local Zsh config

add to zshrc

	if [[ -r ~/.zshrc.local ]]; then
		source ~/.zshrc.local
	fi# Show Git branch in right prompt

	RPROMPT='$(git rev-parse --abbrev-ref HEAD 2>/dev/null)'
	setopt prompt_subst

# Zsh case insensitive path completion

add to zshrc

	zstyle ':completion:*' matcher-list '' 'm:{a-z}={A-Z}' 'm:{a-zA-Z}={A-Za-z}' 'r:|[._-]=* r:|=* l:|=*'

or

	zstyle ":completion:*" matcher-list \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]}" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*" \
		"m:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*"
# Zsh change directory without cd

add to zshrc

	setopt autocd
# Zsh global aliases

aliases that can be used everywhere in command

	$ alias -g gp='| grep -i'
	$ ps ax gp go# Zsh history don't save commands that start with space

add to zshrc

	setopt histignorespace
# Zsh history file

add to zshrc

	export HISTFILE=~/.zsh_history# Zsh history ignore duplicates

add to zshrc

	setopt histignorealldups
# Zsh history search for last search string

`^R^R`
# Zsh history search shortcut

	$ !vi<tab>

will expand to last command that starts with `vi`

	$ !?zshrc<tab>

will expand to last command that contains `zshrc`
# Zsh history size

add to zshrc

	export HISTSIZE=1000000
	export SAVEHIST=$HISTSIZE
# Zsh keyboard shortcuts

- `^A` - beginning of the line
- `^E` - end of the line
- `alt + b` - move one word backward
- `alt + f` - move one word forward
- `^U` - delete whole line
- `^K` - delete after cursor
- `^W` - delete word before cursor
- `alt + d` - delete word after cursor
- `^R` - search history
- `^G` - escape from search
- `^_` - undo last change
- `^L` - clear screen
- `^C` - kill process
- `^Z` - suspend process# Zsh move to next match in history search

type search query, then: `^R`
# Zsh move to previous match in history search

type search query, move to next match, then: `^S`
# Zsh open current line in editor

add to zshrc

	autoload -Uz edit-command-line
	zle -N edit-command-line
	bindkey "^x^e" edit-command-line# Zsh pause command and look at the man page

`Alt + h`
# Zsh search history by beginning of the command

`Alt + p`
# Zsh set command aside

`Alt + q`
# Zsh set Emacs bindings

add to zshrc

	bindkey -e# Zsh set Vim bindings

add to zshrc

	bindkey -v
# Zsh share history across sessions

add to zshrc

	setopt sharehistory
# Zsh suffix aliases

aka open with aliases

	$ alias -s go='vim'
	$ main.go# Zsh switch back to suspended program shortcut

add to zshrc

	ctrl_z() {
		BUFFER="fg"
		zle accept-line
	}
	zle -N ctrl_z
	bindkey "^Z" ctrl_z
