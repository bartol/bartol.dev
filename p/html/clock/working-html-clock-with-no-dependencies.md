---
title: Working HTML clock with no dependencies
date: 2019-08-17
tags:
  - html
  - til
resources:
  - name: Working HTML clock demo
    url: https://html-clock.netlify.com/
  - name: Working HTML clock demo source code
    url: https://github.com/bartol/html-clock/
---

This is also one of those fun and not the most practical articles. But it can work. Hence "Working" in title. You don't get fancy options you'd find in some JavaScript library, but at least you don't send giant JavaScript bundle just to show clock. _Looking at you devs who use Moment.js just to display basic clock._

```html
<body
  onload="setInterval(()=>document.getElementById('clock').innerHTML=new Date().toGMTString().slice(17,25))"
>
  <div id="clock"></div>
</body>
```

You can visit cool [demo](https://html-clock.netlify.com/) I've made for this article.
