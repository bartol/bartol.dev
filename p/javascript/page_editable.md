---
layout: post
title: Make whole web page editable
---

While randomly browsing reddit few days ago, I've found this really nice trick.
Have you ever heard of `contentEditable` attribute that you can put on div to
make it, well, editable? This so called `designMode` does it for an entire web
page. All you need to do is enable it from browser console.

```js
document.designMode = 'on'
```
