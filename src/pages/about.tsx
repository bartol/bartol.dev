import React from 'react'
import Layout from '../components/layout'
import BackToHome from '../components/backToHome'

export default () => (
  <Layout title='About me • Bartol Deak' url='/about/' isArticle={false}>
    <div className='infoWrapper'>
      <h1 className='aboutTitle'>About meeee</h1>
      <p>
        My name is Bartol Deak. I’m High School student currently living in{' '}
        <a
          href='https://www.google.com/maps/place/Zadar/'
          target='_blank'
          rel='nofollow noopener noreferrer'
          className='link'
        >
          Zadar
        </a>
        ,{' '}
        <a
          href='https://www.google.com/maps/place/Croatia/'
          target='_blank'
          rel='nofollow noopener noreferrer'
          className='link'
        >
          Croatia
        </a>
        . I started learning full stack web development last year and so far I’m
        enjoying it a lot. I value accessibility because making the web
        accessible for everyone is as valuable as making it fast and beautiful.
      </p>
      <BackToHome />
    </div>
  </Layout>
)
