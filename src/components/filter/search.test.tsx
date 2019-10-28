import React from 'react'
import { render } from '@testing-library/react'
import { toBeInTheDocument } from '@testing-library/jest-dom'
import Search from './search'
import { FilterContext } from '../../state'

expect.extend({ toBeInTheDocument })

describe('sidebar', () => {
  // mock context
  const value = { query: 'test query', setQuery: jest.fn() }

  it('renders search box', () => {
    const { getByDisplayValue } = render(
      <FilterContext.Provider value={value}>
        <Search />
      </FilterContext.Provider>
    )

    expect(getByDisplayValue(/test query/i)).toBeInTheDocument()
  })
})
