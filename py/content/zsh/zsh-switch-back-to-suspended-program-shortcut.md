# Zsh switch back to suspended program shortcut

add to zshrc

	ctrl_z() {
		BUFFER="fg"
		zle accept-line
	}
	zle -N ctrl_z
	bindkey "^Z" ctrl_z
