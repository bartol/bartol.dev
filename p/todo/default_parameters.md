---
layout: post
title: Default parameters
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


// include

---
layout: post
title: Access other parameters in default parameters
date: 2019-09-25
---

This is nifty little trick I learned today. You can access value of other parameters when assigning default parameter.

```js
const newUser = (name, greeting = `Hey, ${name}`) => {
  sendNameToDB(name)
  console.log(greeting)
}
```

Definitely very cool addition to your JavaScript toolbox.
