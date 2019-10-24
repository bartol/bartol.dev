---
title: Calculate Unix timestamp from date
date: 2019-08-24
tags:
  - javascript
  - til
resources:
  - name: Stack Overflow Answer
    url: https://stackoverflow.com/a/11893157/11197595
---

Unix time is a system for describing a point in time. It is the number of seconds that have elapsed since 00:00:00 Thursday, 1 January 1970. Good use case for it is sorting items (or blog posts) by time as it's much easier to compare 2 numbers than 2 strings.

The Simplest way to achieve that conversion is to create function that receives date (string) and returns Unix timestamp (number).

```js
const calcTimestamp = date => {
  return new Date(date).getTime() / 1000
}
```

Or if you want to calculate timestamp for this moment, you can achieve it with this simple one-liner. Notice that conversion is wrapped in `Math.round` because we generally don't want timestamp as decimal number.

```js
Math.round(new Date().getTime() / 1000)
```

