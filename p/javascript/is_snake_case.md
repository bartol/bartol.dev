---
layout: post
title: Check if string is in snake case
date: 2019-12-16
draft: true
---

```js
const snake_case_regex = /^([a-z]{1,})(_[a-z0-9]{1,})*$/;
```

```js
snake_case_regex.test('string')
```
