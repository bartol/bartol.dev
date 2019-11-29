---
title: Generate random hex code
date: 2019-08-12
tags:
  - hash
  - til
resources:
  - name: Random hex demo
    url: https://random-hex.netlify.com/
  - name: Random hex demo source code
    url: https://github.com/bartol/random-hex
---

This will be short and not really practical but fun article.

Have you ever wondered how to generate random hex code?

Probably not, but here it is.

<!-- prettier-ignore  -->
```js
'#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
```

One-liner, short and sweet.

Now you can use it to create fun web pages like [demo](http://random-hex.netlify.com) I've created for this article.

