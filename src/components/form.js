import React from 'react'
import styled from '@emotion/styled'

const Red = styled.div`
  color: red;
`

const Green = styled.div`
  color: green;
`

const Blue = styled.div`
  color: blue;
`

export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const inputs = document.querySelectorAll('.input-field')
    inputs.forEach(input => {
      if (input.value.trim() !== '') {
        input.classList.add('input-filled')
      }

      input.addEventListener('focus', () => {
        input.classList.add('input-filled')
      })

      input.addEventListener('blur', () => {
        if (input.value.trim() === '') input.classList.remove('input-filled')
      })
    })
  }

  render() {
    let email, name
    const submit = () =>
      email &&
      name &&
      email.value.indexOf('@') > -1 &&
      this.props.onValidated({
        EMAIL: email.value,
        NAME: name.value
      })

    return (
      <div>
        {this.props.status === 'sending' && <Blue>sending...</Blue>}
        {this.props.status === 'error' && (
          <Red dangerouslySetInnerHTML={{ __html: this.props.message }} />
        )}
        {this.props.status === 'success' && (
          <Green dangerouslySetInnerHTML={{ __html: this.props.message }} />
        )}

        <span className="input">
          <input
            ref={node => (name = node)}
            type="text"
            placeholder=""
            className="input-field"
            id="name"
          />
          <label className="input-label" for="name">
            <span className="input-label-content">First Name</span>
          </label>
          <svg
            className="graphic"
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
          </svg>
        </span>

        <span className="input">
          <input
            ref={node => (email = node)}
            type="email"
            placeholder=""
            className="input-field"
            id="email"
          />
          <label className="input-label" for="email">
            <span className="input-label-content">Email</span>
          </label>
          <svg
            className="graphic"
            width="300%"
            height="100%"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
          </svg>
        </span>

        <br />

        <button onClick={submit}>Submit</button>
      </div>
    )
  }
}
