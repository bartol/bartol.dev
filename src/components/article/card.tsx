import React from 'react'
import { cardBackgroundColor } from '../list/cardBackgroundColor'
import './card.css'

export const Card = ({ title, date, updated, tag }) => {
  return (
    <div
      className='relative overflow-hidden py-4 px-6 rounded mb-8 flex flex-col justify-between shadow bg-dark-700 articleCard'
      style={{
        backgroundColor: cardBackgroundColor(tag),
      }}
    >
      <h1 className='text-5xl leading-tight font-medium'>{title}</h1>
      <div className='text-xl text-dark-300'>
        <p>Published on {date}</p>
        {updated ? (
          <p>
            Updated on {updated} -{' '}
            <a
              href='#changelog'
              aria-label='changelog permalink'
              className='hover:text-dark-100 transition'
            >
              Changelog
            </a>
          </p>
        ) : null}
      </div>
      <img
        src={`/images/${tag}.svg`}
        alt={`${tag} icon`}
        loading='lazy'
        className='w-64 h-64 opacity-25 absolute bottom-0 right-0 drag-none cardImage transition-slow'
      />
    </div>
  )
}
