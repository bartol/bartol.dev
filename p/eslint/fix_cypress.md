---
layout: post
title: Fix Cypress tests ESLint errors
date: 2019-08-19
---

If you have recently tried using [Cypress](https://www.cypress.io/) in project with ESLint, you've probably been greeted with a ton of errors. Luckily fix is quick and easy.

First thing we have to do is to install ESLint plugin.

```bash
yarn add -D eslint-plugin-cypress
```

After that you need to create `.eslintrc` file in `cypress` directory and populate it with following configuration.

```json
{
  "extends": ["plugin:cypress/recommended"]
}
```

And that's it! ESLint won't complain about your tests anymore!
