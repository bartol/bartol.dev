---
layout: post
title: TypeScript
date: 2019-09-24
---

For the past few days I was working on Lambda Function that programmatically generates thumbnails for social media from URL. Also, I really want to dive in TypeScript more, so this was great opportunity to test the water with small project. Setting up TypeScript for Lambda was surprisingly easy thanks to [this serverless plugin](https://github.com/prisma-labs/serverless-plugin-typescript).

To start, as expected, you need to add plugin and typescript as dev dependencies.

```bash
yarn add -D serverless-plugin-typescript typescript
```

And latter, you need to add plugin to `serverless.yml`.

```yaml
plugins:
  - serverless-plugin-typescript
```

That's it! TypeScript is now working in your project. You just need to configure it with `tsconfig.json`. These are defaults that plugin uses.

```json
{
  "compilerOptions": {
    "preserveConstEnums": true,
    "strictNullChecks": true,
    "sourceMap": true,
    "allowJs": true,
    "target": "es5",
    "outDir": ".build",
    "moduleResolution": "node",
    "lib": ["es2015"],
    "rootDir": "./"
  }
}
```

Worth noting is that `serverless-plugin-typescript` works great with `serverless-offline` and similar plugins.
