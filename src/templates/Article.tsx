import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import EditArticle from '../components/editArticle'
import BackToAll from '../components/backToAll'

const Article = ({ data }: Props) => {
  const { markdownRemark } = data
  const { html, frontmatter, fields } = markdownRemark
  const { title, date, updated } = frontmatter
  const { views, slug, edit } = fields

  return (
    <Layout title={`${title} • Bartol Deak`} url={`/${slug}/`} isArticle>
      <div className='article'>
        <h1 className='heading'>{title}</h1>
        <p className='parameters'>
          <span>Published on {date}</span>
          {updated ? <span>Updated on {updated}</span> : null}
          {views ? <span>{views} views</span> : null}
        </p>
        {/* eslint-disable-next-line react/no-danger */}
        <div className='content' dangerouslySetInnerHTML={{ __html: html }} />
        <BackToAll />
        <EditArticle link={edit} />
      </div>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM Do, YYYY")
        title
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
