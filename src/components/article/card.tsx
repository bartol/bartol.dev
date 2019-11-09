import React from 'react'
import backgroundColors from '../../backgroundColors.json'
import './card.css'

export const Card = ({ title, date, updated, tag }) => {
  return (
    <div
      className='relative overflow-hidden sm:py-4 py-3 sm:px-6 px-4 sm:mt-6 sm:mb-4 mt-4 mb-2 sm:rounded-lg rounded flex flex-col justify-between shadow bg-dark-700 articleCard w-full h-56'
      style={{
        backgroundColor: backgroundColors[tag],
      }}
    >
      <h1 className='sm:text-5xl text-3xl leading-tight font-medium'>
        {title}
      </h1>
      <div className='sm:text-xl text-dark-300 leading-snug'>
        <p>
          Published on <span className='date'>{date}</span>
        </p>
        {updated ? (
          <p>
            Updated on <span className='date'>{updated}</span>
            <span className='changelog'>
              {' '}
              -{' '}
              <a
                href='#changelog'
                aria-label='changelog permalink'
                className='hover:text-dark-100 transition'
              >
                Changelog
              </a>
            </span>
          </p>
        ) : null}
      </div>
      <img
        src={`/images/${tag}.svg`}
        alt={`${tag} icon`}
        loading='lazy'
        className='sm:w-64 w-48 sm:h-64 h-48 opacity-25 -m-10 absolute bottom-0 right-0 drag-none cardImage transition-slow'
      />
    </div>
  )
}
