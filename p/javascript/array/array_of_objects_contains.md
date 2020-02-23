---
layout: post
title: Check if array of objects contains
date: 2019-08-23
---

Let's say you have some object data in array similar to this.

```js
const users = [
  {
    name: 'John',
    email: 'john@gmail.com',
  },
  {
    name: 'Bartol',
    email: 'b@bartol.dev',
  },
]
```

And you want do something only for user with specific name.

```js
if (users.some(e => e.name === 'Bartol')) {
  // do something
}
```

## Resources

- [Stack Overflow Answer](https://stackoverflow.com/a/8217584/11197595)
