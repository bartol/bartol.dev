---
layout: post
title: Run ESLint on every commit
---

Adding lint staged to your project will be one of the best “low effort high reward” things as it will prevent you to commit if linters aren't happy. Did I mention that you can set it up in few minutes?

As usual, we will start with installing packages. [husky](https://github.com/typicode/husky) is used to run [git hooks](https://githooks.com/) and [lint-staged](https://www.npmjs.com/package/lint-staged) is used to run linters on staged files.

```bash
yarn add -D husky lint-staged
```

While packages are installing we can add following snippet to `package.json`. `husky` property should be on same level as `scripts` or `dependencies`.

```json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
  ...
}
```

Other than that we will add file called `lint-staged.config.js` in root of the project. This file will configure which linters will be run on which files.

```js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    // files on which you want to run command
    'eslint', // lint JavaScript and TypeScript
  ],
  '*.{js,jsx,json,yml,yaml,css,less,scss,ts,tsx,md,mdx,graphql}': [
    'prettier --write', // run prettier and fix errors
    'git add', // add fixed files to next commit
  ],
}
```

This config will run ESLint on JavaScript and TypeScript files and Prettier on pretty much (pun intended) all lintable (is that a thing?) files. `--write` flag will automatically fix fixable problems, so we need second `git add` to add those fixed files.

Easy setup, isn't it? On your next commit you'll see something like this.

![ESLint running before commit](/img/md/eslint_on_commit_output.png)

<!-- resources:
  - name: Learn With Jason - Gatsby testing with Kent C. Dodds
    url: https://youtu.be/BzRAYt7BHRw?t=510 -->
