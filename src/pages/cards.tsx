import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import List from '../components/list'
import Sidebar from '../components/sidebar'
import { FilterContext } from '../state'

export default ({ data }) => {
  const { setAllResults, results } = useContext(FilterContext)
  setAllResults(data.allMarkdownRemark.nodes)

  return (
    <div className='container mx-auto flex min-h-screen'>
      <Sidebar />
      <List articles={results} />
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
