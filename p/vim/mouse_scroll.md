---
layout: post
title: Enable mouse scroll in Vim
date: 2019-11-08
---

After using Vim for about 10 or so days, one of the most annoying things was
mouse scroll. I was trying to not do it but sometimes my muscle memory would
just unconsciously do it. I would then find myself looking at half Vim window
and half my previous terminal commands. So, I decided to fix it.

```vim
set mouse=a
```

After adding this line to your `vimrc` and sourcing it, your scroll will work
as expected. Still, consider using keyboard shortcuts for scroll, it's just
faster.

This setting was tested and works in Vim version `8.1` and NeoVim version
`0.4.2`.
