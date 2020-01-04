---
layout: post
title: Unit and Integration tests 
date: 2019-08-21
---

[Jest](https://jestjs.io/) is JavaScript testing framework used for testing plenty of technologies, including Gatsby (React). To get started all you need is to install [react testing library](https://github.com/testing-library/react-testing-library) (which will add React related functionality like rendering components) and Jest itself.

```bash
yarn add -D jest @testing-library/react
```

In true _zero config_ we will create `__tests__` directory next to component we want to test and file in it with same name as component that will contain testing code.

```jsx
import React from 'react'
import { render } from '@testing-library/react'
import Component from '../Component'

test('works', () => {
  const { getByText } = render(<Component />)
  expect(getByText(/First Name/i))
})
```

After that we need to add new script in `package.json`.

```json
...
"scripts": {
  "test": "jest"
}
...
```

Great! Now run it! And it fails...

## I knew this won't be _that_ easy

You have run into errors because Node doesn't support import statements, yet. This wouldn't be an issue in _normal_ React app where Babel is configured manually. Jest would just use already created Babel config. But with Gatsby story is a bit different. Gatsby hides Babel config from us and you guessed it, Jest! So we need to configure it ourselves.

Let's get back to command line for a few more packages.

```bash
yarn add -D babel-jest babel-preset-gatsby identity-obj-proxy
```

Then create `jest.config.js` in project root.

```js
module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/tests/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/tests/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
}
```

After that create `tests` directory with `jest-preprocess.js` and `file-mock.js` files.

In `jest-preprocess.js` add following code snippet.

```js
const babelOptions = {
  presets: ['babel-preset-gatsby'],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
```

And in `file-mock.js` add this line.

```js
module.exports = 'test-file-stub'
```

Finally, re-run tests and everything should work perfectly!

## Resources

- [Learn With Jason - Gatsby testing with Kent C. Dodds](https://youtu.be/BzRAYt7BHRw?t=3046)
- [Gatsby Docs](https://www.gatsbyjs.org/docs/unit-testing/)
