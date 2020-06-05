---
layout: post
title: Browser local storage
date: 2019-09-13
---

Okay, you heard about that cool thingy called local storage where you can save client side data, but you don't know how to really use it. Great, you'll learn it here but first lets talk limitations.

- Storage limit varies from browser to browser and is from 3 MB to 10 MB. Not sure if modern react website JS bundle would fit. 🤔
- It can be deleted like cookies and history so make sure to send data to server.

Enough about limitations. Let's dive into local storage! To set item you need to call `setItem` method and specify key and value as JSON.

```js
localStorage.setItem('key', 'some json value')
```

To get item you, obviously, need to call `getItem` and specify only key...

```js
localStorage.getItem('key')
```

...and same thing for removing item

```js
localStorage.removeItem('key')
```

Last thing I'll show you is how to wipe out whole local storage.

```js
localStorage.clear()
```

And there is nothing more to it than this. You are now local storage ninja!
