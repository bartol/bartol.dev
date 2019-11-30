---
layout: post
title: Password input reveal
---

Today I was building some random login form and I had to create button that can toggle between shown and hidden password. It was surprisingly easy to do, but I still want to share it here.

First things first, import `useState` hook for managing input state and React itself.

```jsx
import React, { useState } from 'react'
```

After that create functional component with already mentioned state and input.

```jsx
const PasswordInput = () => {
  const [hidden, setHidden] = useState(true)

  return (
    <div>
      <input type={hidden ? 'password' : 'text'} />
    </div>
  )
}

export default PasswordInput
```

But you still have no way to toggle between states. You'll need to create button for that.

```jsx
// input
<button type='button' onClick={() => setHidden(!hidden)}>
  {hidden ? 'show' : 'hide'}
</button>
// ...
```

That is it. You have just created password input that can be revealed, so cool!

![password input demo](demo.gif)
