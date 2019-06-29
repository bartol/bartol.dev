import React from 'react'
import Twemoji from 'react-twemoji'
import styled from '@emotion/styled'

class T extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span role="img" aria-label={this.props.alt}>
        <TwitterEmoji>{this.props.e}</TwitterEmoji>
      </span>
    )
  }
}

export default T

const TwitterEmoji = styled(Twemoji)`
  display: inline;
`
