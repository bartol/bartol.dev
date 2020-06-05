---
layout: post
title: Check if starts with
date: 2019-09-01
draft: true
---

It's as easy as calling `startsWith()` or `endsWith()` methods on JavaScript string prototype.

As an example we can use string similar to this.

```js
const string = 'Hey, have a great day!'
```

And check if string is question with simple function.

```js
const isQuestion = str => {
  return str.endsWith('?')
}
```

When we pass example string to this function it will, of course, return `false`.

```js
isQuestion(string) // false
```

You can use `startsWith()` same way.

## Resources

- [String.prototype.startsWith() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- [String.prototype.endsWith() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
