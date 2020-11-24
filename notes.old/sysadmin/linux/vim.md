# Append to Vim macro

If you recorded macro in `b` register: `qB`
# Auto install vim-plug

add to vimrc

	if empty(glob('~/.vim/autoload/plug.vim'))
		silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
			\ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
		autocmd VimEnter * PlugInstall --sync | source ~/.vimrc
	endif

[source](https://github.com/junegunn/vim-plug/wiki/tips#automatic-installation)# Change Vim leader key

add to vimrc

	let mapleader = " "# Create directory in Netrw

`d`
# Create file in Netrw

`%`
# Delete file or directory in Netrw

`D`
# Fix backspace in Vim

add to vimrc

	set backspace=indent,eol,start

# Fix slow esc in Vim

add to vimrc

	set ttimeout ttimeoutlen=0

# Insert character above or below cursor in Vim

Insert character above cursor: `C-y`

Insert character below cursor: `C-e`

(in insert mode)
# Jump to change in Vim

prev: `g,`

next: `g;`
# Jump to hunk in vim-gitgutter

prev: `[c`

next: `]c`
# Jump to next blank line

`}`

or

`{`
# Jump to other end of visual selection

`o`
# Jump to typo in Vim

prev: `[s`

next: `]s`
# Load local Vim config

add to vimrc

	if filereadable(expand('~/.vimrc.local'))
		source ~/.vimrc.local
	endif# Paste last deleted text

`"1p`
# Pipe stdin to Vim

	$ echo "hey" | vim -
# Rename file or directory in Netrw

`R`
# Repeat last Vim macro

`@@`
# Search for word under cursor in Vim

`#`# Select last selection in Vim

`gv`
# Setup Vim

[Setup dotfiles](/linux/setup-dotfiles)

then:

	$ mkdir -p ~/.vim/undo
	$ git clone https://github.com/editorconfig/editorconfig-vim ~/.vim/pack/plugins/start/editorconfig-vim
# Show all available completions in command mode

`<c-d>`
# Swap current window with previous in Vim

	<C-w>x
# Use ripgrep in Vim

add to vimrc

	set grepprg=rg\ --vimgrep
	set grepformat=%f:%l:%c:%m# View binary file in Vim

`:%!xxd`
# Vim apply indentation settings to file

`:retab`
# Vim complete file name

`<C-x><C-f>`
# Vim convert split to new tab

`Ctrl + w` and then `T`
# Vim create horizontal split

`Ctrl + w` and then `s`
# Vim create vertical split

`Ctrl + w` and then `v`
# Vim cycle between splits

`Ctrl + w` and then `w`
# Vim discard all changes made to file

	:e!
# Vim enable mouse scroll

add to vimrc

	set mouse=a
# Vim faster quit without saving

`ZQ`
# Vim faster save and quit

`ZZ`

or

`:x`
# Vim fix last typo

add to vimrc

normal mode mapping:

	nnoremap <leader>c [s1z=<C-o>

insert mode mapping:

	inoremap <C-l> <esc>[s1z=<C-o>a# Vim hide all other buffers

`<c-w>o`
# Vim hide buffer

`:hide`
# Vim increment/decrement number

- increment: `Ctrl + a`
- decrement: `Ctrl + x`
# Vim indent line

`>>`

or

`<<`
# Vim indent n lines

`5>>`

or

`5<<`
# Vim insert another file after cursor

	:r file
# Vim insert output of shell command after cursor

	:r!ls
# Vim jump history

`:jumps`
# Vim jump to class beginning

`[[` or `]]`
# Vim jump to end of previous word

`ge`
# Vim jump to first non-blank character

`_`
# Vim jump to last insertion

`gi`
# Vim jump to method beginning

`[m` or `]m`
# Vim jump to method end

`[M` or `]M`
# Vim jump to path

`gf`
# Vim jump to tag

`:tjump xyz`
# Vim maximize height of current split

`Ctrl + w` and then `_`
# Vim maximize width of current split

`Ctrl + w` and then `|`
# Vim move line or block

add to vimrc

	nnoremap <M-j> :m .+1<CR>==
	nnoremap <M-k> :m .-2<CR>==
	vnoremap <M-j> :m '>+1<CR>gv=gv
	vnoremap <M-k> :m '<-2<CR>gv=gv
# Vim move line under cursor

- top: `zt`
- middle: `zz`
- bottom: `zb`
# Vim move to first word in next line

`+`
# Vim normalize dimensions of all splits

`Ctrl + w` and then `=`
# Vim open link in browser

`gx`# Vim open shell

`:sh`
# Vim paste from yank register in insert mode

`<c-r>0`
# Vim rename buffer

`:file xyz`
# Vim replace character under cursor

	s
# Vim rerun last command

`@:`
# Vim resize horizontal split

`<c-w>+` or `<c-w>-`
# Vim resize vertical split

`<c-w>>` or `<c-w><`
# Vim run normal mode command from command

`:norm yy`
# Vim save only part of file

to save only between 15th and 20th line

	:15,20w
# Vim scroll sync

`:set scrollbind`
# Vim select HTML tag

`vit` or `vat`
# Vim send ctrl + w in terminal

`<c-w>.`
# Vim show all matching tags

`g]`
# Vim show buffer info

`<c-g>`
# Vim show more buffer info

`g<c-g>`
# Vim show whitespace

add to vimrc

	set list listchars=tab:>\ ,trail:-,nbsp:+# Vim spell check suggestions

`z=`
# Vim start at the end of file

	$ vim + todo.txt
# Vim start in insert mode

	$ vim +startinsert todo.txt
# Vim swap splits

`Ctrl + w` and then `r`
# Vim switch character case

`~`
# Vim switch to split in direction

`Ctrl + w` and then `hjkl` or arrow keys
# Vim vertical terminal

`:vert term`
# Vim view tag stack

`:tags`
