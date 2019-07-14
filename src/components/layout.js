import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Header from './header'
import Footer from './footer'
import ScrollBack from './scroll-back'
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

// 0 0 3px rgba(0,0,0,0.3)

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;

          ::-moz-selection {
            /* Code for Firefox */
            background-color: var(--selection);
            color: var(--text);
          }

          ::selection {
            background-color: var(--selection);
            color: var(--text);
          }

          :focus {
            outline-color: var(--main);
            outline-style: dashed;
            outline-offset: 2px;
            outline-width: 2px;
          }
        }

        body {
          --bg: #f7f7f7;
          --nav: #1f1f1f;
          --main: #0c78b3;
          --heading: #222222;
          --text: #222222;
          --parameters: #626262;
          --line: #cfcfcf;
          --selection: rgba(12, 120, 179, 0.99);
          --shadow: 0 0 3px rgba(0, 0, 0, 0.3);
          --radius: 5px;
        }

        body.dark {
          --bg: #121212;
          --nav: #1f1f1f;
          --main: #0e8fd5;
          --heading: #e1e1e1;
          --text: #e1e1e1;
          --parameters: #a0a0a0;
          --line: #515151;
          --selection: rgba(14, 143, 213, 0.99);
          --shadow: 0 0 3px rgba(0, 0, 0, 0.3);
          --radius: 5px;
        }

        #___gatsby {
          min-height: 100%;
          min-width: 100%;
          /* margin-bottom: -50px; */
          background-color: var(--bg);
          position: relative;
          /* transition: color 0.2s ease-out, background 0.2s ease-out; */
        }

        html,
        body {
          scroll-behavior: smooth;
          margin: 0;
          color: var(--text); /* text color */
          height: 100%;
          width: 100%;

          /* font-family: 'Source Sans Pro', sans-serif; */
          font-family: 'IBM Plex Sans', sans-serif;
          -webkit-font-smoothing: antialiased;

          /* font-size: 20px; */
          @media (max-width: 320px) {
            font-size: 13px;
          }

          @media (min-width: 320px) {
            font-size: calc(13px + 5 * ((100vw - 320px) / (640 - 320)));
            /* font-size: calc(12px + 0.938vw); */
          }

          @media (min-width: 640px) {
            font-size: 18px;
          }

          /* font-size: calc(12px + 0.938vw); */

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
            /* font-size: 32px; */
            font-size: 1.778rem;
          }

          h2 {
            font-size: 1.556rem;
            /* font-size: 28px; */
            border-bottom: 1px solid var(--line);
            padding-bottom: 0.4rem;
            /* margin-bottom: 0.6rem; */
          }

          h3 {
            font-size: 1.333rem;
            /* font-size: 24px; */
          }

          h4 {
            font-size: 1.222rem;
            /* font-size: 22px; */
          }

          h5 {
            font-size: 1.111rem;
            /* font-size: 20px; */
          }

          h6 {
            font-size: 1rem;
            /* font-size: 18px; */
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
            color: var(--main);
            text-decoration: none;

            ::-moz-selection {
              text-decoration-color: var(--text);
            }

            ::selection {
              text-decoration-color: var(--text);
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

        .gatsby-highlight-code-line {
          background-color: #012a4a;
          display: block;
          border-left: 2px solid var(--main);
          /* border-right: 2px solid #011627; */
          /* border-bottom: 2px solid #011627; */
          margin-right: -1rem;
          margin-left: -1rem;
          padding-right: 1rem;
          padding-left: calc(1rem - 2px);
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
          padding: 0.5rem 1rem 1rem 1rem;
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

        p > code {
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius);
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
    <ScrollBack />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Layout
