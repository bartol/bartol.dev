---
title: Get date X months ago
date: 2019-08-30
tags:
  - javascript
  - til
---

You actually can't do this in one-liner. Can't really understand why. Future me, please update this after that 'AHA' moment.

```js
const threeMonthsAgo = new Date()
threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)
```

Still, can't understand why `getMonth` works on `new Date()` but `setMonth` doesn't. If you know why, seriously, send me email ([contact@bartol.dev](mailto:contact@bartol.dev)).
