---
layout: post
title: View layout of every website
date: 2019-09-07
---

I have recently came across [this](https://dev.to/gajus/my-favorite-css-hack-32g3) article on [dev.to](https://dev.to) titled 'My favorite CSS hack' about styles to see layout of every page. It's really awesome but hard to copy paste styles on every page. Luckily there is a better (and easier) way!

1. Create new bookmark in your favorite browser
2. Paste script as bookmark URL

<!-- prettier-ignore -->
```js
javascript: (function() {
  const element = document.querySelector('#test-layout-styles');
  if (element) {
    document.head.removeChild(element);
  } else {
    const style = document.createElement('style');
    style.id = 'test-layout-styles';
    style.innerHTML = `
          * { background-color: rgba(255,0,0,.2); }
          * * { background-color: rgba(255,0,255,.2); }
          * * * { background-color: rgba(0,255,255,.2); }
          * * * * { background-color: rgba(255,255,0,.2); }
          * * * * * { background-color: rgba(0,255,0,.2); }
          * * * * * * { background-color: rgba(0,0,255,.2); }
          * * * * * * * { background-color: rgba(255,0,0,.2); }
          * * * * * * * * { background-color: rgba(255,255,0,.2); }
          * * * * * * * * * { background-color: rgba(0,255,255,.2); }
    `;
    document.head.appendChild(style);
  }
})();
```

Now you can click to bookmark to CSS layout view!

## Resources

- [GitHub Gist comment with script](https://gist.github.com/vcastroi/e0d296171842e74ad7d4eef7daf15df6#gistcomment-3017296)
