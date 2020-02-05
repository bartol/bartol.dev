---
layout: post
title: Copy directory
date: 2020-01-20
---

Unix built-in command for copying, `cp` is very simple. Maybe even too simple.
It won't even copy directories by default. You have to pass `-R` option to it.

To copy `dir_1` in `dir_2` run following command.

```bash
cp -R dir_1 dir_2
```

But wait. There is one more tricky thing with `cp` and directories.

If you include `/` after directory name, it will copy files from `dir_1`, but
not the directory itself.

```bash
cp -R dir_1/ dir_2
```

View how to copy files and useful flags for command `cp`
[here](/s/unix/copy_file/).
