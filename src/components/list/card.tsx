import React from 'react'
import { Link } from 'gatsby'
import backgroundColors from '../../backgroundColors.json'
import './card.css'

const Card = ({ title, date, slug, tags, first }: Props) => {
  return (
    <li className='md:my-3 my-2 xl:px-4 lg:px-5 px-4 xl:w-1/3 lg:w-1/2  md:w-1/2 w-full md:h-48 h-56'>
      <Link
        to={`/${slug}/`}
        id={first ? 'focusFirstCard' : undefined}
        className='flex flex-col justify-between px-4 py-3 h-full relative overflow-hidden rounded bg-dark-700 shadow focus:outline-none card focus:shadow-outline-dark-200'
        style={{ backgroundColor: backgroundColors[tags[0]] }}
      >
        <h2 className='md:text-2xl text-3xl font-medium leading-tight z-10'>
          {title}
        </h2>
        <h3 className='text-dark-300'>{date}</h3>
        <img
          src={`/images/${tags[0]}.svg`}
          alt={`${tags[0]} icon`}
          loading='lazy'
          className='md:w-40 w-48 md:h-40 h-48 md:-m-8 -m-10 opacity-25 absolute bottom-0 right-0 drag-none cardImage transition'
        />
      </Link>
    </li>
  )
}

export default Card
