# Expand file names with pattern

```bash
some_command *.js
# will autocomplete to index.js main.js

some_command ind*x.* # "*" can be inside filename
# will autocomplete to index.html index.js
```

This is ZSH feature as far as I know. Fish shell probably also has it but I didn't have time to try. Bash can't do this autocompletion (tried on Ubuntu VPC).

Nice! Annoying typo led to (my) discovery of very useful feature.
