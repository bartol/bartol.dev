import React, { useContext } from 'react'
import { FilterContext } from '../../state'
import { categoryBackgroundColor } from './categoryBackgroundColor'
import list from './tags'

const Categories = () => {
  const { category, setCategory } = useContext(FilterContext)

  return (
    <ul className='sticky top-0'>
      {list.map(tag => {
        const { value, label } = tag
        return (
          <li key={value}>
            <button
              type='button'
              value={value}
              onClick={() =>
                category === value ? setCategory('') : setCategory(value)
              }
              className={`w-full text-left px-2 py-1 my-px rounded focus:outline-none transition-fast ${
                category === value
                  ? 'bg-dark-700 text-dark-100 font-medium shadow'
                  : 'text-dark-300'
              }`}
              style={{
                backgroundColor:
                  category === value ? categoryBackgroundColor(value) : null,
              }}
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
