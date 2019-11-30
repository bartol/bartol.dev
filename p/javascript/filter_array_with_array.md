---
layout: post
title: Filter array with another array
---

When I was working on v2 of this website (BTW now working on v3), about 2 months ago, I have encountered this seemingly easy feature to implement. Select one or more tags to filter results. And oh, boy it was harder than expected. After searching, I've found this mysterious function that gets the job done. It's like black box. I don't understand anything in it. But it works.

```js
const filterArray = (array, filters) => {
  const filterKeys = Object.keys(filters)
  return array.filter(item => {
    // validates all filter criteria
    return filterKeys.every(key => {
      // ignores non-function predicates
      if (typeof filters[key] !== 'function') return true
      return filters[key](item[key])
    })
  })
}
```

There is no better way to show it how it works than real example. That is also partially because I don't know how to explain it. Here is array that contains selected tags and array that contains array of articles that each have array of tags. It will filter results array so only articles with one or more of selected tags are returned.

```js
const listOfTags = ['typescript', 'go']

const results = [
  {
    frontmatter: {
      tags: ['deno', 'typescript'],
    },
  },
  {
    frontmatter: {
      tags: ['javascript'],
    },
  },
  // ...
]

const filteredArray = filterArray(results, {
  frontmatter: frontmatter =>
    frontmatter.tags.find(x => listOfTags.includes(x)),
})
```

Sorry if this was confusing, but it's quite complex and I don't fully understand it, yet. I'll probably revisit this piece in the future and explain it better.
