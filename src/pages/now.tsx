import React from 'react'
import Layout from '../components/layout'
import BackToHome from '../components/backToHome'

export default () => (
  <Layout
    title='What am I working on right now • Bartol Deak'
    url='/now/'
    isArticle={false}
  >
    <div className='infoWrapper'>
      <h1>Yet another 'now' page.</h1>
      <h2 className='nowSubTitle'>
        <em>But this one is mine.</em>
      </h2>
      <p>
        Yeah, I'm currently working on learning advanced React, apollo/graphql
        and serverless technologies.
      </p>
      <BackToHome />
    </div>
  </Layout>
)
