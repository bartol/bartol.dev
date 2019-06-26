import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import PopularPost from './popular-post'

const PopularPosts = () => {
  const posts = useStaticQuery(graphql`
    query getPopularPosts {
      file {
        fields {
          popularPosts
        }
      }
    }
  `)

  const { popularPosts } = posts.file.fields

  const popularPostsList = popularPosts.map(post => (
    <PopularPost Slug={post[0]} />
    // <li>{post[0]}</li>
  ))

  return (
    <>
      <h2
        css={css`
          /* margin: 0;
          padding-bottom: 0; */
          /* padding-left: 1px; */
          border-bottom: none;
        `}
      >
        Popular posts
      </h2>
      <ul
        css={css`
          padding-left: 1px;
        `}
      >
        {popularPostsList}
      </ul>
    </>
  )
}

export default PopularPosts
