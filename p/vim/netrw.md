---
layout: post
title: Vim netrw cheatsheet
date: 2019-11-04
---

Netrw is file explorer built in Vim. While not perfect, I don't think it
deserves hate it gets. After coming to Vim world from more traditional code
editor, VS Code, I thought that kind of explorer was a joke. Immediately
downloaded NERDTree and returned my well known explorer functionality. It turns
out, that I was wrong. After playing few days with Netrw I _fell in love_ with
it and ditched NERDTree.

Area that this kind of explorer really shines is working with multiple opened
files. When you have one explorer it is much harder to put one file in one
split and another is second, and then change second... you get the point. Also,
it takes valuable space from your monitor. Why have explorer opened when you're
not using it.

Now, you may realize that this short introduction is using phrase "this kind of
editor". By that I mean that I don't care if my explorer is called Netrw,
NERDTree or something else. Netrw is just what I find most convenient and
effective right now, hence this post.

Let's explore some shortcuts, shall we?

## Where to get it

3 options. `:Explore`, `:Sexplore` and `:Vexplore` to open in full window, in
horizontal or vertical split. You should map this to shortcut anyways.

## Navigation

- `enter` - open file or directory
- `-` - go to parent directory
- `o` - open file or directory in horizontal split
- `v` - open file or directory in vertical split

## Tree manipulation

Fancy name for renaming, creating... files (and folders).

- `%` - create file
- `d` - create directory
- `R` - rename file or directory
- `D` - delete file or directory
- `x` - open file in default program

## Options

- `gh` - hide or show hidden files
- `r` - reverse sort
- `s` - change sort (by name, time or size)

## Config

```text
let g:netrw_banner = 0
nnoremap <C-b> :<C-u>Explore<CR>
```

Snippet from my Vim config. First line disables banner and second maps explorer
to Ctrl + B.

The only thing I kind of miss is not showing git status in explorer.
