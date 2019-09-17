import React, { useState } from 'react'
import axios from 'axios'

const contact = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [toast, setToast] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setToast('Sending...')
    axios({
      method: 'post',
      url: 'https://api.bartol.dev/contact',
      data: {
        name,
        email,
        content,
      },
    })
      .then(res => {
        setToast(res.data.message)
        setEmail('')
        setName('')
        setContent('')
      })
      .catch(() => setToast('error'))
      // eslint-disable-next-line no-undef
      .finally(() => document.querySelector('.contactFormSubmit').blur())
  }

  return (
    <div className='contactFormWrapper'>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='contactFormHeader'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            aria-label='name'
            required
            className='contactFormInput contactFormName'
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
            className='contactFormInput contactFormEmail'
          />
        </div>
        <textarea
          rows='5'
          placeholder='Message...'
          value={content}
          onChange={e => setContent(e.target.value)}
          aria-label='message content'
          required
          className='contactFormInput contactFormContent'
        />
        <div className='contactFormFooter'>
          <button type='submit' className='contactFormSubmit'>
            Submit
          </button>
          <p className='contactFormToast'>
            {toast === 'error' ? (
              <>
                Hmm. Seems like some packets were lost in transit.
                <br />
                You can always contact me directly at{' '}
                <a
                  href='mailto:contact@bartol.dev'
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  className='textLink'
                >
                  contact@bartol.dev
                </a>
                .
              </>
            ) : (
              toast
            )}
          </p>
        </div>
      </form>
      <h3 className='contactMessage'>Get in touch with me</h3>
    </div>
  )
}

export default contact
