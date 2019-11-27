---
title: Run ESLint on TypeScript files in VS Code
date: 2019-09-10
tags:
  - vscode
  - til
---

As of lately VS Code TSLint extension is being deprecated and TypeScript linting is moving to ESLint. When I was moving linting of this website to ESLint recently, I've encountered this weird problem. ESLint would just refuse to run on .ts or .tsx files. Problem was easily fixed by adding `eslint.validate` property to VS Code `settings.json`.

```json
{
  // ...
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
  // ...
}
```
