import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from '../components/image'
import { getCardBackgroundColor } from '../utils/getCardBackgroundColor'
import listOfTags from '../assets/tags'
import Logo from '../assets/logo.inline.svg'

export default () => {
  const data = useStaticQuery(graphql`
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
  `)

  const results = data.allMarkdownRemark.nodes

  return (
    <div className='container mx-auto flex'>
      <button
        type='button'
        className='fixed top-0 left-0 p-2 m-4 bg-gray-900 rounded focus:outline-none focus:shadow-outline-color-main z-10 skipToArticles'
        // eslint-disable-next-line no-undef
        onClick={() => document.getElementsByClassName('card')[0].focus()}
      >
        Skip to articles
      </button>
      <div className='hidden lg:block lg:w-1/5 xl:w-1/6 py-4 my-2 xl:px-4 lg:pl-6 lg:pr-3 px-4 relative'>
        <header>
          <h1 className='w-12'>
            <Link to='/' tabIndex={-1}>
              <Logo
                className='stroke-current text-gray-400 hover:color-main transition transition-slower focus:outline-none focus:color-main'
                tabIndex={0}
              />
            </Link>
          </h1>
          <p className='pt-4 pb-2'>
            <span className='block py-1'>
              Hi, welcome to Bartol's personal cyberspace!
            </span>
            <span className='block py-1'>
              Here you can find my thoughts and web development articles.
            </span>
          </p>
          <input
            type='text'
            placeholder='Search'
            className='w-full text-xl bg-gray-800 px-2 my-2 rounded focus:outline-none focus:shadow-outline-color-main'
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
        <ul className='flex flex-wrap md:py-3 py-2 xl:px-0 lg:px-1'>
          {results.map(article => {
            const { id, frontmatter, fields } = article
            const { title, date, tags } = frontmatter
            const { slug } = fields
            return (
              <li className='md:my-3 my-2 xl:px-4 lg:px-5 px-4 xl:w-1/3 lg:w-1/2  md:w-1/2 w-full h-48'>
                <Link to={`/${slug}/`} key={id} tabIndex={-1}>
                  <div
                    className='flex flex-col justify-between px-4 py-3 h-full relative overflow-hidden rounded bg-gray-800 shadow-md focus:outline-none card focus:shadow-outline-color-main'
                    style={{ backgroundColor: getCardBackgroundColor(tags[0]) }}
                    tabIndex={0}
                  >
                    <h2 className='md:text-2xl text-3xl font-medium text-gray-300 leading-tight z-10'>
                      {title}
                    </h2>
                    <h3 className='opacity-75'>{date}</h3>
                    <Image
                      name={tags[0]}
                      env='preview'
                      className='md:w-40 w-48 md:h-40 h-48 md:-m-8 -m-10 opacity-25 absolute bottom-0 right-0 drag-none'
                    />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
