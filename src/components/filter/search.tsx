import React from 'react'

const Search = () => {
  return (
    <input
      type='text'
      placeholder='Search'
      className='w-full text-xl bg-gray-800 px-2 my-2 rounded shadow focus:outline-none focus:shadow-outline-gray-200'
      aria-label='search'
    />
  )
}

export default Search
