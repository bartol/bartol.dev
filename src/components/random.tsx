import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Random: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  const { nodes } = data.allMarkdownRemark

  const randomNode = nodes[Math.floor(Math.random() * nodes.length)]

  const randomSlug = randomNode.fields.slug

  return (
    <Link to={`/${randomSlug}/`} tabIndex={-1}>
      <button type='button' className='random' tabIndex={0}>
        Random article
      </button>
    </Link>
  )
}

export default Random
