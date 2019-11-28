---
title: Rename variable when destructuring
date: 2019-09-21
tags:
  - javascript
  - js
  - til
---

One of my favorite ES6 additions to JavaScript is array and object destructuring. And one of great things you might not know about it is that you can rename destructured variable.

Let's say you have JSON data similar to this...

```js
{
  "firstName": "Bartol",
  "lastName": "Deak"
}
```

...and you are destructuring it, but one variable is conflicting with other. Rather than changing whole code, you can assign different name for destructured variable.

```js
const { firstName: fName, lastName } = data
```

And that's all there is to it!
