import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Ascii = styled.div`
  width: 100%;
  margin-top: 15vh;
  font-size: 8rem;
  text-align: center;
  color: var(--line);
  font-family: 'IBM Plex Mono', monospace;

  @media (max-width: 600px) {
    font-size: 100px;
  }

  @media (max-width: 400px) {
    font-size: 90px;
  }
`

const Err = styled.div`
  /* font-family: 'IBM Plex Mono', monospace; */
  font-size: 3.5rem;
  line-height: 1;
  padding-right: 1rem;
  font-weight: 600;
`

const Message = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 1rem auto 0;
`

// const VerticalyCenter = styled.div`
//   height: calc(100vh - 56px - 1rem - 4rem);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: -5rem;
// `

const emojis = ['(>_<)', '(·.·)', 'ಠ_ಠ', '(⊙_☉)']

export default () => {
  return (
    <Layout>
      <Ascii>{emojis[Math.floor(Math.random() * emojis.length)]}</Ascii>
      <Message>
        <Err>404</Err>
        <div>
          Page was not found.
          <br />
          Go back to <Link to="/">Home</Link>.
        </div>
      </Message>
    </Layout>
  )
}

// (>_<) (·.·) ಠ_ಠ (⊙_☉)
