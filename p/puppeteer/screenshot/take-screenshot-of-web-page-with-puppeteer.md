---
title: Take screenshot of web page with Puppeteer
date: 2019-10-29
tags:
  - automation
  - puppeteer
  - chrome
  - til
---

If you haven't already see, [Puppeteer](https://github.com/GoogleChrome/puppeteer) is new thing from Google Chrome team. It's node API for headless chrome. I have already used it for few automation scripts, so I figured out I'll write about it, web page screenshots for today. Let's first install package. This version will include Chromium built in. You can download `puppeteer-core` and supply your own Chromium executable.

```sh
yarn add puppeteer
```

While modules are downloading we can create blank `.js` file and import it.

```js
const puppeteer = require('puppeteer');
```

This `async` in some parenthesis may seem weird at the first look if you are new to JavaScript. It's just *hack* used to write async code at the surface level (not in function). It is wrapped in IIFE which is just a function that is automatically invoked. Inside IIFE we will initialize browser and open page.

```js
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // other code
})();

/* its same thing as this

async function someFn() {
  ... code
}
someFn()
```

Right now, page is blank. We can navigate to some URL and call screenshot method which will, well, take picture of it.

```js
await page.goto('https://bartol.dev');
await page.screenshot({path: 'myweb.png'});
```

And last thing you'll have to do is close browser.

```js
await browser.close();
```
