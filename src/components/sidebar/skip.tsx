import React from 'react'
import './skip.css'

const Skip = () => {
  return (
    <button
      type='button'
      className='fixed top-0 left-0 px-3 py-2 m-6 bg-gray-900 rounded focus:outline-none focus:shadow-outline-gray-200 z-20 skipToArticles'
      // eslint-disable-next-line no-undef
      onClick={() => document.getElementById('focusFirstCard').focus()}
    >
      Skip to articles
    </button>
  )
}

export default Skip
