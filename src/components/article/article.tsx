import React from 'react'
import { graphql } from 'gatsby'
import './article.css'
import { Card } from './card'

const Article = ({ data }: Props) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, date, changelog, tags } = frontmatter

  return (
    <div className='container max-w-2xl w-90 mx-auto pt-12'>
      <Card
        title={title}
        date={date}
        updated={changelog[changelog.length - 1].date}
        tag={tags[0]}
      />
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
        tags
        changelog {
          date(formatString: "MMMM Do, YYYY")
          message
        }
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
        tags: string[]
        changelog: Changelog[]
      }
    }
  }
}

interface Changelog {
  date: string
  message: string
}
