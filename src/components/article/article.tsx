import React from 'react'
import { graphql } from 'gatsby'
import './article.css'
import './code.css'
import { Card } from './card'
import { Changelog } from './changelog'
import { Resources } from './resources'
import SEO from '../seo'

const Article = ({ data }: Props) => {
  const { markdownRemark } = data
  const { html, frontmatter, fields, thumbnail } = markdownRemark
  const { title, date, changelog, resources, tags } = frontmatter
  const { slug } = fields
  const { publicURL: thumbnailURL } = thumbnail

  return (
    <div className='container max-w-2xl w-90 mx-auto pt-12'>
      <SEO
        title={`${title} • Bartol Deak`}
        url={`/${slug}/`}
        image={thumbnailURL}
        isArticle
      />
      <Card
        title={title}
        date={date}
        updated={changelog ? changelog[changelog.length - 1].date : null}
        tag={tags[0]}
      />
      {/* eslint-disable-next-line react/no-danger */}
      <div className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
      {resources ? <Resources resources={resources} /> : null}
      {changelog ? <Changelog changelog={changelog} /> : null}
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
        resources {
          name
          url
        }
        changelog {
          date(formatString: "MMMM Do, YYYY")
          message
        }
      }
      fields {
        slug
      }
      thumbnail {
        publicURL
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
        resource: Resource[]
        changelog: Changelog[]
      }
      fields: {
        slug: string
      }
      thumbnail: {
        thumbnailURL: string
      }
    }
  }
}

interface Resource {
  name: string
  url: string
}

interface Changelog {
  date: string
  message: string
}
