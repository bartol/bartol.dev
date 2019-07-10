import React from 'react'
import styled from '@emotion/styled'

const NoHitsWrapper = styled.div`
  /* background-color: red; */
  z-index: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 20%;
  height: fit-content;
  max-width: 90vw;
  width: 640px;
`

const Ascii = styled.div`
  /* background-color: rebeccapurple; */
  max-width: 100%;
  line-height: 1.3;
  user-select: none;
  /* margin-top: 15vh; */
  font-size: 6rem;
  text-align: center;

  color: var(--line);
  font-family: 'IBM Plex Mono', monospace;

  @media (max-width: 700px) {
    font-size: 5.55rem;
  }

  @media (max-width: 400px) {
    font-size: 4.44rem;
  }
`

const Text = styled.p`
  text-align: center;
  color: var(--parameters);
  font-size: 1.222rem;

  @media (max-width: 460px) {
    font-size: 1.15rem;
  }

  @media (max-width: 400px) {
    font-size: 1.05rem;
  }
`
// class NoHits extends Component {
//   constructor(props) {
//     super(props)
//     this.enableMessage = this.enableMessage.bind(this)

//     this.state = {
//       displayMessage: false,
//     }

//     this.timer = setTimeout(this.enableMessage, 25)
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timer)
//   }

//   enableMessage() {
//     this.setState({ displayMessage: true })
//   }

//   render() {
//     const { displayMessage } = this.state

//     if (!displayMessage) {
//       return null
//     }

//     return (
//       <NoHitsWrapper>
//         <Ascii>(#^.^#)</Ascii>
//         <Text>Please wait for posts to load...</Text>
//       </NoHitsWrapper>
//     )
//     // return (
//     //   <NoHitsWrapper>
//     //     <Div className="spinner">
//     //       <div className="dot1" />
//     //       <div className="dot2" />
//     //     </Div>
//     //   </NoHitsWrapper>
//     // )
//   }
// }

const NoHits = () => (
  <NoHitsWrapper>
    <Ascii>(#^.^#)</Ascii>
    <Text>Sorry. No posts were found.</Text>
  </NoHitsWrapper>
)

export default NoHits
