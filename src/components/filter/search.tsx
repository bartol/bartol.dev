import React from 'react'

const Search = () => {
  return (
    <input
      type='text'
      placeholder='Search'
      className='w-full text-2xl bg-dark-700 px-2 my-2 rounded shadow focus:outline-none focus:shadow-outline-dark-200 placeholder-dark-400'
      aria-label='search'
    />
  )
}

export default Search
