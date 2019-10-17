import React from 'react'

const NoResults = () => {
  return (
    <div className='lg:w-full lg:h-full flex flex-col justify-center items-center pb-64'>
      <div
        className='text-6xl leading-snug font-mono hover:text-main transition-slow'
        style={{ fontSize: '10rem' }}
      >
        (·.·)
      </div>
      <h2 className='text-4xl'>No results</h2>
    </div>
  )
}

export default NoResults
