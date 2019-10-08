import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from '../components/image'
import { getCardBackgroundColor } from '../utils/getCardBackgroundColor'
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
      <div className='hidden lg:block lg:w-1/5 xl:w-1/6 py-4 my-2 xl:px-4 lg:px-5 px-4 relative'>
        <h1 className='w-full'>
          <Logo className='stroke-current text-gray-400 w-3/5' />
        </h1>
        <p>Hi, welcome to Bartol's personal cyberspace!</p>
        <ul className='sticky top-0'>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <footer className='absolute bottom-0 right-0 mb-4'>
          <a href='https://github.com/bartol'>GitHub</a>{' '}
          <Link to='/rss.xml'>RSS</Link>
          <span className='block text-gray-500'>© 2019 Bartol Deak</span>
        </footer>
      </div>
      <ul className='flex flex-wrap md:py-3 py-2 xl:px-0 lg:px-1 lg:w-4/5 xl:w-5/6'>
        {results.map(article => {
          const { id, frontmatter, fields } = article
          const { title, date, tags } = frontmatter
          const { slug } = fields
          return (
            <li className='md:my-3 my-2 xl:px-4 lg:px-5 px-4 xl:w-1/3 lg:w-1/2  md:w-1/2 w-full h-48'>
              <Link to={`/${slug}/`} key={id} tabIndex={-1}>
                <div
                  className='flex flex-col justify-between px-4 py-3 h-full relative overflow-hidden rounded bg-gray-800 shadow-md'
                  style={{ backgroundColor: getCardBackgroundColor(tags[0]) }}
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                  tabIndex={0}
                >
                  <h2 className='lg:text-2xl text-3xl font-medium text-gray-300 leading-tight z-10'>
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
    </div>
  )
}
