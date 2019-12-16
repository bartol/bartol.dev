---
layout: post
title: JavaScript default parameters
date: 2019-09-02
---

Passing default parameters to JavaScript function is as easy as declaring them in function 'head' (I really can't think of a better name for _that_).

```js
const sayHi = (user = 'default user') => {
  return `Hey, ${user}!`
}
```

Now, if we don't pass `user` parameter or it's undefined, it will use default value.

## Resources

- [Default parameters MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
