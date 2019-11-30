---
layout: post
title: JavaScript Async forEach
---

I have recently worked on async data fetching where I needed to use forEach method to format every item in array. And it didn't work. For good 5-6 hours. I've tried everything. Only to find that JavaScript forEach method doesn't play nicely with async functions.

Then I've found [this](https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404) medium article, copied snippet of code and it magically started working!

And here I am, happy man sharing this solution for future self and all other people with same issue.

```js
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}
```

Enjoy! It just works™️*.*

<!-- resources:
  - name: Awesome post that resolved issue
    url: https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404 -->
