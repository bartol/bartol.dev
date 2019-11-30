---
layout: post
title: Update Vim configuration
---

People on the internet say Vim is fastest and most configurable text editor of
them all. And you've decided to try it. But configuration is in some weird file
and language. Also, when you try to edit it, nothing happens. Very confusing.

First thing you have to do is open configuration file. For unix users it will
be inside home directory. It's hidden file so you might not find it in file
explorer by default.

```bash
vim ~/.vimrc
```

After you edit something in it, you should save it. Open Vim command mode with
`:` and then `w` for to save current file. After that click `enter` to execute
command.

Last step is sourcing file. This will let Vim know something has changed and it
should reload configuration. Open command mode with `:` again and enter `so %`.
That will source current file. Now you'll be able to see changes.
