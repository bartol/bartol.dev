import React from 'react'
import { graphql } from 'gatsby'
import './article.css'

const Article = ({ data }: Props) => {
  const { markdownRemark } = data
  const { html, frontmatter, fields } = markdownRemark
  const { title, date, updated } = frontmatter
  const { views } = fields

  return (
    <div className='container max-w-2xl w-90 mx-auto pt-12'>
      <h1 className='text-5xl leading-none font-medium'>{title}</h1>
      <div className='my-6 ml-4 opacity-75'>
        <p>Published on {date}</p>
        {updated ? <p>Updated on {updated}</p> : null}
        {views ? <p>{views} views</p> : null}
      </div>
      {/* eslint-disable-next-line react/no-danger */}
      <div className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      fields {
        views
        slug
        edit
      }
    }
  }
`

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        date: string
        updated: string
      }
      fields: {
        views: string
        slug: string
        edit: string
      }
    }
  }
}
