import React, { useContext } from 'react'
import { FilterContext } from '../../state'

const Sort = () => {
  const { sort, setSort } = useContext(FilterContext)

  return (
    <div className='relative mt-2 mb-3'>
      <select
        onChange={e => setSort(e.target.value)}
        value={sort}
        className='w-full bg-dark-700 text-dark-300 focus:text-dark-200 focus:font-medium appearance-none px-2 py-1 rounded shadow focus:outline-none focus:shadow-outline-dark-200'
        aria-label='sort select'
      >
        <option value='recent'>Recent</option>
        <option value='oldest'>Oldest</option>
        <option value='alphabetical'>A to Z</option>
        <option value='unalphabetical'>Z to A</option>
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark-300'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  )
}

export default Sort
