---
title: Get last X items from array
updated: 08/2019
---

Here is yet another one of those JavaScript 'one line utility' articles.

Let's say you array of elements similar to this one, and you want to get last 3 elements from it.

```js
const array = ['first', 'second', 'third', 'fourth', 'fifth']
```

You'll have to use JavaScript `.splice` array method.

```js
const last3 = array.splice(-3, 3) // ['third', 'fourth', 'fifth']
```

And that's it! So easy!
