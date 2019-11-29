---
title: Getting started with Redux on Gatsby site
date: 2019-08-10
tags:
  - redux
  - gatsby
  - guide
---

For the past few days I was learning Redux to use it for exciting project that will be built with Gatsby. After unsuccessfully crawling Google for "getting started" guide and experimenting for couple hours earlier today I present you this guide.

### Prerequisite(s)

- Gatsby site

### Goal(s)

- Redux on your Gatsby site

As you probably imagined we will first install some packages.

```bash
yarn add redux react-redux
```

After that is done we will create some configuration files.

Create files named `gatsby-browser.js` and `gatsby-ssr.js` in your project root and paste this in them.

```js
import wrapWithProvider from './src/state/createStore'

export const wrapRootElement = wrapWithProvider
```

This will tell Gatsby to wrap your page with Redux Context Provider.

Last step is to create `state` directory in `src` folder and create `createStore.js` file inside `state` directory.

Following snippet will create your brand new Redux store.

```jsx
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './import/your/reducers/from/somewhere'

const store = createStore(reducer)

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
```

Now you can use Redux like you would in any React Application. Also, don't forget to import your reducers!
