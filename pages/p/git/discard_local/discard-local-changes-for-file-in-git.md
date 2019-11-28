---
title: Discard local changes for file in Git
date: 2019-11-10
tags:
  - git
  - til
---

I am sure you've been in situation where you made significant changes to file
but want to discard them. You could always delete and clone repository again
but what if you have other files that you don't want to discard that won't
work. Also, you could delete file and copy paste from repository. But there is
better way. You just need to checkout file. Checkout will get file from HEAD
and override uncommitted changes.

```sh
git checkout fileName
```

If file name collides with one of branches in your repository, add `--` between checkout and file name.
