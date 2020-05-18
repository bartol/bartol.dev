# Rename files with Vim

_2020-04-26_

You will first have to install [moreutils](https://joeyh.name/code/moreutils/).
After that you can run command:

```bash
vidir
```

It will open files in current in vim. You can then edit them as you like.

If you want to rename only specific file type:

```bash
vidir *.png
```

And if you want to do it recursively:

```bash
find . -type f | vidir -
```
