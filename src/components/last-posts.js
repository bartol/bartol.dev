import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Image from 'gatsby-image'

const Item = styled.li`
  /* border-bottom: 1px solid var(--line);  */
  /* margin-top: 0.8rem; */
  /* padding-bottom: 0.8rem; */
  padding: 1rem 0 0 0;
  position: relative;
  display: flex;
  flex-direction: row;

  :first-of-type {
    padding: 0;
  }

  /* @media (max-width: 720px) {
    flex-direction: column;
  } */

  /* @media (max-width: 720px) {
    font-size: 0.9rem;
  } */

  /* &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 1px;
    width: 98%;
    border-bottom: 1px solid var(--line);
  } */

  h3 {
    margin: 0;
    padding-bottom: 0;
    padding-left: 1px;
    /* border-bottom: none; */
  }

  &:first-of-type {
    /* margin-top: 1.2rem; */
  }

  a::-moz-selection {
    /* Code for Firefox */
    background: var(--main);
    color: var(--bg);
  }

  a::selection {
    background: var(--main);
    color: var(--bg);
  }
`

const SVG = styled.img`
  width: 50px;
  height: 50px;
  box-shadow: none;
  border-radius: 0px;
`

const ImageBox = styled(Image)`
  margin: 0;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  width: 50px;
  height: 50px;
  object-fit: cover;
`

const LinkBox = styled(Link)`
  margin-right: 1rem;
  width: 50px;
  height: 50px;
  img {
    width: 50px;
    height: 50px;
    box-shadow: none;
  }
`

const LastPosts = () => {
  const data = useStaticQuery(graphql`
    query lastPostQuery {
      allMdx(
        limit: 5
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              image {
                sharp: childImageSharp {
                  fixed(width: 50, height: 50) {
                    src
                    srcSetWebp
                    aspectRatio
                    base64
                  }
                }
                extension
                publicURL
              }
            }
          }
        }
      }
    }
  `)
  let img

  const lastPosts = data.allMdx.edges.map((edge) => {
    if (
      !edge.node.frontmatter.image.sharp
      && edge.node.frontmatter.image.extension === 'svg'
      // data
    ) {
      img = <SVG src={edge.node.frontmatter.image.publicURL} alt={edge.node.frontmatter.title} />
    } else {
      img = (
        <ImageBox
          fixed={edge.node.frontmatter.image.sharp.fixed}
          alt={edge.node.frontmatter.title}
        />
      )
    }
    return (
      <Item>
        <LinkBox to={edge.node.frontmatter.slug}>{img}</LinkBox>
        <div
          css={css`
            /* max-width: calc(640px - 150px - 20px); */
            /* height: 70px; */
            /* margin-top: 0.4rem; */
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <h3
            css={css`
              /* font-size: 20px; */
              font-size: 1.12rem;
              /* line-height: 1; */

              /* @media (max-width: 350px) {
                font-size: 1.075rem;
              } */
            `}
          >
            <Link
              to={edge.node.frontmatter.slug}
              css={css`
                color: var(--heading);
                font-weight: 600;
              `}
            >
              {edge.node.frontmatter.title}
            </Link>
          </h3>
        </div>
      </Item>
    )
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
        Recent posts
      </h2>
      <ul
        css={css`
          padding-left: 1px;
        `}
      >
        {lastPosts}
      </ul>
    </>
  )
}

/*
const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

return (
  <header>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
)
}
*/

// <PostLink key={edge.node.id} post={edge.node} />
export default LastPosts
