import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import List from '../components/list'
import Sidebar from '../components/sidebar'
import { FilterContext } from '../state'
import SEO from '../components/seo'

export default ({ data }) => {
  const { setAllResults, results } = useContext(FilterContext)
  setAllResults(data.allMarkdownRemark.nodes)

  return (
    <>
      <div className='bg-red-600 text-center'>
        Site may not get updated for few days. Working on redesign.
      </div>
      <div className='container mx-auto flex min-h-screen'>
        <SEO title={`Bartol's personal cyberspace`} />
        <Sidebar />
        <List articles={results} />
      </div>
    </>
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
        }
        id
        excerpt(pruneLength: 1000000)
      }
    }
  }
`
