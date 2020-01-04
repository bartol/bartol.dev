---
layout: post
title: Error reporter
date: 2020-01-02
draft: true
---

```js
window.onerror = function(msg, _path, line, column, error) {
  fetch('/errors', {
    error: error ? error.stack : '',
    column: column,
    line: line,
    msg: msg,
  })
  return false
}
```
