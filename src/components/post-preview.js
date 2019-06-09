import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import ReadLink from '../components/read-link'
import Image from 'gatsby-image'

const Article = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 0rem;
  padding-bottom: 1rem;
  display: flex;

  :first-of-type {
    margin-top: 1rem;
  }
`

const LinkBox = styled(Link)`
  margin: 1rem 1rem 0 0;
  width: 100px;
`

const ImageBox = styled(Image)`
  * {
    margin-top: 0;
  }
`
const PostPreview = ({ post }) => (
  <Article>
    <LinkBox to={post.slug}>
      <ImageBox fluid={post.image.sharp.fluid} alt={post.title} />
    </LinkBox>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.spoiler}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </div>
  </Article>
)

export default PostPreview
