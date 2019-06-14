import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Header from '../components/header'
import Helmet from 'react-helmet'
import useSiteMetadata from '../utils/use-sitemetadata'
import './prism.css'
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

          /* colors */

          body {
            --bg: #f7f7f7; /* 1 */
            --main: #089a82; /* 7 */
            --heading: #222222; /* 10 */
            --parameters: #7e7e7e; /* 6 */
            --text: #3b3b3b; /* 9 */
            --link: #089a82; /* 7 */
            --line: #cfcfcf; /* 3 */
            --shadow: 0 5px 10px rgba(154, 160, 185, 0.5),
              0 15px 40px rgba(166, 173, 201, 0.8);
          }

          body.dark {
            --bg: #222222; /* 10 */
            --main: #089a82; /* 6 */
            --heading: #f7f7f7; /* 1 */
            --parameters: #b1b1b1; /* 4 */
            --text: #e1e1e1; /* 2 */
            --link: #089a82; /* 6 */
            --line: #515151; /* 8 */
            --shadow: 0 5px 10px rgba(15, 15, 15, 0.5),
              0 15px 40px rgba(15, 15, 15, 0.8);
          }

          html,
          body {
            margin: 0;
            color: var(--text); /* text color */

            /* font-family: 'Source Sans Pro', sans-serif; */
            font-family: 'IBM Plex Sans', sans-serif;
            /* font-size: 20px; */
            @media (min-width: 320px) {
              font-size: calc(16px + 4 * ((100vw - 320px) / (640 - 320)));
            }

            @media (min-width: 640px) {
              font-size: 20px;
            }

            line-height: 1.75;
            background-color: var(--bg);

            > div {
              margin-top: 0;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: var(--heading);
              font-weight: 600;
              line-height: 1.1;

              + * {
                margin-top: 0.5rem;
              }
            }

            h1 {
              font-size: 1.8rem;
            }

            h2 {
              font-size: 1.5rem;
            }

            h3 {
              font-size: 1.2rem;
            }

            strong {
              color: var(--heading);
            }

            li {
              margin-top: 0.25rem;
            }

            br {
              user-select: none;
            }

            a {
              color: var(--link);
              text-decoration: none;
            }
          }

          img {
            box-shadow: var(--shadow) !important;
            border-radius: 5px;
          }

          img.emoji {
            height: 1em;
            width: 1em;
            margin: 0 0.05em 0 0.1em;
            vertical-align: -0.1em;
            box-shadow: none !important;
            border-radius: 0;
          }

          p > div {
            /* background-color: red; */
            display: inline;
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
            border-radius: 8px;
            /* margin: 20px 0; */
            padding: 1em;
            overflow: auto;
            font-size: 0.8rem;
            box-shadow: var(--shadow);
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
          /* p:first-of-type::first-letter {
            font-weight: 600;
            float: left;
            font-size: 75px;
            line-height: 60px;
            padding-top: 4px;
            padding-right: 8px;
            padding-left: 3px;
            margin: 0;
          } */
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600|IBM+Plex+Sans|IBM+Plex+Serif&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout
