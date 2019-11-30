---
layout: post
title: Console message on Gatsby site
---

If you want to add console message on Gatsby website but don't want
to mess with `useEffect` or `componentDidMount`, easiest way will be
to do it in `gatsby-browser.js` file.

Gatsby browser file will be skipped when statically generating site
and will be executed on every page. It can be used to import global
styles, but also to log messages.

```js
// gatsby-browser.js
console.log('message')
```

And that is it. On next site visit you'll be greeted with message in
your console.
