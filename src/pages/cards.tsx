import React from 'react'
import { graphql, Link } from 'gatsby'
import listOfTags from '../assets/tags'
import Logo from '../assets/logo.inline.svg'
import List from '../components/list'

export default ({ data }) => {
  const results = data.allMarkdownRemark.nodes

  return (
    <div className='container mx-auto flex'>
      {/* skip to articles button */}
      <button
        type='button'
        className='fixed top-0 left-0 px-3 py-2 m-6 bg-gray-900 rounded focus:outline-none focus:shadow-outline-gray-200 z-20 skipToArticles'
        // eslint-disable-next-line no-undef
        onClick={() => document.getElementById('focusFirstCard').focus()}
      >
        Skip to articles
      </button>
      <div className='hidden lg:block lg:w-1/5 xl:w-1/6 py-4 my-2 xl:px-4 lg:pl-6 lg:pr-3 px-4 relative'>
        <header>
          <h1 className='w-12 pt-1'>
            <Link
              to='/'
              className='text-gray-400 focus:outline-none focus:color-main'
            >
              <Logo className='stroke-current hover:color-main transition transition-slower' />
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
          <input
            type='text'
            placeholder='Search'
            className='w-full text-xl bg-gray-800 px-2 my-2 rounded shadow focus:outline-none focus:shadow-outline-gray-200'
            aria-label='search'
          />
        </header>
        <ul className='sticky top-0'>
          {listOfTags.map(tag => {
            const { value, label } = tag
            return (
              <li key={value}>
                <button
                  type='button'
                  value={value}
                  // onClick={() => handleTag(value)}
                  className='w-full text-left px-2 py-1 my-1 rounded text-gray-400 hover:text-gray-200 focus:text-gray-200 focus:font-medium focus:outline-none focus:bg-gray-800'
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>
        <footer className='absolute bottom-0 right-0 mb-4'>
          <a href='https://github.com/bartol'>GitHub</a>{' '}
          <Link to='/rss.xml'>RSS</Link>
          <span className='block text-gray-500'>© 2019 Bartol Deak</span>
        </footer>
      </div>
      <main className='flex flex-col lg:w-4/5 xl:w-5/6'>
        <List articles={results} />
      </main>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          tags
          date(formatString: "MMMM Do, YYYY")
        }
        fields {
          slug
          timestamp
          views
        }
        id
        excerpt(pruneLength: 1000000)
      }
    }
  }
`
