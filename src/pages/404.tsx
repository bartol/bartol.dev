import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import './404.css'

export default () => {
  return (
    <div className='container mx-auto h-screen flex flex-col justify-center items-center -mt-12'>
      <SEO title='Oops' url='/404/' isArticle={false} />
      <div className='ascii leading-snug font-mono hover:text-main transition-slow'>
        (·.·)
      </div>
      <div className='flex mt-1'>
        <h1 className='text-5xl leading-none mr-3'>404</h1>
        <section>
          <h2>Seems like you are lost.</h2>
          <h2>
            Let me bring you{' '}
            <Link to='/' className='link'>
              home
            </Link>
            .
          </h2>
        </section>
      </div>
    </div>
  )
}
