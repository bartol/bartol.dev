import React, { useState, useEffect, createContext } from 'react'
import { navigate } from '@reach/router'
import Fuse from 'fuse.js'
import { urlToState } from './urlToState'
import { stateToUrl } from './stateToUrl'
import { isBrowser } from './isBrowser'

export const FilterContext = createContext()

const DEBOUNCE_TIME = 400

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
    { name: 'excerpt', weight: 0.5 },
  ],
}

export const FilterProvider = ({ children }) => {
  // eslint-disable-next-line no-undef
  const location = isBrowser() ? window.location : undefined

  const [allResults, setAllResults] = useState([])
  const [results, setResults] = useState([])
  const [query, setQuery] = useState(urlToState(location).q)
  const [category, setCategory] = useState(urlToState(location).category)
  const [sort, setSort] = useState(urlToState(location).sort)
  const [debouncedSetResults, setDebouncedSetResults] = useState(null)

  useEffect(() => {
    if (sort === 'popular') {
      allResults.sort((a, b) => {
        return b.fields.views - a.fields.views
      })
    } else if (sort === 'oldest') {
      allResults.sort((a, b) => {
        return a.fields.timestamp - b.fields.timestamp
      })
    } else if (sort === 'alphabetical') {
      allResults.sort((a, b) => {
        return a.frontmatter.title.localeCompare(b.frontmatter.title)
      })
    } else if (sort === 'unalphabetical') {
      allResults.sort((a, b) => {
        return b.frontmatter.title.localeCompare(a.frontmatter.title)
      })
    } else {
      allResults.sort((a, b) => {
        return b.fields.timestamp - a.fields.timestamp
      })
    }

    const filtered = category
      ? allResults.filter(result => result.frontmatter.tags.includes(category))
      : []

    const list = filtered.length ? filtered : allResults

    const fuse = new Fuse(list, options)

    setResults(query ? fuse.search(query) : list)
  }, [allResults, query, category, sort])

  const params = {
    query,
    category,
    sort,
  }

  useEffect(() => {
    clearTimeout(debouncedSetResults)

    setDebouncedSetResults(
      setTimeout(() => {
        navigate(stateToUrl(location, params), {
          replace: true,
        })
      }, DEBOUNCE_TIME)
    )
  }, [query])

  useEffect(() => {
    navigate(stateToUrl(location, params), {
      replace: true,
    })
  }, [category, sort])

  return (
    <FilterContext.Provider
      value={{
        setAllResults,
        results,
        query,
        setQuery,
        category,
        setCategory,
        sort,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
