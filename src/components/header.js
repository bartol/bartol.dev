import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import { Link } from 'gatsby'
// import { Image } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Scroll from './scroll'

const NavLink = styled.a`
  color: #f7f7f7;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.1;
  margin: 0 0.75rem 0 0;
  /* padding: 0.25rem 0; */
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #f7f7f7;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Wrapper = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 99;
  background: var(--main);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeaderBox = styled.header`
  margin-top: 4.5px;
  max-width: 90vw;
  width: 640px;
  display: flex;
  height: 92.5%;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`

const NavBox = styled.nav`
  display: flex;
  align-items: center;
`

const B = styled.a`
  opacity: 0;
  height: 34px;
  width: 60px;
`

const Switch = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
  & input {
    display: none;
  }
`

const Slider = styled.div`
  background-color: var(--bg);
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    background-color: var(--main);
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    border-radius: 50%;
  }
`

// const ProgressContainer = styled.div`
//   width: 100%;
//   height: 7.5%;
//   background: var(--main);
// `

// const ProgressBar = styled.div`
//   height: 100%;
//   background: #f7f7f7;
//   width: 0%;
// `

// window.onscroll = function() {
//   scrollBar()
// }

// function scrollBar() {
//   let winScroll = document.body.scrollTop || document.documentElement.scrollTop
//   let height =
//     document.documentElement.scrollHeight -
//     document.documentElement.clientHeight
//   let scrolled = (winScroll / height) * 100
//   document.getElementById('progressbar').style.width = scrolled + '%'
// }

const Header = () => (
  <Wrapper>
    <HeaderBox>
      <B />
      <NavBox>
        <NavLink href="https://bartol.dev/">Portfolio</NavLink>
        <NavLink href="https://bartol.dev/about/">About</NavLink>
        <NavLink href="https://bartol.dev/contact/">Contact</NavLink>
      </NavBox>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <Switch>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
              css={css`
                &:checked + .slider {
                  background-color: var(--bg);
                }

                &:checked + .slider:before {
                  transform: translateX(26px);
                  /* background-color: red; */
                }
              `}
            />{' '}
            <Slider className="slider" />
          </Switch>
        )}
      </ThemeToggler>
    </HeaderBox>
    <Scroll />
  </Wrapper>
)

export default Header
