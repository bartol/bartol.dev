---
title: Move line in Vim
date: 2019-11-22
tags:
  - vim
  - til
---

After moving from VS Code to Vim recently, one of the features that was
really missing was ability to move line up and down with shortcut.
Luckily, after a lot of exploring, I've found the solution.

All you need to do is create mappings for already existing Vim commands.
First 2 lines will move current line up and down (in normal mode) and
second 2 will move visual selection up and down.

```vim
nnoremap <M-j> :m .+1<CR>==
nnoremap <M-k> :m .-2<CR>==
vnoremap <M-j> :m '>+1<CR>gv=gv
vnoremap <M-k> :m '<-2<CR>gv=gv
```

These commands are mapped to Alt (meta key) + j/k. But due to poor
support for meta keys in some terminals it may not work as expected. You
can change `M` to `C` to get mappings with Ctrl instead of Alt.
