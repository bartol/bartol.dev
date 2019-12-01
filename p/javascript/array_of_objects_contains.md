---
layout: post
title: Check if array of objects contains value
---

This is one of those simple problems I encounter every few days and find myself searching through visited stack overflow questions, so here is solution, once and for all.

Let's say you have some object data in array similar to this.

```js
const users = [
  {
    name: 'John',
    email: 'john@gmail.com',
  },
  {
    name: 'Bartol',
    email: 'contact@bartol.dev',
  },
]
```

And you want do something only for user with specific name.

```js
if (users.some(e => e.name === 'Bartol')) {
  // do something
}
```

<!-- resources:
  - name: Stack Overflow Answer
    url: https://stackoverflow.com/a/8217584/11197595 -->