# vim

	$ curl -L bdeak.net/c/.vimrc

## Start vim without .vimrc

	$ vim -u NONE

## vimdiff save merge and exit

	:w
	:qa

## open terminal in vertical split

	:vert term

## open terminal in horizontal split

	:term

## switch to last used buffer

	:b#

## save file

	:w

## save file and exit

	:wq

## exit without saving

	:q!

## edit file

	:e <file>

## open vertical split

	<C-w>v

or

	:vsp

## open horizontal split

	<C-w>s

or

	:sp

## make splits equal size

	<C-w>=

## maximize split vertically

	<C-w>|

## maximize split horizontally

	<C-w>_

## insert file in current buffer

	:r <file>

## insert output of shell command in current buffer

	:r !<command>

## reload current buffer

	:r

## run shell command from vim

	:!<command>

## replace in file

	:%s/<old>/<new>/g

## replace in linne

	:s/<old>/<new>/g

## remove search highlight

	:noh

## switch to window

	<C-w>h/j/k/l

## disable mouse selection

	:set mouse=

## concat next line with current

	J

## open ripgrep results

	$ rg -l <search> | xargs -o vim

## swap splits

	<C-w><C-r>

## convert spaces to tabs

	:set noet
	:set ts=4
	:%retab!

## convert tabs to spaces

	:set et
	:%retab!