import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from '../components/image'
import { getCardBackgroundColor } from '../utils/getCardBackgroundColor'

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
    <div>
      <ul className='container mx-auto flex flex-wrap md:py-3 py-2'>
        {results.map(article => {
          const { id, frontmatter, fields } = article
          const { title, date, tags } = frontmatter
          const { slug } = fields
          return (
            <li className='md:my-3 my-2 px-4 xl:w-1/4 lg:w-1/3 lg:h-40 md:w-1/2 w-full h-48'>
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
