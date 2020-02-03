---
layout: post
title: Repeat
date: 2020-02-02
---

Repeating string can easily be done with built in `repeat` method on
JavaScript String prototype.

```js
'a'.repeat(3) // 'aaa'
```

It accepts numbers from 0 to +infinity (0 will return empty string) and if you
pass negative number as argument it will throw RangeError.

```js
'a'.repeat(-1) // RangeError
'a'.repeat(0)  // ''
```
