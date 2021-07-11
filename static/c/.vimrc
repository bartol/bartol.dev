syn on
set ic ar cc=80
set list lcs=tab:>\ ,trail:-,nbsp:+
cmap w!! w !sudo tee % > /dev/null
au BufWritePost *.go :sil !goimports -w %
au BufWritePost *.py :sil !black -ql 80 %
au BufRead,BufNewFile *.py :setl ts=4 sw=4 et
