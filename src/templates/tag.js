import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Image from 'gatsby-image'
import { Location } from '@reach/router'
import Layout from '../components/layout'

export const query = graphql`
  query($tag: String!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { published: { eq: true }, tags: { eq: $tag } } }
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
`

const Item = styled.li`
  padding: 1rem 0 0 0;
  position: relative;
  display: flex;
  flex-direction: row;

  :first-of-type {
    padding: 0;
  }

  h3 {
    margin: 0;
    padding-bottom: 0;
    padding-left: 1px;
    /* border-bottom: none; */
  }

  &:first-of-type {
    /* margin-top: 1.2rem; */
  }

  /* a::-moz-selection {

    background: var(--main);
    color: var(--bg);
    text-decoration-color: var(--bg);
  }

  a::selection {
    background: var(--main);
    color: var(--bg);
    text-decoration-color: var(--bg);
  } */
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

const Color = styled.span`
  color: var(--main);
`

const TagTemplate = ({ data }) => {
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
        <LinkBox to={`/${edge.node.frontmatter.slug}`}>{img}</LinkBox>
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
              to={`/${edge.node.frontmatter.slug}`}
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
    <Layout>
      <h2
        css={css`
          /* margin: 0;
          padding-bottom: 0; */
          /* padding-left: 1px; */
          border-bottom: none;
        `}
      >
        All posts with tag:
        {' '}
        <Location>
          {({ location }) => {
            const url = location.pathname
            const name = url.slice(6, -1)
            return <Color>{name}</Color>
          }}
        </Location>
      </h2>
      <ul
        css={css`
          padding-left: 1px;
        `}
      >
        {lastPosts}
      </ul>
    </Layout>
  )
}

export default TagTemplate
