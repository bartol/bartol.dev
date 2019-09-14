import React, { useState } from 'react'
import axios from 'axios'

const newsletter = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [toast, setToast] = useState('Unsubscribe at any time.')

  const handleSubmit = e => {
    e.preventDefault()
    setToast('Sending...')
    axios({
      method: 'post',
      url: 'https://api.bartol.dev/newsletter/subscribe',
      data: {
        email,
        name
      }
    })
      .then(res => {
        setToast(res.data.message)
        setEmail('')
        setName('')
      })
      .catch(() => setToast('There was problem.'))
      // eslint-disable-next-line no-undef
      .finally(() => document.querySelector('.newsletterFormSubmit').blur())
  }

  return (
    <div className='newsletterWrapper'>
      <form className='newsletterFormWrapper' onSubmit={e => handleSubmit(e)}>
        <div className='newsletterMessageWrapper'>
          <p className='newsletterMessageText'>
            I'm currently working on Serverless eCommerce project and
            documenting my journey every day. Subscribe to newsletter and stay
            in the loop!
          </p>
        </div>
        <div className='newsletterForm'>
          <div>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={e => setName(e.target.value)}
              aria-label='name'
              required
              className='newsletterFormName'
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
              title='Please enter valid email.'
              aria-label='email'
              required
              className='newsletterFormEmail'
            />
            <button type='submit' className='newsletterFormSubmit'>
              Submit
            </button>
          </div>
          <p className='newsletterFormToast'>{toast}</p>
        </div>
      </form>
      <h3 className='newsletterMessageHeading'>Join the newsletter</h3>
    </div>
  )
}

export default newsletter
