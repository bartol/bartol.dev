import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo.inline.svg'
import { Search, Categories } from '../filter'
import Skip from './skip'

const Sidebar = () => {
  return (
    <div className='hidden lg:block lg:w-1/5 xl:w-1/6 py-4 my-2 xl:px-4 lg:pl-6 lg:pr-3 px-4 relative'>
      <Skip />
      <header>
        <h1 className='w-12 pt-1'>
          <Link
            to='/'
            className='text-gray-400 focus:outline-none focus:color-main'
          >
            <Logo className='stroke-current hover:color-main transition-slow' />
          </Link>
        </h1>
        <p className='pt-4 pb-2'>
          <span className='block py-1'>
            Hi, welcome to Bartol's personal cyberspace!
          </span>
          <span className='block py-1'>
            Here are my thoughts and notes about web development.
          </span>
        </p>
        <Search />
      </header>
      <Categories />
      <footer className='absolute bottom-0 right-0 mb-4'>
        <a href='https://github.com/bartol'>GitHub</a>{' '}
        <Link to='/rss.xml'>RSS</Link>
        <span className='block text-gray-500'>© 2019 Bartol Deak</span>
      </footer>
    </div>
  )
}

export default Sidebar
