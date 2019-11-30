---
layout: post
title: Social image generator - Part 1 Setup
---

Before jumping into program solving and coding I have to set up environment. This includes serverless config, typescript and similar.

## Yarn

For managing packages I chose to use [Yarn](https://yarnpkg.com/lang/en/), without any special configuration.

```bash
yarn init -y
```

For TypeScript support, I'll need `serverless-plugin-typescript` and `typescript` as dev dependencies.

```bash
yarn add -D serverless-plugin-typescript typescript
```

## Serverless Framework

Serverless framework will help manage AWS resources. Much better than zipping and uploading code to Lambda Dashboard on every change.

```yaml
# serverless.yml

service: social-images

plugins:
  - serverless-plugin-typescript

provider:
  name: aws
  runtime: nodejs8.10
  stage: dev
  region: us-east-1

functions:
  generate:
    handler: handler.handler
    events:
      - http:
          path: /
          method: GET
```

## TypeScript

Just the most basic configuration I found in serverless plugin docs.

```json
//  tsconfig.json

{
  "compilerOptions": {
    "preserveConstEnums": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
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

## Handler

Last thing for today will be function handler. It won't do anything for now.

```typescript
// handler.ts

export const handler = async event => {
  return {
    statusCode: 200,
    body: 'hey',
  }
}
```
