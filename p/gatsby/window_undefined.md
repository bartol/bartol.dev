---
layout: post
title: Gatsby fix window is not defined
---

If you've tried to use browser window object recently, you've probably encountered window reference error similar to this one.

![window reference error output](error.png)

That is because you are calling browser API that isn't available for Gatsby when building static HTML. To fix this error you need to wrap code where you're accessing window in if statement so it's not run when window isn't defined.

```js
if (typeof window !== 'undefined') {
  // you can use window object here
  // example: console.log(window.innerWidth)
}
```

Now you can run `gatsby build` again and it will work as expected.
