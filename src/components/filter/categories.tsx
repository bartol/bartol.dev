import React from 'react'
import tags from './tags'

const Categories = () => {
  return (
    <ul className='sticky top-0'>
      {tags.map(tag => {
        const { value, label } = tag
        return (
          <li key={value}>
            <button
              type='button'
              value={value}
              // onClick={() => handleTag(value)}
              className='w-full text-left px-2 py-1 my-1 rounded text-dark-300 focus:outline-none'
            >
              {label}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
