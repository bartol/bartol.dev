---
layout: post
title: Check if includes element
date: 2020-02-02
---

If you need to check if array contains element, the best way will be with
`includes` method that exists on array prototype.

```js
array.includes(element)
```

This method was added in ES6, but if you still have to write in older version
of JavaScript, you can use `indexOf` method and check if it returns valid
index. If you aren't version constrained there is no reason to use it for
this purpose. ES6 way is much more readable.
