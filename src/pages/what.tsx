import React from 'react'
import Layout from '../components/layout'
import BackToHome from '../components/backToHome'

export default () => (
  <Layout
    title='What is this website? • Bartol Deak'
    url='/what/'
    isArticle={false}
  >
    <div className='infoWrapper'>
      <h1 className='whatTitle'>What is this website?</h1>
      <p>
        This website is my personal archive of useful things I learn daily. It
        is available publicly to help other folks because helping is nice and
        exciting!
      </p>
      <BackToHome />
    </div>
  </Layout>
)
