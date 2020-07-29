# Auto install vim-plug

add to vimrc

	if empty(glob('~/.vim/autoload/plug.vim'))
		silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
			\ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
		autocmd VimEnter * PlugInstall --sync | source ~/.vimrc
	endif

[source](https://github.com/junegunn/vim-plug/wiki/tips#automatic-installation)