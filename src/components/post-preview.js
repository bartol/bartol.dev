import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import Twemoji from 'react-twemoji'

const Article = styled.article`
  /* border-bottom: 1px solid var(--line);  */
  /* margin-top: 0.8rem; */
  /* padding-bottom: 0.8rem; */
  padding: 1.5rem 0;
  position: relative;
  display: flex;
  flex-direction: row;

  /* @media (max-width: 720px) {
    flex-direction: column;
  } */

  /* @media (max-width: 720px) {
    font-size: 0.9rem;
  } */

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 1px;
    width: 98%;
    border-bottom: 1px solid var(--line);
  }

  h2 {
    margin: 0;
    padding-bottom: 0;
    padding-left: 1px;
    border-bottom: none;
  }

  &:first-of-type {
    /* margin-top: 1.2rem; */
  }

  a::-moz-selection {
    /* Code for Firefox */
    background: rgba(243, 86, 39, 0.99);
    color: var(--bg);
  }

  a::selection {
    background: rgba(243, 86, 39, 0.99);
    color: var(--bg);
  }
`

const LinkBox = styled(Link)`
  margin-right: 1rem;
  width: 75px;
  height: 75px;
  img {
    width: 75px;
    height: 75px;
    box-shadow: none;
  }
`

const ImageBox = styled(Image)`
  width: 75px;
  height: 75px;
  /* box-shadow: var(--shadow); */
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
  /* flex-wrap: wrap; */
  /* @media (max-width: 590px) {
    flex-direction: column;
  } */
  margin: 0;
`

const Test = styled.p`
  display: inline-block;
  margin: 8px 1rem 0 0;
  font-size: 0.9rem;
  color: var(--parameters);
  line-height: 1.1;

  @media (max-width: 380px) {
    /* font-size: 0.7rem; */
  }
`

const PostPreview = ({ hit }) => {
  let img
  if (!hit.frontmatter.image || hit.frontmatter.image.extension === 'svg') {
    img = <img src={hit.frontmatter.image.publicURL} alt={hit.frontmatter.title} />
  } else {
    img = <ImageBox fixed={hit.frontmatter.image.sharp.fixed} alt={hit.frontmatter.title} />
  }

  return (
    <>
      <Article>
        <LinkBox to={hit.frontmatter.slug}>{img}</LinkBox>
        <div
          css={css`
            /* max-width: calc(640px - 150px - 20px); */
            height: 70px;
            /* margin-top: 0.4rem; */
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <h2
            css={css`
              font-size: 24px;
            `}
          >
            <Link
              to={hit.frontmatter.slug}
              css={css`
                color: var(--heading);
                font-weight: 600;
              `}
            >
              {hit.frontmatter.title}
            </Link>
          </h2>
          <FluidBox>
            <Test>
              <Twemoji>
                <span role="img" aria-label="calendar emoji">
                  🗓
                </span>
                {' '}
                {hit.frontmatter.date}
              </Twemoji>
            </Test>
            <Test>
              <Twemoji>
                <span role="img" aria-label="clock emoji">
                  ⏱️
                </span>
                {' '}
                {hit.timeToRead}
                {' '}
min read
              </Twemoji>
            </Test>
          </FluidBox>
        </div>
      </Article>
    </>
  )
}
export default PostPreview
