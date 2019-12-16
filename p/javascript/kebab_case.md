---
layout: post
title: Convert string to kebab case
date: 2019-08-25
---

This conversion may seem strange at the first glance but it is very useful. For example, you use this to calculate slugs for from blog post title. It eliminates a chance to make typo writing your slugs. Happened to me many times.

```js
string
  .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
  .replace(/[\s_]+/g, '-') // replace all spaces and low dash
  .toLowerCase() // convert to lower case
```

## Resources

- [GitHub Gist comment](https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149#gistcomment-2659294)
