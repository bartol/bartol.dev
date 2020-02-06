---
layout: post
title: Check if program exists
date: 2020-02-06
---

To check if program exist you can use this simple command:

```bash
command -v nvim
```

It will return path to executable, but it won't be needed for this purpose.
What we actually want from that command is its status code so we can pipe
unwanted output to `/dev/null`.

Following example is in bash, but zsh and fish will work the same way, just
with different syntax for if statement.

```bash
if command -v nvim >/dev/null; then
    # do something
fi
```

But `which` command can already do all this. Why not use it?

`which` is external binary and might not be present on machine while `command
-v` is built in shell.
