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
