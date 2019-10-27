---
title: Remove duplicates from array
date: 2019-10-26
tags:
  - javascript
  - til
---

If you have array of simple data types like strings or numbers and you want to remove duplicates it's your lucky day. Because it's super easy. Filtering object is much more difficult.

```js
[...new Set(array)]
```

This one-liner will convert array to new data type called [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). Set doesn't support duplicates so it removes them. After that we will convert Set back to array using spread syntax.

When I create article about removing object duplicates I'll link it here. Stay tuned!
