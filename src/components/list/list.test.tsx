import React from 'react'
import { render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import { FilterContext } from '../../state'
import List from './list'

expect.extend({ toBeInTheDocument })

describe('list', () => {
  it('renders articles', () => {
    // mock articles
    const articles = [
      {
        id: '8912831889',
        frontmatter: {
          title: 'Article 1 title',
          date: 'Oct 26th, 2019',
          tags: ['typescript'],
        },
        fields: {
          slug: 'article-1-title',
        },
      },
      {
        id: '8912831890',
        frontmatter: {
          title: 'Article 2 title',
          date: 'Oct 27th, 2019',
          tags: ['javascript'],
        },
        fields: {
          slug: 'article-2-title',
        },
      },
    ]

    // mock context
    const value = {
      query: '',
      results: [],
    }

    const { getByText } = render(
      <FilterContext.Provider value={value}>
        <List articles={articles} />
      </FilterContext.Provider>
    )

    expect(getByText(/Article 1 title/i)).toBeInTheDocument()
    expect(getByText(/Article 2 title/i)).toBeInTheDocument()
  })

  it('handles no results', () => {
    // mock articles
    const articles = []

    // mock context
    const value = {
      query: 'test query',
      results: [],
    }

    const { getByText } = render(
      <FilterContext.Provider value={value}>
        <List articles={articles} />
      </FilterContext.Provider>
    )

    expect(getByText(/No results/i)).toBeInTheDocument()
  })
})
