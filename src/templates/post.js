import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Twemoji from 'react-twemoji'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter-card'
import SEO from '../components/SEO'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { published: { eq: true }, slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        foldername
        filename
        description
        image {
          childImageSharp {
            fixed(width: 100, height: 100) {
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
      timeToRead
      code {
        body
      }
    }
  }
`

const Test = styled.p`
  display: inline-block;
  margin: 8px 1rem 5px 0;
  font-size: 0.9rem;
  color: var(--parameters);
  line-height: 1.1;
`

const Title = styled.h1``

const ImageBox = styled(Image)`
  margin: 0;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  width: 100px;
  height: 100px;
  object-fit: cover;
`

const FluidBox = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`

const PostContent = styled.div`
  p {
    /* font-family: 'IBM Plex Serif', serif; */
  }

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
  }

  > ul:first-of-type {
    padding-left: 40px;
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
  width: 100px;
  /* height: 100px; */
  box-shadow: none;
  border-radius: 0px;
`

const ReadLink = styled(Link)`
  display: inline-block;
  font-size: 1rem;

  span {
    color: var(--text);
    font-weight: 600;
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
  justify-content: center;
  padding-left: 1.3rem;
  h1 {
    margin: 0;
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  let img
  if (!post.frontmatter.image.childImageSharp && post.frontmatter.image.extension === 'svg') {
    img = <SVG src={post.frontmatter.image.publicURL} alt={post.frontmatter.title} />
  } else {
    img = (
      <ImageBox fixed={post.frontmatter.image.childImageSharp.fixed} alt={post.frontmatter.title} />
    )
  }

  const editUrl = `https://github.com/bartold3ak/bartol.dev/edit/master/posts/${post.frontmatter.foldername}/${post.frontmatter.filename}.mdx`
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
            <Test>
              <Twemoji>
                <span role="img" aria-label="calendar emoji">
                  🗓
                </span>
                {' '}
                {post.frontmatter.date}
              </Twemoji>
            </Test>
            <Test>
              <Twemoji>
                <span role="img" aria-label="clock emoji">
                  ⏱️
                </span>
                {' '}
                {post.timeToRead}
                {' '}
min read
              </Twemoji>
            </Test>
          </FluidBox>
        </HeaderTitle>
      </HeaderWrapper>

      <PostContent>
        <MDXRenderer>{post.code.body}</MDXRenderer>
      </PostContent>
      <FooterNav>
        <ReadLink to="/blog/">
          <span>&larr;</span>
          {' '}
Back to all posts
        </ReadLink>
        <p>
          <a href={discussUrl} target="_blank" rel="nofollow noopener noreferrer">
            Discuss on Twitter
          </a>
          {' • '}
          <a href={editUrl} target="_blank" rel="nofollow noopener noreferrer">
            Edit on GitHub
          </a>
        </p>
      </FooterNav>
      <Newsletter />
    </Layout>
  )
}

export default PostTemplate
