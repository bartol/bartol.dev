import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'

const Tag = styled.li`
  padding: 0.2rem 0.4rem;
  margin: 0.2rem 0.4rem;
  color: #e1e1e1;
  background-color: var(--nav);
  display: inline-block;
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  a {
    text-decoration: none;
  }
`

const List = styled.ul`
  margin-left: -0.4rem;
`

const LastPosts = () => {
  const data = useStaticQuery(graphql`
    query tagsQuery {
      allMdx {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  const tags = []
  const tagsList = data.allMdx.edges.map(edge => edge.node.frontmatter.tags.map((tag) => {
    if (tags.indexOf(tag) === -1) {
      return tags.push(tag)
    }
  }))

  return (
    <Layout>
      <h1>Tags</h1>
      <List>
        {tags.map(tag => (
          <Tag>
            <Link to={`/tags/${tag}/`}>{tag}</Link>
          </Tag>
        ))}
      </List>
    </Layout>
  )
}

/*
const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

return (
  <header>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
)
}
*/

// <PostLink key={edge.node.id} post={edge.node} />
export default LastPosts
