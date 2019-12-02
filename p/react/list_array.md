---
layout: post
title: Create list from array in React
---

Lists. Lists are everywhere. On social media sites, on blogs, on e-commerce. But it is so annoying to write `<li>Item 1</li>` every time you want to add item to list. There is sure a better way.

If you've worked with ES6 stuff lately this will be familiar to you, as React is always doing things _JavaScript way_ instead of building its own custom APIs.

Putting all list items in array is very good starting point.

```js
const favoriteFood = ['spaghetti', 'pizza', 'lasagne']
```

Second step is to just map over array in JSX and return list element. Sounds complicated but really isn't.

```jsx
<div>
  <h1>List of my favorite food</h1>
  <ul>
    {favoriteFood.map((food) /* <-- item from array */ => {
      return <li>Food with name: {food}</li>
    })}
  </ul>
</div>
```

If we take a look on page, it should look like this.

![List](/img/md/react_list_array_result.png)

## But wait! There is still one thing we have to do

When you open console you'll be greeted with friendly message.

![Key prop console error](/img/md/react_list_array_error.png)

To fix this we will have to add key prop to list item.

```diff
- return <li>Food with name: {food}</li>
+ return <li key={food}>Food with name: {food}</li>
```

**Key prop must be unique** and is used by React to detect which items were changed and should be re-rendered.

## Let's say that you have two favorite things to eat with same name

_This probably won't happen with this example but author (me) didn't bother changing example so deal with it._

When two items can have same name use its index for key prop.

```jsx
{
  favoriteFood.map((food, index) /* <-- index is second argument */ => {
    return <li key={index}>Food with name: {food}</li>
  })
}
```

Full component for reference:

```jsx
import React from 'react'

const favoriteFood = ['spaghetti', 'pizza', 'lasagne']

const FavoriteFood = () => {
  return (
    <div>
      <h1>List of my favorite food</h1>
      <ul>
        {favoriteFood.map((food, index) => {
          return <li key={index}>Food with name: {food}</li>
        })}
      </ul>
    </div>
  )
}

export default FavoriteFood
```

If you just started learning React this will be one of the most useful things you'll learn and use on day to day basis. So simple and effective.
