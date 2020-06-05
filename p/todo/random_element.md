---
layout: post
title: Get random element
date: 2019-08-27
---

This one is also one of those that pop up every few weeks and I always have to search through visited Stack Overflow answers.

Okay, lets get to the point. You have an array similar to this...

```js
const hexCodes = ['#0e8fd5', '#663399', '#212121']
```

...and you want to get random item from it.

```js
const randomHexCode = hexCodes[Math.floor(Math.random() * hexCodes.length)]
```

## Resources

- [Stack Overflow Answer](https://stackoverflow.com/a/5915122/11197595)
