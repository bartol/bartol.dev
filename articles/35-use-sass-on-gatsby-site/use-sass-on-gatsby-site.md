---
title: Use Sass on Gatsby site
date: 2019-09-09
tags:
  - sass
  - gatsby
  - til
---

What? Sass in 2019? Isn't that _old_? Well, it isn't fancy new bleeding edge web technology, but it's very useful and I love it. So here is how to let Gatsby know you want to use Sass on your website.

First thing you have to do is install Gatsby plugin for Sass and Sass itself.

```terminal
yarn add node-sass gatsby-plugin-sass
```

...and add it to plugins array in `gatsby-config.js`.

```js
module.exports = {
  // ...
  plugins: [
    // ...
    'gatsby-plugin-sass'
    // ...
  ]
}
```

That's all you have to do! Can't get any easier than this.

Now you can import `scss` or `sass` files in components that need them.

```js
import './path/to/styles.scss'
```
