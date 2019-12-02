---
layout: post
title: Social image generator - Part 3 Template
date: 2019-10-07
---

This will probably be a quick on as I don't have a lot to talk about templates. In previous parts I've set up environment and worked on options that can be passed via query string. Today I'll work on templates that will be used to create screenshot.

## Creating helper function

```js
export const buildTemplate = (options: Options) => {
  return `
<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <title>Generated Image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    ${buildCSS(
      options.fontSize,
      options.fontColor,
      options.background,
      options.separator
    )}
  </style>
  <body>
    <div>
      <div class="spacer">
        <div class="logo-wrapper">
          ${options.images
            .map((image, i) => {
              return buildPlusSign(i) + buildImage(image)
            })
            .join('')}
        </div>
      </div>
      <div class="spacer">
        <div class="heading">
          ${options.text}
        </div>
      </div>
    </div>
  </body>
</html>
`
}
```

It is as basic as it gets. It just returns template string we will fill with variable data like images, text and styles. Let's see `builtPlusSign` and `buildImage` which will help to create technology logo (or anything really) images grouped with `+` sign.

```js
const buildImage = (image: Image) => {
  return `<img
  class="logo"
  alt="Generated Image"
  src="${image.src}"
  width="${image.width}"
  height="${image.height}"
/>`
}

const buildPlusSign = (i: number) => {
  return i === 0 ? '' : '<div class="plus">+</div>'
}
```

Image function will, as you probably expected, return image and plus sign function will return `+` before every image except first.

But wait. You didn't talk about `buildCSS` function! That is because I haven't made one yet. I am concentrating on making it work first and then design.
