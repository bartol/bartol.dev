---
layout: post
title: Replace text in string JavaScript
date: 2019-09-04
---

Today I learned that JavaScript has replace method. It's fairly simple and gets the job done.

For example, you have string similar to this one.

```js
const favoriteFood = 'My favorite food is Pizza'
```

And suddenly broccoli becomes your favorite food. All you need to do is run replace method on string, as first parameter pass text you want to replace (it can be regex too) and as second parameter pass new text.

```js
const newFavoriteFood = favoriteFood.replace('Pizza', 'Broccoli')
```

That's it. Can't get much easier than this.

## Resources

- [String.prototype.replace() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
