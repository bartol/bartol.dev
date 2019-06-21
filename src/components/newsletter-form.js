/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled from '@emotion/styled'

const Message = styled.div`
  color: var(--main);
  font-size: 12px;
  line-height: 1.15;
  padding-left: 1px;
`

const DefaultMessage = styled.div`
  color: #a0a0a0;
  font-size: 12px;
  line-height: 1.15;
  padding-left: 1px;
`

const MessageBox = styled.div`
  margin-top: 0.5rem;
  height: 2.5rem;
  /* background-color: rebeccapurple; */
  overflow: hidden;
`

const InputBox = styled.input`
  -webkit-appearance: none;
  background-color: var(--nav);
  width: 175px;
  padding: 8px 8px 6px 8px;
  margin-bottom: 1rem;
  font-family: 'IBM Plex Sans', sans-serif !important;
  font-size: 0.8rem;
  border: 2px solid #a0a0a0;
  /* border: none; */
  border-radius: var(--radius);
  color: #e1e1e1;

  position: relative;

  :focus {
    border-color: var(--main);
    outline: none;
    /* background-color: var(--bg); */
  }

  :focus .input {
    border-color: var(--main);
  }

  /* :focus:invalid {
    border-color: red;
    outline: none;
  } */

  ::placeholder {
    color: #a0a0a0;
  }
`

const ButtonBox = styled.button`
  -webkit-appearance: none;
  background-color: var(--nav);
  width: 100px;
  height: calc(0.8rem * 1.15 + 8px + 8px);
  padding: 6px 8px;
  font-family: 'IBM Plex Sans', sans-serif !important;
  font-size: 0.8rem;
  border: 2px solid #a0a0a0;
  border-radius: var(--radius);
  color: #a0a0a0;
  outline: none;

  /* :hover {
    border-color: var(--main);
  } */

  :active {
    color: var(--main);
    border-color: var(--main);
  }
`

export default class Form extends React.Component {
  render() {
    let email
    let name
    const submit = () => email
      && name
      && email.value.indexOf('@') > -1
      && this.props.onValidated({
        EMAIL: email.value,
        NAME: name.value,
      })

    return (
      <div>
        {/* <div className="input"> */}

        <InputBox
          ref={node => (name = node)}
          type="text"
          placeholder="First Name (Optional)"
          id="name"
          aria-label="Your First Name (Optional)"
        />
        {/* </div> */}
        {/* <div className="input"> */}

        <InputBox
          ref={node => (email = node)}
          type="email"
          placeholder="Email"
          name="email"
          required
          aria-label="Your email address"
        />
        {/* </div> */}

        <ButtonBox onClick={submit}>Submit</ButtonBox>
        <MessageBox>
          {this.props.status !== 'sending'
            && this.props.status !== 'error'
            && this.props.status !== 'success' && (
              <DefaultMessage>Unsubscribe at any time.</DefaultMessage>
          )}
          {this.props.status === 'sending' && <Message>sending...</Message>}
          {this.props.status === 'error' && (
            <Message dangerouslySetInnerHTML={{ __html: this.props.message }} />
          )}
          {this.props.status === 'success' && (
            <Message dangerouslySetInnerHTML={{ __html: this.props.message }} />
          )}
        </MessageBox>
      </div>
    )
  }
}
