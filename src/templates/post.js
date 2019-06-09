import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import ReadLink from '../components/read-link'
import { stringify } from 'querystring'
import { MDXRenderer } from 'gatsby-mdx'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <MDXRenderer>{post.code.body}</MDXRenderer>
    <ReadLink to="/">&larr; Back to all posts</ReadLink>
  </Layout>
)

export default PostTemplate
