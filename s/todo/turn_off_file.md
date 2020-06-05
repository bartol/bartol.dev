---
layout: post
title: Turn off rule for file
date: 2019-11-05
---

ESLint is probaby the best tool to improve quality of your JavaScript
code, but sometimes it just gets in the way. Also, I forget how to turn off
rule for a file and I've searched that more times than I would like to admit. Enough is enough, at least I'll know where to find it next time.

```js
/* eslint rule-name: 0 */
```

- Keyword is actually `eslint`. I always remember `eslint-disable` or
  `eslint-disable-file` and get frustrated because it doesn't work.
- Double slash comments (`// ...`) can't be used here for some weird reason.
  Learned it the hard way, multiple times.
- If you are feeling particulary awesome today, you can increase number to `1`
  for warning or `2` for error.
