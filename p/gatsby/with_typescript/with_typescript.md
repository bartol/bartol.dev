---
title: Use TypeScript with Gatsby
updated: 11/2019
---

TypeScript is hot new thing. Everyone is using it. And there is a reason for it.
It provides great development experience at very low cost. TypeScript does
static analysis on your code and reports errors and potential bugs in your code.
Also, it can help text editor provide better autocomplete. And the best thing
about it is that you don't have to rewrite anything.

Lets first install it.

```sh
yarn add gatsby-plugin-typescript
```

Then add it to plugins array in Gatsby config.

```js
module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    // ...
  ],
}
```
