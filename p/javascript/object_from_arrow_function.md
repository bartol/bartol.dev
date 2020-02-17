---
layout: post
title: Return object from arrow function
date: 2019-02-17
---

Arrow functions were added to JavaScript few years ago and they are hot new
thing to say the least. Although they don't bring much new features to the
table, they at least make your code extra nice to look at.

One of its features is implicit return. It may sound confusing at first but it
really isn't when you see example.

```javascript
const someFunction = () => 2 + 2
// is the same as:
const someFunction = () => {
	return 2 + 2
}
```

After working with arrow functions for some time, you may try to return object
from it and find yourself in confusion. That happened to me recently.

To return object you have to wrap it in brackets like such:

```javascript
const someFunction = () => ({ user: 'bartol' })
```
