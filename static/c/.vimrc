set ai ts=4 sw=4 hls is ic udf cc=80 ar
set list listchars=tab:>\ ,trail:-,nbsp:+
nmap <leader>b :ls<cr>:b<space>
nmap <leader>p :reg<cr>:norm "p<left>
cmap w!! w !sudo tee % > /dev/null
au BufWritePost *.go :sil !goimports -w %
