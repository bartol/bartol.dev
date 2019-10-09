import React from 'react'
import { graphql } from 'gatsby'
import List from '../components/list'
import Sidebar from '../components/sidebar'

export default ({ data }) => {
  const articles = data.allMarkdownRemark.nodes

  return (
    <div className='container mx-auto flex'>
      <Sidebar />
      <List articles={articles} />
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
