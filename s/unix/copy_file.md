---
layout: post
title: Copy file
date: 2020-01-20
---

If you want to copy file on Unix system you can use simple, built-in command
`cp`.

To copy `file_1` in `file_2` run following command.

```bash
cp file_1 file_2
```

Copying multiple files in directory works the same way.

```bash
cp file_1 file_2 directory_1
```

Useful options for command `cp`:

- `-n` - don't overwrite an existing file
- `-f` - if destination file can't be opened, delete it and create new file
- `-p` - preserve file modification time, access time...
- `-v` - verbose output (print copied files to stdout)

Note that this only works with files. View how to copy directories
[here](/s/unix/copy_dir/).
