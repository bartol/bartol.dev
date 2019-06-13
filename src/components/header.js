import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
// import { Link } from 'gatsby'
// import { Image } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const NavLink = styled.a`
  color: #f7f7f7;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  margin: 0 0.75rem 0 0;
  padding: 0.25rem 0;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #f7f7f7;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Wrapper = styled.div`
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 99;
  background: var(--main);
  /* border-bottom: 1px solid #17b897; */
  display: flex;
  justify-content: center;
  /* padding: 1rem calc((100vw - 640px - 0.5rem) / 2); */
`

const HeaderBox = styled.header`
  max-width: 90vw;
  width: 640px;
  display: flex;
  /* padding: 1rem 0; */
  justify-content: space-between;
  align-items: center;
`

const NavBox = styled.nav`
  margin-top: 0;
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
  </Wrapper>
)

export default Header
