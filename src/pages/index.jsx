import React, { useState, useEffect } from 'react'
import { Filter } from 'react-feather'
import Fuse from 'fuse.js'
import queryString from 'query-string'
import { useStaticQuery, graphql } from 'gatsby'
import { navigate } from '@reach/router'
import Collapse from '@kunukn/react-collapse'
import ArticlePreview from '../components/articlePreview'
import Settings from '../components/settings'
import Layout from '../components/layout'
import Random from '../components/random'
import Logo from '../components/sidebar/logo.inline.svg'
import tagsList from '../assets/tags'
import useWindowDimensions from '../hooks/useWindowDimensions'

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

const DEBOUNCE_TIME = 400

const urlToState = location => {
  const parsedUrl = queryString.parse(location.search.slice(1), {
    arrayFormat: 'comma',
  })

  return {
    q: parsedUrl.q || '',
    // eslint-disable-next-line no-nested-ternary
    tags: parsedUrl.tags
      ? Array.isArray(parsedUrl.tags)
        ? parsedUrl.tags
        : [parsedUrl.tags]
      : [],
    sort: parsedUrl.sort || 'recent',
  }
}

const stateToUrl = (location, params) => {
  const { query, tags, sort } = params
  const state = {}

  if (query) {
    state.q = query
  }
  if (tags.length) {
    state.tags = tags
  }
  if (sort !== 'recent') {
    state.sort = sort
  }

  return `${location.pathname}${
    state.q || state.tags || state.sort ? '?' : ''
  }${queryString.stringify(state, {
    arrayFormat: 'comma',
    sort: false,
  })}`
}

export default ({ location }) => {
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
          }
          id
          excerpt(pruneLength: 1000000)
        }
      }
    }
  `)

  const allResults = data.allMarkdownRemark.nodes

  const { width } = useWindowDimensions()

  const [filter, toggleFilter] = useState(false)
  const [more, toggleMore] = useState(false)
  const [placeholder, setPlaceholder] = useState('Search')

  // search stuff
  const [results, setResults] = useState([])
  const [query, setQuery] = useState(urlToState(location).q)
  const [tags, setTags] = useState(urlToState(location).tags)
  const [sort, setSort] = useState(urlToState(location).sort)
  const [debouncedSetResults, setDebouncedSetResults] = useState(null)

  const DEFAULT_PLACEHODLER = 'Search'
  const FILTER_PLACEHOLDER = !filter ? 'Filter' : DEFAULT_PLACEHODLER
  const MORE_PLACEHOLDER = !more ? 'Me' : DEFAULT_PLACEHODLER

  const MAIN_COLOR = 'hsla(190, 80%, 50%, 1)'
  const PARAMETERS_COLOR = '#8c8c8c'

  const params = {
    query,
    tags,
    sort,
  }

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

  useEffect(() => {
    if (sort === 'recent') {
      allResults.sort((a, b) => {
        return b.fields.timestamp - a.fields.timestamp
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
    }

    const filters = {
      frontmatter: frontmatter => frontmatter.tags.find(x => tags.includes(x)),
    }

    const filtered = filterArray(allResults, filters)

    const list = filtered.length ? filtered : allResults

    const fuse = new Fuse(list, options)

    setResults(query ? fuse.search(query) : list)
  }, [query, tags, sort])

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
  }, [tags, sort])

  const handleTag = tag => {
    return !tags.includes(tag)
      ? setTags([...tags, tag])
      : setTags(tags.filter(t => t !== tag))
  }

  return (
    <Layout title='Bartol Deak' url='/' isArticle={false}>
      <div className='searchWrapper'>
        <header>
          <form
            noValidate
            action=''
            role='search'
            onSubmit={event => event.preventDefault()}
          >
            <input
              type='search'
              value={query}
              onChange={event => setQuery(event.currentTarget.value)}
              placeholder={placeholder}
              aria-label='Search'
              className='search'
            />
          </form>
          <Filter
            strokeWidth='1.5'
            color={filter ? MAIN_COLOR : PARAMETERS_COLOR}
            // size="2.525rem"
            size='50.5px'
            tabIndex={0}
            onClick={() => {
              toggleFilter(!filter)
              toggleMore(false)
              setPlaceholder(FILTER_PLACEHOLDER)
            }}
            onKeyPress={() => {
              toggleFilter(!filter)
              toggleMore(false)
              setPlaceholder(FILTER_PLACEHOLDER)
            }}
          />
          <Logo
            className='me-button'
            stroke={more ? MAIN_COLOR : PARAMETERS_COLOR}
            tabIndex={0}
            onClick={() => {
              toggleMore(!more)
              toggleFilter(false)
              setPlaceholder(MORE_PLACEHOLDER)
            }}
            onKeyPress={() => {
              toggleMore(!more)
              toggleFilter(false)
              setPlaceholder(MORE_PLACEHOLDER)
            }}
          />
        </header>
      </div>
      <Collapse isOpen={filter}>
        {width <= 500 ? (
          <p className='stats'>{results.length} results</p>
        ) : null}
        {tagsList.length ? (
          <ul className='tag-container-wrapper tag-container'>
            {tagsList.map(tag => {
              const { value, label, color } = tag

              return (
                <li key={value}>
                  <button
                    type='button'
                    value={value}
                    onClick={e => handleTag(e.target.value)}
                    className='tag-generic'
                    style={{
                      borderColor: tags.includes(value)
                        ? color
                        : PARAMETERS_COLOR,
                    }}
                  >
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>
        ) : null}
        <div className='spacebetween'>
          <select
            onChange={e => setSort(e.target.value)}
            value={sort}
            className='sort-selector'
            aria-label='sort select'
          >
            <option value='recent'>Recent</option>
            <option value='oldest'>Oldest</option>
            <option value='popular'>Popular</option>
            <option value='alphabetical'>A to Z</option>
            <option value='unalphabetical'>Z to A</option>
          </select>
          {width > 500 ? (
            <p className='stats'>{results.length} results</p>
          ) : null}
          <Random />
        </div>
      </Collapse>
      <Collapse isOpen={more}>
        <Settings />
      </Collapse>
      {results.length ? (
        <ul className='list'>
          {results.map(article => {
            const { id, frontmatter, fields } = article.item || article
            // eslint-disable-next-line no-shadow
            const { title, date, tags } = frontmatter
            const { slug } = fields
            return (
              <ArticlePreview
                title={title}
                date={date}
                slug={slug}
                key={id}
                tag={tags[0]}
              />
            )
          })}
        </ul>
      ) : null}
      {!results.length && query ? <h2>No results</h2> : null}
    </Layout>
  )
}
