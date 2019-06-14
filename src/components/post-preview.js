import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import Twemoji from 'react-twemoji'

const Article = styled.article`
  border-bottom: 1px solid var(--line); /* 3 */
  margin-top: 0rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;

  /* @media (max-width: 720px) {
    flex-direction: column;
  } */

  /* @media (max-width: 720px) {
    font-size: 0.9rem;
  } */

  &:first-of-type {
    margin-top: 1rem;
  }

  &:last-of-type {
    border-bottom: none;
  }
`

const LinkBox = styled(Link)`
  margin: 1rem 1rem 0 0;
  width: 7.5rem;
`

const ImageBox = styled(Image)`
  width: 7.5rem;
  height: 7.5rem;
  box-shadow: var(--shadow);
  /* @media (max-width: 720px) {
    width: 40vw;
    height: auto;
  } */
  * {
    margin-top: 0;
  }
`

const FluidBox = styled.div`
  display: flex;
  /* background-color: red; */
  justify-content: start;
  flex-wrap: wrap;
  /* @media (max-width: 590px) {
    flex-direction: column;
  } */
  margin: 0;
`

const Test = styled.p`
  display: inline-block;
  margin: 12px 18px 0 0;
  font-size: 0.9rem;
  color: var(--parameters);
  line-height: 1.1;

  @media (max-width: 380px) {
    font-size: 0.7rem;
  }
`

const Excerpt = styled.p`
  color: var(--text);
  line-height: 1.4;
  margin-top: 5px;
  @media (max-width: 720px) {
    display: none;
  }
`

const PostPreview = ({ post }) => (
  <Article>
    <LinkBox to={post.slug}>
      <ImageBox fluid={post.image.sharp.fluid} alt={post.title} />
    </LinkBox>
    <div
      css={css`
        /* max-width: calc(640px - 150px - 20px); */
        word-wrap: break-word;
      `}
    >
      <h2
        css={css`
          margin-top: 1.1rem;

          @media (max-width: 560px) {
            font-size: 1.3rem;
          }

          @media (max-width: 450px) {
            font-size: 1.2rem;
          }

          @media (max-width: 380px) {
            font-size: 1.075rem;
          }
        `}
      >
        <Link
          to={post.slug}
          css={css`
            color: var(--main);
          `}
        >
          {post.title}
        </Link>
      </h2>
      <FluidBox>
        <Test>
          <Twemoji>
            <span role="img" aria-label="calendar emoji">
              🗓
            </span>{' '}
            {post.date}
          </Twemoji>
        </Test>
        <Test>
          <Twemoji>
            <span role="img" aria-label="clock emoji">
              ⏱️
            </span>{' '}
            {post.timeToRead} min read
          </Twemoji>
        </Test>
      </FluidBox>
      <Excerpt>{post.excerpt}</Excerpt>
    </div>
  </Article>
)

export default PostPreview
