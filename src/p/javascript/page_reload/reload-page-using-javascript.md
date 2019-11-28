---
title: Reload page using JavaScript
date: 2019-08-31
tags:
  - javascript
  - til
---

Hey, if you have option of refreshing something without reloading whole page I will strongly advise you to do it that way. However, if you really have to reload page here is how you do it.

```js
window.location.reload()
```

Note that this will reload page from cache if it can. If you need to pull new data or something from server then you have to pass true to reload function.

```js
window.location.reload(true)
```
