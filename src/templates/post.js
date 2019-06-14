import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import ReadLink from '../components/read-link'
import { MDXRenderer } from 'gatsby-mdx'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import Twemoji from 'react-twemoji'
import Helmet from 'react-helmet'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        langKey
        translatedLangSlug
        translatedLangKey
        image {
          sharp: childImageSharp {
            fluid(duotone: { shadow: "#222222", highlight: "#089a82" }) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
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
  margin: 10px 18px 10px 0;
  font-size: 0.9rem;
  color: var(--parameters);
  line-height: 1.1;
`

const Language = styled(Link)`
  color: var(--link);
`

const Title = styled.h1`
  margin-top: 30px;
`

const ImageBox = styled(Image)`
  margin: 0;
  box-shadow: var(--shadow);
  border-radius: 8px;
  /* margin-top: 1rem; */
`

const FluidBox = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`

const PostContent = styled.div`
  p {
    font-family: 'IBM Plex Serif', serif;
  }

  p:first-of-type::first-letter {
    font-weight: 600;
    float: left;
    font-size: 3.5rem;
    line-height: 3rem;
    padding-top: 7px;
    padding-right: 8px;
    padding-left: 3px;
    margin: 0;
    text-transform: uppercase;
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Helmet>
      <html lang={post.frontmatter.langKey} />
      <title>{`${post.frontmatter.title} – Bartol's Blog`}</title>
    </Helmet>
    <ImageBox fluid={post.frontmatter.image.sharp.fluid} alt={post.title} />
    <Title>{post.frontmatter.title}</Title>
    <FluidBox>
      <Test>
        <Twemoji>
          <span role="img" aria-label="calendar emoji">
            🗓
          </span>{' '}
          {post.frontmatter.date}
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
      {post.frontmatter.translatedLangKey === 'hr' && (
        <Test>
          <Twemoji>
            <span role="img" aria-label="globe emoji">
              🌐
            </span>{' '}
            Translated to{' '}
            <Language to={`/${post.frontmatter.translatedLangSlug}/`}>
              Croatian
            </Language>
          </Twemoji>
        </Test>
      )}
      {post.frontmatter.translatedLangKey === 'en' && (
        <Test>
          <Twemoji>
            <span role="img" aria-label="globe emoji">
              🌐
            </span>{' '}
            Prevedeno na{' '}
            <Language to={`/${post.frontmatter.translatedLangSlug}/`}>
              Engleski
            </Language>
          </Twemoji>
        </Test>
      )}
    </FluidBox>
    <br />
    <PostContent>
      <MDXRenderer>{post.code.body}</MDXRenderer>
    </PostContent>
    <ReadLink to="/">&larr; Back to all posts</ReadLink>
  </Layout>
)

export default PostTemplate
