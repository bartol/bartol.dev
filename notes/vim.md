# vim

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

	:vsp

## open horizontal split

	:s

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

## run shell command from vim

	:!<command>

## replace in file

	:%s/<old>/<new>/g

## replace in linne

	:s/<old>/<new>/g

## hide search highlight

	:noh

## switch to window

	<C-w>h/j/k/l

## disable mouse selection

	:set mouse=

## concat next line with current

	J
