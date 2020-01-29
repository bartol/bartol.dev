---
layout: post
title: List directory contents
date: 2020-01-19
---

To view contents of directory you can use `ls`. Default output of `ls` may
not be informative enough so you can use following options:

- `-a` - show hidden files
- `-l` - show more info (permissions, size, time modified,...)
- `-h` - show human readable file sizes
- `-R` - list directories recursively
- `-S` - sort files by size
- `-t` - sort files by time modified

Options can be combined, for example `ls -la` to show hidden files and
more info.

But output is still monotone and boring. To add colors you can pass
`--color=auto` on Linux or `-G` on MacOS. On mac you can also add this
environment variable to shell configuration file to always show colors.

```bash
export CLICOLOR=1
```
