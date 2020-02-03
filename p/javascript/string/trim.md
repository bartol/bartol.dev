---
layout: post
title: Trim
date: 2020-02-03
---

To remove whitespace on start or end of string you can use built in `trim`
method.

```js
'      hello world  '.trim() // 'hello world'
```

Or if you want to trim only start or end you can use these methods.

```js
'      hello world  '.trimStart() // 'hello world  '
'      hello world  '.trimEnd() // '      hello world'
```
