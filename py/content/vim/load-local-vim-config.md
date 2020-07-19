# Load local Vim config

add to vimrc

	if filereadable(expand('~/.vimrc.local'))
		source ~/.vimrc.local
	endif