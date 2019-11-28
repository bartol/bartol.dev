---
title: Create directory if it doesn't exist
date: 2019-10-28
tags:
  - javascript
  - node
  - til
---

When you are creating directories and files, most likely on startup of your node program, it is useful to check if they already exists. It's also very easy to implement. All you need is one function.

```js
const fs = require('fs')

const createDirectoryIfItDoesntExist = (directoryName) => {
  return !fs.existsSync(directoryName)
    ? fs.mkdirSync(directoryName)
    : undefined
}
```

`fs.existsSync` will check if directory is present and `fs.mkdirSync` will create directory if it needs to.
