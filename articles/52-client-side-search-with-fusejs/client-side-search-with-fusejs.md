---
title: Client side search with fuse.js
date: 2019-09-26
tags:
  - search
  - guide
---

I was recently in _search_ for this blog's search. Tried [Algolia](https://www.algolia.com/), it was great, but it didn't fit my needs well. I have even made article about it, [Rethinking fuzzy search](https://bartol.dev/rethinking-fuzzy-search/). If you want to know **why**, read that article, but if you want to see **how**, continue reading this.

### Prerequisites

- Existing React app and way to get data you want to search (example: array of articles)

### Goals

- Build client-only fuzzy search

First thing you have to do is, as expected, install [fuse.js](https://fusejs.io/).

```terminal
yarn add fuse.js
```

While yarn is doing its work, you can import libraries to file. Import from Gatsby is optional because that is way I get my search data and will probably vary. Just make sure your data is array!

```js
import Fuse from 'fuse.js'
import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
```

Next thing is to get data for search. Like I already said, process of getting this data will vary from app to app. As example, I am using GraphQL and Gatsby static query to get array of articles.

```js
export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            tags
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
            timestamp
            views
          }
          id
          excerpt(pruneLength: 1000000)
        }
      }
    }
  `)

  const allResults = data.allMarkdownRemark.nodes

  // allResults looks similar to this:
  //
  // [
  //   {
  //     frontmatter: { ... }
  //     fields: { ... }
  //     id
  //     excerpt
  //   },
  //   ....
  // ]
}
```

After getting data in correct format you'll need to initialize state for results and search input.

```js
const [results, setResults] = useState(allResults)
const [query, setQuery] = useState('')
```

You'll need to define fuse and it's options. These are options that work for me. Feel free to play around with search later and tweak to your liking.

```js
const options = {
  shouldSort: true,
  includeScore: true,
  includeMatches: true,
  threshold: 0.33,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 2,
  keys: [
    { name: 'frontmatter.title', weight: 1 },
    { name: 'frontmatter.tags', weight: 0.75 },
    { name: 'frontmatter.excerpt', weight: 0.5 },
  ],
}

const fuse = new Fuse(allResults, options)
```

Last thing you have to do for search to work is to actually run it on every change of query. Also, if user empties input field set _fallback_ to all results.

```js
useEffect(() => {
  setResults(query ? fuse.search(query) : allResults)
}, [query])
```

That is it. Your search is working, when you change query, results will be filtered. But you'll need to build some UI to actually see the magic. Let's start with input. It just binds its value to query state.

```jsx
<input
  type='search'
  value={query}
  onChange={event => setQuery(event.currentTarget.value)}
/>
```

And to see results you will map over result array from state. Notice line 4 in this snippet. It is important because fuse.js returns original data in item property.

<!-- prettier-ignore -->
```jsx
{results.length && (
  <ul>
    {results.map(article => {
      const { id, frontmatter } = article.item || article // <= this is important
      const { title, date } = frontmatter
      return (
        <li key={id}>
          <h2>{title}</h2>
          <p>{date}</p>
        </li>
      )
    })}
  </ul>
)}
```

While you are at it, you can also handle situation when search has no results.

<!-- prettier-ignore -->
```jsx
{!results.length && query && <h2>No results</h2>}
```

And that is now it. Everything should be working great. Don't forget to play with search and adjust search options!

Whole component for reference can be found in this [gist](https://gist.github.com/bartol/bdf23c6f32f44e40a33e7f289e9daad2).
