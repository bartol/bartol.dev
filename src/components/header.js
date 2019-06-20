import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import { Link } from 'gatsby'
// import { Image } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import Scroll from './scroll'

const regex = /\/blog\/..*/

const NavLink = styled(Link)`
  color: #e1e1e1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 0 1rem 0 0;
  /* padding: 0.25rem 0; */
  text-decoration: none;

  &.current-page {
    color: var(--main);
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Wrapper = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
  /* background: #1f1f1f; */
  background: var(--nav);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const HeaderBox = styled.header`
  margin-top: 4.5px;
  max-width: 90vw;
  width: 630px;
  display: flex;
  height: 96.67%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`

const NavBox = styled.nav`
  display: flex;
  align-items: center;
`

const B = styled(Link)`
  height: 34px;
  width: 30px;
  display: flex;
  justify-content: flex-start;
  margin-left: -2px;
  & svg {
    height: 100%;
    width: 30px;
  }
`

const Switch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 30px;
  & input {
    display: none;
  }
`

const NotScroll = styled.div`
  width: 100%;
  height: 3.33%;
  background: var(--nav);
`

const Header = () => (
  <Wrapper>
    <HeaderBox>
      <B to="/">
        <svg
          width="132"
          height="204"
          viewBox="0 0 132 204"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="logosvg"
          role="img"
        >
          <title id="logosvg">Logo</title>
          <g stroke="#e1e1e1">
            <path
              d="M52.5 8.1a43.4 43.4 0 0 1 38.3 23.2 42 42 0 0 1-3.5 44.3"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M76.5 101.2a48.5 48.5 0 0 1 44.3 29.3 47 47 0 0 1-26 62c-5.8 2.4-12 3.6-18.3 3.6"
              strokeWidth="14"
            />
            <path
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.1 8.1L7 196M8 8h42.6M8 196l67.5.1"
            />
            <g strokeLinecap="round" strokeLinejoin="round">
              <path
                transform="matrix(.71062 .70358 -.71062 .70358 27 103)"
                strokeWidth="10"
                d="M5-5h24.8"
              />
              <path
                transform="scale(1.00496 .99501) rotate(-45 146.1 12.7)"
                strokeWidth="10"
                d="M5-5h24.8"
              />
              <path strokeWidth="14" d="M35.2 101.1h41" />
            </g>
          </g>
        </svg>
      </B>
      <NavBox>
        <NavLink to="/blog/" activeClassName="current-page">
          Posts
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <NavLink to="/contact/" activeClassName="current-page">
          Contact
        </NavLink>
      </NavBox>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Switch>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            {theme === 'dark' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="28px"
                height="28px"
                css={css`
                  margin-top: 3px;
                  -ms-transform: rotate(360deg);
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
                `}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#FFAC33"
                  d="M16 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zm18 14s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2h2zM4 16s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828 2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z"
                />
                <circle fill="#FFAC33" cx="18" cy="18" r="10" />
              </svg>
            )}
            {theme === 'light' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="28px"
                height="28px"
                css={css`
                  margin-top: 3px;
                  -ms-transform: rotate(360deg);
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
                `}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#FFD983"
                  d="M30.312.776C32 19 20 32 .776 30.312c8.199 7.717 21.091 7.588 29.107-.429C37.9 21.867 38.03 8.975 30.312.776z"
                />
                <path
                  d="M30.705 15.915a1.163 1.163 0 1 0 1.643 1.641 1.163 1.163 0 0 0-1.643-1.641zm-16.022 14.38a1.74 1.74 0 0 0 0 2.465 1.742 1.742 0 1 0 0-2.465zm13.968-2.147a2.904 2.904 0 0 1-4.108 0 2.902 2.902 0 0 1 0-4.107 2.902 2.902 0 0 1 4.108 0 2.902 2.902 0 0 1 0 4.107z"
                  fill="#FFCC4D"
                />
              </svg>
            )}
          </Switch>
        )}
      </ThemeToggler>
    </HeaderBox>
    <Location>
      {({ location }) => {
        if (/\/blog\/..*/.test(location.pathname)) {
          return <Scroll />
        }
        return <NotScroll />
      }}
    </Location>
  </Wrapper>
)

export default Header
