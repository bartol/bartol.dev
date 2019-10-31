import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const emojis = ['(>_<)', '(·.·)', 'ಠ_ಠ', '(⊙_☉)', '(~_~;)']

const current = Math.floor(new Date().getSeconds() / 12)

export default () => {
  return (
    <div className='container mx-auto'>
      <SEO title='Oops' url='/404/' isArticle={false} />
      <div className='ascii'>{emojis[current]}</div>
      <div className='notFoundMessage'>
        <h1>404</h1>
        <section>
          <h2>Seems like you are lost.</h2>
          <h2>
            Let me bring you <Link to='/'>home</Link>.
          </h2>
        </section>
      </div>
    </div>
  )
}
