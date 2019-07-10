import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Wrapper = styled.footer`
  /* background-color: var(--bg); */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`

const FooterBox = styled.div`
  max-width: 90vw;
  width: 630px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  /* align-items: flex-start; */
  align-self: center;

  a {
    color: var(--main);
    font-size: 0.9rem;

    @media (max-width: 525px) {
      font-size: 1.05rem;
    }
  }
`

const Copyright = styled.p`
  color: var(--parameters);
  padding-top: 0.4rem;
  font-size: 12px;
  line-height: 1.1;
  @media (max-width: 525px) {
    display: flex;
    flex-direction: column;
  }
`

const Footer = () => (
  <Wrapper>
    <FooterBox>
      <div
        css={css`
          margin-left: 2px;
          @media (max-width: 400px) {
            display: flex;
            flex-direction: column;
            align-items: center;

            /* > *:last-of-type {
              margin-top: 0.9rem;
            } */
          }
        `}
      >
        <a href="https://github.com/bartold3ak/" target="_blank" rel="nofollow noopener noreferrer">
          Github
        </a>
        <a
          href="https://twitter.com/BartolDeak/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          css={css`
            margin-left: 1rem;

            @media (max-width: 400px) {
              margin-left: 0;
            }
          `}
        >
          Twitter
        </a>
      </div>
      <Link
        to="/license/"
        css={css`
          text-decoration: none;
          :focus {
            outline: 0;
          }
        `}
      >
        <Copyright>
          <span>&copy; 2019 Bartol Deak. </span>
          <span>All rights reserved.</span>
        </Copyright>
      </Link>
      <div
        css={css`
          margin-right: 2px;
          @media (max-width: 400px) {
            display: flex;
            flex-direction: column;
            align-items: center;

            /* > *:last-of-type {
              margin-top: 0.9rem;
            } */
          }
        `}
      >
        <Link
          to="/acknowledgements/"
          css={css`
            margin-right: 1rem;

            @media (max-width: 400px) {
              margin-right: 0;
            }
          `}
        >
          thank you
        </Link>
        <a href="/rss.xml" target="_blank" rel="nofollow noopener noreferrer">
          RSS
        </a>
      </div>
    </FooterBox>
  </Wrapper>
)

export default Footer
