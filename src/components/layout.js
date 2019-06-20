import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Header from './header'
import Footer from './footer'
import '../styles/prism.css'
import 'normalize.css'
import SEO from './SEO'

const Main = styled.main`
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 5rem;
  max-width: 90vw;
  width: 640px;
`

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;

          ::-moz-selection {
            /* Code for Firefox */
            background: rgba(243, 86, 39, 0.99);
            color: var(--bg);
          }

          ::selection {
            background: rgba(243, 86, 39, 0.99);
            color: var(--bg);
          }
        }

        /* * + * {
            margin-top: 1rem;
          } */

        /* colors */

        body {
          --bg: #f7f7f7; /* 1 */
          --nav: #1f1f1f;
          --main: #f35627; /* 7 */
          --heading: #222222; /* 10 */
          --parameters: #626262; /* 6 */
          --text: #222222; /* 9 */
          --link: #d23000; /* 7 */
          --line: #cfcfcf; /* 3 */
          /* --shadoww: 0 5px 10px rgba(155, 160, 185, 0.5), 0 15px 40px rgba(165, 175, 200, 0.8); */
          --shadow: 2px 4px 25px rgba(0, 0, 0, 0.15);
          --radius: 5px;
        }

        body.dark {
          --bg: #121212;
          /* --bg: #303030; */
          --nav: #1f1f1f;
          --main: #f35627; /* 7 */
          --heading: #e1e1e1; /* 1 */
          --parameters: #a0a0a0; /* 4 */
          --text: #e1e1e1; /* 2 */
          --link: #f35627; /* 7 */
          --line: #515151; /* 8 */
          /* --shadow: 0 5px 10px rgba(23, 23, 23, 0.5), 0 15px 40px rgba(21, 21, 21, 0.8); */
          --shadow: 2px 4px 25px rgba(0, 0, 0, 0.15);
          --radius: 5px;
        }

        #___gatsby {
          min-height: 100%;
          min-width: 100%;
          /* margin-bottom: -50px; */
          background-color: var(--bg);
          position: relative;
        }

        html,
        body {
          margin: 0;
          color: var(--text); /* text color */
          height: 100%;
          width: 100%;

          /* font-family: 'Source Sans Pro', sans-serif; */
          font-family: 'IBM Plex Sans', sans-serif;
          -webkit-font-smoothing: antialiased;

          /* font-size: 20px; */
          @media (min-width: 320px) {
            font-size: calc(16px + 2 * ((100vw - 320px) / (640 - 320)));
          }

          @media (min-width: 640px) {
            font-size: 18px;
          }

          line-height: 1.6;
          background-color: var(--main);

          > div {
            margin-top: 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            /* color: var(--heading); */
            font-weight: 600;
            line-height: 1.1;
            margin-top: 2rem;
            margin-bottom: 1rem;
            /* + * {
                margin-top: 0.5rem;
              } */
          }

          h1 {
            font-size: 32px;
          }

          h2 {
            font-size: 28px;
            border-bottom: 1px solid var(--line);
            padding-bottom: 0.4rem;
            /* margin-bottom: 0.6rem; */
          }

          h3 {
            font-size: 24px;
          }

          h4 {
            font-size: 22px;
          }

          h5 {
            font-size: 20px;
          }

          h6 {
            font-size: 18px;
          }

          strong {
            color: var(--heading);
          }

          ul {
            padding: 0;
            margin: 0;

            li:last-of-type > article:before {
              border-bottom: none;
            }
          }

          ul {
            list-style: none outside none;
          }

          .task-list-item {
            margin-top: 0.25rem;
          }

          li > ul {
            margin-top: 0;
            margin-left: 1rem;
          }

          br {
            user-select: none;
          }

          a {
            /* color: rgba(243, 86, 39, 0.99); */
            color: var(--link);
            text-decoration: none;

            ::-moz-selection {
              /* Code for Firefox */
              background: rgba(243, 86, 39, 0.99);
              color: var(--heading);
            }

            ::selection {
              background: rgba(243, 86, 39, 0.99);
              color: var(--heading);
            }
          }
        }

        img {
          box-shadow: var(--shadow);
          border-radius: var(--radius);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
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
          border-bottom-left-radius: var(--radius);
          border-bottom-right-radius: var(--radius);

          /* margin: 20px 0; */
          padding: 0.5rem 1rem;
          margin-bottom: 1.5rem;
          overflow: auto;
          font-size: 0.9rem;
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
          min-width: 100%;
        }

        /* .activeLink {
            padding-bottom: 16px;
            padding-top: 16px;
            border-bottom: 2px var(--main) dashed;
          } */
      `}
    />
    <SEO />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
