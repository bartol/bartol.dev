---
layout: post
title: Check is string snake case
date: 2019-12-16
draft: true
---

```js
const snake_case_regex = /^([a-z]{1,})(_[a-z0-9]{1,})*$/;
```

```js
snake_case_regex.test('string')
```
