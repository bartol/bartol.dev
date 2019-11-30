---
title: Get last element in array
date: 2019-09-27
tags:
  - javascript
  - js
  - til
---

Getting item in array is as simple as calling `array[index]` for example `array[2]`. You can use same principle to get last item in array. Let's say you have array similar to this.

```js
const array = ['first', 'second', 'third', 'fourth', 'fifth']
```

To get last item you'll just pass `array.length` (5 for array above) and subtract 1 from it because arrays are zero based (they start counting from 0 instead of 1).

```js
const last = array[array.length - 1] // 'fifth'
```
