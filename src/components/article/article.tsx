/* eslint no-alert:0 */
/* eslint no-undef:0 */
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Textarea from 'react-autosize-textarea'
import { request } from 'graphql-request'
import { diffSentences } from 'diff'
import './article.css'
import './code.css'
import { Card } from './card'
import { Changelog } from './changelog'
import { Resources } from './resources'
import SEO from '../seo'

const mutation = `
mutation SendEdit($title: String!, $body: String!, $name: String, $email: String) {
  edit(title: $title, body: $body, name: $name, email: $email)
}`

const Article = ({ data }: Props) => {
  const { markdownRemark } = data
  const { html, frontmatter, fields, thumbnail } = markdownRemark
  let { rawMarkdownBody } = markdownRemark
  const { title, date, changelog, resources, tags } = frontmatter
  const { slug } = fields
  const { publicURL: thumbnailURL } = thumbnail

  if (rawMarkdownBody.startsWith('\n'))
    rawMarkdownBody = rawMarkdownBody.slice(1)

  if (rawMarkdownBody.endsWith('\n'))
    rawMarkdownBody = rawMarkdownBody.slice(0, -1)

  const [edit, setEdit] = useState(false)
  const [rawMarkdown, setRawMarkdown] = useState(rawMarkdownBody)

  const send = async () => {
    if (rawMarkdownBody === rawMarkdown) {
      alert('Please edit article to send it.')
      return
    }

    const body = JSON.stringify(diffSentences(rawMarkdownBody, rawMarkdown))

    const variables = {
      title,
      body,
    }

    const res = await request('https://api.bartol.dev', mutation, variables)
    if (res.edit === 'success') {
      alert('Edit sent successfuly.')

      setEdit(false)
    } else {
      alert(
        'Oops! There was problem transfering your knowledge. Please try again or email me contact@bartol.dev'
      )
    }
  }

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
      {edit ? (
        <Textarea
          className='rawMarkdown'
          aria-label='edit article'
          value={rawMarkdown}
          onChange={e => setRawMarkdown(e.target.value)}
        />
      ) : (
        /* eslint-disable-next-line react/no-danger */
        <div className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
      )}
      {resources ? <Resources resources={resources} /> : null}
      {changelog ? <Changelog changelog={changelog} /> : null}
      <div className='hidden md:flex fixed bottom-0 right-0 mb-6 mr-6 flex-col items-end'>
        {edit && rawMarkdownBody !== rawMarkdown ? (
          <button
            className='block rounded-full bg-green-700 px-6 py-3 shadow m-2'
            type='button'
            onClick={() => send()}
          >
            Send edit
          </button>
        ) : null}
        {edit ? (
          <button
            className='block rounded-full bg-red-700 px-6 py-3 shadow m-2'
            type='button'
            onClick={() => {
              setEdit(!edit)
              if (edit) {
                setRawMarkdown(rawMarkdownBody)
              }
            }}
          >
            Discard edit
          </button>
        ) : (
          <button
            className='block rounded-full bg-dark-700 px-6 py-3 shadow m-2'
            type='button'
            onClick={() => setEdit(!edit)}
          >
            Edit article
          </button>
        )}
      </div>
    </div>
  )
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
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
