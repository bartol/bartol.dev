import React from 'react'
import { graphql } from 'gatsby'
import './article.css'
import { cardBackgroundColor } from '../list/cardBackgroundColor'

const Article = ({ data }: Props) => {
  const { markdownRemark } = data
  const { html, frontmatter, fields } = markdownRemark
  const { title, date, updated, tags } = frontmatter
  const { views } = fields

  return (
    <div className='container max-w-2xl w-90 mx-auto pt-12'>
      <div
        className='relative overflow-hidden py-4 px-6 rounded mb-8 flex flex-col justify-between shadow bg-dark-700 articleCard'
        style={{
          backgroundColor: cardBackgroundColor(tags[0]),
          height: '22.5rem',
        }}
      >
        <h1 className='text-5xl leading-tight font-medium'>{title}</h1>
        <div className='text-xl text-dark-300'>
          {views ? <p>{views} views</p> : null}
          <p>Published on {date}</p>
          {updated ? <p>Updated on {updated}</p> : null}
        </div>
        <img
          src={`/images/${tags[0]}.svg`}
          alt={`${tags[0]} icon`}
          loading='lazy'
          className='w-64 h-64 opacity-25 absolute bottom-0 right-0 drag-none cardImage transition-slow'
          style={{
            margin: '-3.1rem',
          }}
        />
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
        tags
      }
      fields {
        views
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
