import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { Location } from '@reach/router'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const Ascii = styled.div`
  width: 100%;
  margin-top: 15vh;
  font-size: 8rem;
  text-align: center;
  color: var(--line);
  font-family: 'IBM Plex Mono', monospace;
  user-select: none;

  @media (max-width: 600px) {
    font-size: 100px;
  }

  @media (max-width: 400px) {
    font-size: 90px;
  }
`

const Err = styled.div`
  /* font-family: 'IBM Plex Mono', monospace; */
  font-size: 3.25rem;
  line-height: 0.9;
  padding-right: 1rem;
  font-weight: 600;
`

const Message = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 1rem auto 0;
`

// const VerticalyCenter = styled.div`
//   height: calc(100vh - 56px - 1rem - 4rem);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: -5rem;
// `

const emojis = ['(>_<)', '(·.·)', 'ಠ_ಠ', '(⊙_☉)', '(~_~;)']

export default () => (
  <Layout>
    <SEO title="Not found" />
    <Ascii>{emojis[Math.floor(Math.random() * emojis.length)]}</Ascii>
    <Message>
      <Err>404</Err>
      <div>
        <Location>
          {({ location }) => {
            if (/\/blog\/..*/.test(location.pathname)) {
              return 'Post'
            }
            // if (/\/tags\/..*/.test(location.pathname)) {
            //   return 'Tag'
            // }
            return 'Page'
          }}
        </Location>
{' '}
        was not found.
        <br />
        Go back to
{' '}
        <Location>
          {({ location }) => {
            if (/\/blog\/..*/.test(location.pathname)) {
              return (
                <Link
                  to="/blog/"
                  css={css`
                    font-weight: 600;
                  `}
                >
                  Posts
                </Link>
              )
            }
            // if (/\/tags\/..*/.test(location.pathname)) {
            //   return (
            //     <Link
            //       to="/tags/"
            //       css={css`
            //         font-weight: 600;
            //       `}
            //     >
            //       Tags
            //     </Link>
            //   )
            // }
            return (
              <Link
                to="/"
                css={css`
                  font-weight: 600;
                `}
              >
                Home
              </Link>
            )
          }}
        </Location>
        .
      </div>
    </Message>
  </Layout>
)

// (>_<) (·.·) ಠ_ಠ (⊙_☉)
