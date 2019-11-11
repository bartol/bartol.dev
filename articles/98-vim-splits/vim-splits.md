---
title: Vim splits
date: 2019-11-11
tags:
  - vim
  - til
---

Every day while implementing new features or fixing bugs you reference other
files. And working with only one file opened at the same time isn't fun. That is
where Vim splits come in. They allow you to view and edit multiple files side by
side.

This is cheatsheet of useful shortcuts that you can use to navigate, create and
manipulation splits.

## Create

- `Ctrl + w` and then `v` - Create vertical split
- `Ctrl + w` and then `s` - Create horizontal split

Also, you can close split with `:q` same as Vim.

## Navigate

- `Ctrl + w` and then `w` - Cycle between splits
- `Ctrl + w` and then `hjkl` or arrow keys - Switch to split in direction

## Manipulation

- `Ctrl + w` and then `_` - Maximize height of current split
- `Ctrl + w` and then `|` - Maximize width of current split
- `Ctrl + w` and then `=` - Normalize dimensions of all splits
- `Ctrl + w` and then `R` - Swap splits
- `Ctrl + w` and then `T` - Convert split to new tab

## Recommended settings

You've maybe noticed that new splits appear on left side or top. This feels
very unnatural for me. You can change it by adding these settings to `.vimrc`.

```vim
set splitright
set splitbelow
```

And that is pretty much all there is to vim splits.
