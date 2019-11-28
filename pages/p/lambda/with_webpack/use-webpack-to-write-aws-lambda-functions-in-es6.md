---
title: Use Webpack to write AWS Lambda Functions in ES6
date: 2019-09-08
tags:
  - serverless
  - lambda
  - aws
  - til
---

ES6 is fun! And you should use it, but you can't write ES6 and ES modules out of box in Lambda Functions. We will need help from [Serverless Framework](https://serverless.com/) and few of its [plugins](https://serverless.com/plugins/).

Make sure that you npm/yarn initialized your repository and then install these packages.

```sh
yarn add -D serverless-bundle
```

And another thing you have to do is add these two lines to `serverless.yml`.

```yml
plugins:
  - serverless-bundle
```

Now you can use stuff like `export default` and `import x from 'x'` in your function handlers.
