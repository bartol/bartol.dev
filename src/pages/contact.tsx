import React, { useState } from 'react'
import Collapse from '@kunukn/react-collapse'
import Layout from '../components/layout'
import BackToHome from '../components/backToHome'
import Contact from '../components/contact'
import Newsletter from '../components/newsletter'

export default () => {
  const [contact, setContact] = useState(false)
  const [newsletter, setNewsletter] = useState(false)

  return (
    <Layout title='Contact me • Bartol Deak' url='/contact/' isArticle={false}>
      <div className='infoWrapper'>
        <h1 className='contactTitle'>Contact meeee</h1>
        <ul className='contactList'>
          <li>
            email me something nice:{' '}
            <a
              href='mailto:contact@bartol.dev'
              target='_blank'
              rel='nofollow noopener noreferrer'
              className='link'
            >
              contact@bartol.dev
            </a>
          </li>
          <li>
            view software I've open sourced on{' '}
            <a
              href='https://github.com/bartol'
              target='_blank'
              rel='nofollow noopener noreferrer'
              className='link'
            >
              GitHub
            </a>
          </li>
        </ul>

        <button type='button' onClick={() => setContact(!contact)}>
          Send me a message
        </button>
        <Collapse isOpen={contact}>
          <Contact />
        </Collapse>
        <button type='button' onClick={() => setNewsletter(!newsletter)}>
          Subscribe to my weekly newsletter
        </button>
        <Collapse isOpen={newsletter}>
          <Newsletter />
        </Collapse>
        <BackToHome />
      </div>
    </Layout>
  )
}
