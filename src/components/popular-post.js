import React, { useMemo } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Image from 'gatsby-image'

const PopularPost = (props) => {
  const { Slug } = props

  const formattedSlug = Slug.substring(1)

  const data = useStaticQuery(graphql`
    query popularPostQuery {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
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

  // const match = useMemo(
  //   () => data.allMdx.edges.find(({ node }) => Slug === node.frontmatter.slug),
  //   [data],
  // )

  // const match = data.allMdx.edges.find(edge => edge.node.frontmatter.slug === formattedSlug)

  const match = useMemo(
    () => data.allMdx.edges.find(edge => edge.node.frontmatter.slug === formattedSlug),
    [data, formattedSlug],
  )

  // return <li>{match.node.frontmatter.title}</li>

  let img

  if (
    !match.node.frontmatter.image.sharp
    && match.node.frontmatter.image.extension === 'svg'
    // data
  ) {
    img = <SVG src={match.node.frontmatter.image.publicURL} alt={match.node.frontmatter.title} />
  } else {
    img = (
      <ImageBox
        fixed={match.node.frontmatter.image.sharp.fixed}
        alt={match.node.frontmatter.title}
      />
    )
  }
  return (
    <Item>
      <LinkBox to={match.node.frontmatter.slug}>{img}</LinkBox>
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
            to={match.node.frontmatter.slug}
            css={css`
              color: var(--heading);
              font-weight: 600;
            `}
          >
            {match.node.frontmatter.title}
          </Link>
        </h3>
      </div>
    </Item>
  )
}

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

export default PopularPost
