---
layout: post
title: Count characters in input 
date: 2019-09-23
---

You need to count characters of input? And you don't know how? Lucky you! It's super easy. And I'll show you how. First thing you have to do, after importing React library, is initialize characters state. I'll be using Hooks for this.

```js
import React, { useState } from 'react'

export default () => {
  const [characters, setCharacters] = useState(0)
}
```

Then add any text input. Textarea for example.

```jsx
// ...
return (
  <div>
    <textarea />
    <br />
    Characters: ???
  </div>
)
// ...
```

And last thing you have to do is wire up input with character state. For this it'll be best to use `onChange` attribute. Expression that we are passing to update state may seem a bit weird at first but it's just accessing value of input, splitting it in array of characters and updating state with array length.

```jsx
// ...
return (
  <div>
    <textarea onChange={e => setCharacters(e.target.value.split('').length)} />
    <br />
    Characters: {characters}
  </div>
)
// ...
```

That's it! Quick and easy!
