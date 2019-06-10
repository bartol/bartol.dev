import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Header from '../components/header'
import Helmet from 'react-helmet'
import useSiteMetadata from '../utils/use-sitemetadata'
import '../../public/prism.css'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const Main = styled.main`
  margin: 1rem auto 4rem;
  max-width: 90vw;
  width: 640px;
`

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* * + * {
            margin-top: 1rem;
          } */

          html,
          body {
            margin: 0;
            color: rgba(0, 0, 0, 0.84);
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 20px;
            line-height: 1.6;
            background-color: #fafafa;

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: #222;
              font-weight: 600;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }

          img {
            box-shadow: 0 5px 10px rgba(154, 160, 185, 0.5),
              0 15px 40px rgba(166, 173, 201, 0.8) !important;
            border-radius: 10px;
          }

          img.emoji {
            height: 1em;
            width: 1em;
            margin: 0 0.05em 0 0.1em;
            vertical-align: -0.1em;
            box-shadow: none !important;
            border-radius: 0;
          }

          .gatsby-highlight-code-line {
            background-color: #012a4a;
            display: block;
            margin-right: -1em;
            margin-left: -1em;
            padding-right: 1em;
            padding-left: 0.75em;
          }

          /**
          * Add back the container background-color, border-radius, padding, margin
          * and overflow that we removed from <pre>.
          */
          .gatsby-highlight {
            background-color: #011627;
            border-radius: 10px;
            /* margin: 20px 0; */
            padding: 1em;
            overflow: auto;
            font-size: 16px;
            box-shadow: 0 5px 10px rgba(154, 160, 185, 0.5),
              0 15px 40px rgba(166, 173, 201, 0.8);
          }

          /**
          * Remove the default PrismJS theme background-color, border-radius, margin,
          * padding and overflow.
          * 1. Make the element just wide enough to fit its content.
          * 2. Always fill the visible space in .gatsby-highlight.
          * 3. Adjust the position of the line numbers
          */
          .gatsby-highlight pre[class*='language-'] {
            background-color: transparent;
            margin: 0;
            padding: 0;
            overflow: initial;
            float: left; /* 1 */
            min-width: 100%; /* 2 */
          }

          /* Adjust the position of the line numbers
          .gatsby-highlight pre[class*='language-'].line-numbers {
            padding-left: 2.8em;
          } */
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
