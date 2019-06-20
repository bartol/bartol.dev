import React from 'react'
import styled from '@emotion/styled'

const ProgressContainer = styled.div`
  width: 100%;
  height: 3.33%;
  /* background: #1f1f1f; */
  background: var(--nav);
`

const ProgressBar = styled.div`
  height: 100%;
  background: #f35627;
  width: 0%;
`

export default class Scroll extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = ev => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    let scrolled = (winScroll / height) * 100
    document.getElementById('progressbar').style.width = scrolled + '%'
  }

  render() {
    return (
      <ProgressContainer>
        <ProgressBar id="progressbar" />
      </ProgressContainer>
    )
  }
}
