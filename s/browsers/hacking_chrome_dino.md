---
layout: post
title: Hacking Chrome Dino
date: 2020-02-05
---

Here is little trick you can use to impress your friends and get highest
score in Chrome Dino. Just open Console with `Cmd + Opt + j` on Mac or
`Ctrl + Shift + j` on Windows or Linux and paste following command:

```javascript
Runner.prototype.gameOver = function() {}
```

This command replaces function that would end game when you hit object with
nothing.

Enjoy your indestructible Dino!
