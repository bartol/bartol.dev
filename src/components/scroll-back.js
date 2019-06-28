import React, { useState, useEffect, Component } from 'react'
import styled from '@emotion/styled'

class ScrollBack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.unHide)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.unHide)
  }

  unHide = () => {
    // if (window.scrollY > window.innerHeight) {
    if (
      document.body.scrollTop > window.innerHeight ||
      document.documentElement.scrollTop > window.innerHeight
    ) {
      this.setState({ hidden: false })
    } else {
      this.setState({ hidden: true })
    }
  }

  handleClick = () => {
    // window.scrollTo(0, 0)
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  render() {
    const { hidden } = this.state

    return <Wrapper>{hidden ? '' : <Circle onClick={this.handleClick}>&uarr;</Circle>}</Wrapper>
  }
}

export default ScrollBack

const Wrapper = styled.div`
  position: fixed;
  right: 3vw;
  bottom: 5vh;
  -webkit-transform: translateZ(0);

  z-index: 200130;
`

const Circle = styled.button`
  width: 50px;
  height: 50px;
  background-color: var(--nav);
  border-radius: 50%;
  border: 0;
  box-shadow: var(--shadow);

  color: #a0a0a0;
  font-size: 28px;
  font-weight: 400;

  :focus {
    outline: 0;
    color: var(--main);
  }

  :active {
    color: var(--main);
  }
`
