import React, { useContext } from 'react'
import { FilterContext } from '../../state'

const Search = () => {
  const { query, setQuery } = useContext(FilterContext)

  return (
    <input
      type='search'
      placeholder='Search'
      value={query}
      onChange={e => setQuery(e.target.value)}
      className='w-full text-2xl bg-dark-700 px-2 my-2 rounded shadow focus:outline-none focus:shadow-outline-dark-200 placeholder-dark-400'
      aria-label='search'
    />
  )
}

export default Search
