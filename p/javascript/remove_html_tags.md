---
layout: post
title: Remove HTML tags from string
---

If you want to remove HTML tags from string for one reason or another, the easiest way will be using regular expressions (regex). Regex in code example below will replace everything inside `<` and `>`. This _can_ prevent XSS (cross-site scripting) vulnerability but it is not really flexible (normal content inside `<` and `>` will be replaced), so recommended way for doing this in production is using library like [DOMPurify](https://github.com/cure53/DOMPurify).

```js
const cleanHtmlTags = string => {
  return string.replace(/<[^>]*>/g, '')
}
```

And expected result when calling function...

```js
cleanHtmlTags(`<p>Normal content<img onload="alert(hey)"></p>`)
// output: Normal content
```
