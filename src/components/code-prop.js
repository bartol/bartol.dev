import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #011626;
  border-bottom: 2px solid #012a4a;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  color: #d6deeb;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  box-shadow: var(--shadow);
`

const Path = styled.div`
  padding-left: 1rem;
`

const Lang = styled.div`
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  padding: 0.5rem 1rem;
`

const Code = (props) => {
  const { path, lang } = props
  return (
    <Wrapper>
      <Path>{path}</Path>
      <Lang>{lang}</Lang>
    </Wrapper>
  )
}

export default Code
