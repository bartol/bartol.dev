---
title: Autocomplete filenames based on pattern in ZSH
date: 2019-10-25
tags:
  - terminal
  - til
---

I have just randomly discovered this awesome feature, so I figured out I'll share it. You can tab complete filename with `*` in it. It can also complete multiple filenames. For a quick example let's say you have `index.html`, `index.js` and `main.js` files in directory.

```terminal
some_command *.js
# will autocomplete to index.js main.js

some_command ind*x.* # "*" can be inside filename
# will autocomplete to index.html index.js
```

This is ZSH feature as far as I know. Fish shell probably also has it but I didn't have time to try. Bash can't do this autocompletion (tried on Ubuntu VPC).

Nice! Annoying typo led to (my) discovery of very useful feature.
