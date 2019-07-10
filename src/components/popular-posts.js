import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import PopularPost from './popular-post'

const PopularPosts = () => {
  const posts = useStaticQuery(graphql`
    query getPopularPosts {
      googleApiData {
        popularPosts
      }
    }
  `)

  const { popularPosts } = posts.googleApiData

  const popularPostsList = popularPosts.map((post) => {
    // if (post[1] >= 10) {
    //   return <PopularPost Slug={post[0]} />
    // }
    if (post[0] !== '/blog/another-post/') {
      return <PopularPost Slug={post[0]} />
    }
  })
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
