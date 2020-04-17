---
layout: til
title: Reverse string in JavaScript
date: 2019-09-12
---

You have string to reverse? Easy, just install _yet another_ package from npm! I'm kidding, there is an easier way with some array magic.

```js
const str = 'Hey, whats up?'
```

This expression might look a bit confusing but all it does is convert string to array of characters, reverses it and joins back in string.

```js
const reversed = [...str].reverse().join('')

// value: ?pu stahw ,yeH
```

Enjoy your reversed string!
