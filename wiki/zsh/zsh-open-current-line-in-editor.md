# Zsh open current line in editor

add to zshrc

	autoload -Uz edit-command-line
	zle -N edit-command-line
	bindkey "^x^e" edit-command-line