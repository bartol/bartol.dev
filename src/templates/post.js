/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Twemoji from 'react-twemoji'
import { MDXProvider } from '@mdx-js/react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter-card'
import SEO from '../components/SEO'
// import '../styles/markdown.css'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { published: { eq: true }, slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        foldername
        filename
        image {
          childImageSharp {
            fixed(width: 120, height: 120) {
              src
              srcSet
              srcSetWebp
              aspectRatio
              base64
              width
              height
            }
          }
          extension
          publicURL
        }
      }
      timeToRead
      code {
        body
      }
    }
  }
`

const Parameters = styled.div`
  display: inline-block;
  margin: 8px 1rem 0 0;
  font-size: 0.9rem;
  color: var(--parameters);
  line-height: 1.1;
`

const Title = styled.h1``

const ImageBox = styled(Image)`
  margin: 0;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
  object-fit: cover;
`

const FluidBox = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`

const PostContent = styled.div`
  /* p:first-of-type::first-letter {
    font-weight: 600;
    float: left;
    font-size: 3.5rem;
    line-height: 3rem;
    padding-top: 7px;
    padding-right: 8px;
    padding-left: 3px;
    margin: 0;
    text-transform: uppercase;
  } */

  ul {
    list-style: outside;
    padding-left: 40px;
  }

  li > ul {
    padding-left: 0;
  }

  li > ul,
  li + li {
    margin-top: 0.25rem;
  }

  p,
  ul,
  ol {
    margin-top: 1rem;
  }

  hr {
    border-color: var(--line);
  }

  figure {
    margin-top: 1.5rem;
    padding-bottom: 10px;
  }

  blockquote {
    border-left: 0.8rem solid var(--main);
    background-color: var(--nav);
    margin: 1.5rem 0;
    padding: 1rem;
    border-radius: var(--radius);
    color: #e1e1e1;
    box-shadow: var(--shadow);

    > p {
      margin-top: 0;
    }
  }
`

const SVG = styled.img`
  width: 120px;
  /* height: 120px; */
  box-shadow: none;
  border-radius: 0px;
`

const ReadLink = styled(Link)`
  /* display: inline-block; */
  font-size: 1rem;
  display: flex;
  align-items: center;

  svg {
    /* position: absolute; */
    /* color: var(--text); */
    font-weight: 600;
    height: 1rem;
    width: 1rem;
    margin-right: 0.1rem;
    stroke: var(--heading);

    transition: all 0.15s cubic-bezier(0, -0.22, 1, 1.22);

    /* background-color: red; */
    /* display: flex; */
    /* justify-content: center; */
  }

  :hover {
    svg {
      transform: translateX(-0.15rem);
      stroke: var(--main);

      /* transform: rotate(360deg); */
    }
  }
`

const FooterNav = styled.nav`
  display: inline-block;
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  justify-content: space-between;

  p {
    margin-right: 2px;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding-left: 1.3rem;
  h1 {
    margin: 0;
    font-size: 1.556rem;
    @media (max-width: 500px) {
      font-size: 1.333rem;
    }
  }
`

const Share = styled.p`
  @media (max-width: 440px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    span {
      display: none;
    }
  }
`

const components = {
  p: props => <p className="paragraph" {...props} />,
  h1: props => <h1 className="heading-1" {...props} />,
  h2: props => <h2 className="heading-2" {...props} />,
  h3: props => <h3 className="heading-3" {...props} />,
  blockquote: props => <blockquote className="blockquote" {...props} />,
  ul: props => <ul className="unordered-list" {...props} />,
  ol: props => <ol className="ordered-list" {...props} />,
  li: props => <li className="list-item" {...props} />,
  em: props => <em className="emphasis" {...props} />,
  strong: props => <strong className="strong" {...props} />,
  delete: props => <delete className="strikethrough" {...props} />,
  hr: props => <hr className="break" {...props} />,
  a: props => <a className="link" {...props} />,
  img: props => <img className="image" {...props} />,
}

const PostTemplate = ({ data: { mdx: post } }) => {
  let img
  if (!post.frontmatter.image.childImageSharp && post.frontmatter.image.extension === 'svg') {
    img = <SVG src={post.frontmatter.image.publicURL} alt={post.frontmatter.title} />
  } else {
    img = (
      <ImageBox fixed={post.frontmatter.image.childImageSharp.fixed} alt={post.frontmatter.title} />
    )
  }

  const editUrl = `https://github.com/bartol/bartol.dev/edit/master/posts/${post.frontmatter.foldername}/${post.frontmatter.filename}.mdx`
  const discussUrl = `https://twitter.com/search?q=${encodeURIComponent(
    `https://bartol.dev/${post.frontmatter.slug}`,
  )}`

  return (
    <Layout route="/blog/">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        pathname={post.frontmatter.slug}
        article
      />
      <HeaderWrapper>
        {img}
        <HeaderTitle>
          <Title>{post.frontmatter.title}</Title>
          <FluidBox>
            <Parameters>
              <Twemoji>
                <span role="img" aria-label="calendar emoji">
                  🗓
                </span>
                {' '}
                {post.frontmatter.date}
              </Twemoji>
            </Parameters>
            <Parameters>
              <Twemoji>
                <span role="img" aria-label="clock emoji">
                  ⏱️
                </span>
                {' '}
                {post.timeToRead}
                {' '}
min read
              </Twemoji>
            </Parameters>
          </FluidBox>
        </HeaderTitle>
      </HeaderWrapper>

      <MDXProvider components={components}>
        <PostContent>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </PostContent>
      </MDXProvider>
      <FooterNav>
        {/* <a href="/blog/">

        </a> */}
        <Share>
          <Link to="/blog/">
            <span
              css={css`
                border-bottom: 0;
              `}
            >
              &larr;
            </span>
            {' '}
            Back to all posts
          </Link>
        </Share>
        <Share>
          <a href={discussUrl} target="_blank" rel="nofollow noopener noreferrer">
            Discuss on Twitter
          </a>
          {' '}
          <span> • </span>
          {' '}
          <a href={editUrl} target="_blank" rel="nofollow noopener noreferrer">
            Edit on GitHub
          </a>
        </Share>
      </FooterNav>
      <Newsletter />
    </Layout>
  )
}

export default PostTemplate
