---
layout: post
title: Social image generator - Part 2 Options
---

In previous article I've gone over setting up project and environment with Serverless Framework and TypeScript. Today, we will discuss options you can pass to function.

To start, I'll create `parseOptions` helper function, import it and pass 2 props to it. Both will come from `event` that aws provides. First will contain, well, parsed query string parameters while other will contain parameters with array of multiple values.

```js
export const handler = async (event: Event) => {
  const options = parseOptions(
    event.queryStringParameters,
    event.multiValueQueryStringParameters
  )
  // other code
}
```

If I dive deep in parse options, you'll quickly realize that it's mostly boring stuff. There are a tone of properties which will just return passed or default value like `fontColor`.

```js
const fontColor = options.fontColor || '#f7f7f7'
```

There is still one property I'd like to show you. It's images property. While not technically impressive, it's more complex than others. Looks quite complicated but all it's doing is adding image URL to array along with height and width (default if not provided).

```js
const images: Image[] = []
if (multiValueOptions.images) {
  for (let i = 0; i < multiValueOptions.images.length; i++) {
    if (isUrl(multiValueOptions.images[i])) {
      images.push({
        src: multiValueOptions.images[i],
        width:
          multiValueOptions.widths && multiValueOptions.widths[i]
            ? parseInt(multiValueOptions.widths[i], 10)
            : 250,
        height:
          multiValueOptions.heights && multiValueOptions.heights[i]
            ? parseInt(multiValueOptions.heights[i], 10)
            : 250,
      })
    }
  }
} else {
  images.push({
    src: 'https://bartol.dev/images/logo.png',
    width: 250,
    height: 250,
  })
}
```

Also, if no images are passed, display sample. That is pretty much all I can talk about this part of project. It is indeed boring but you have to go through boring to get to fun stuff.
