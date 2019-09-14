import React from 'react'
import { Helmet } from 'react-helmet'
import 'what-input'
import Footer from './footer'
import '../styles/main.scss'

interface Props {
  title: string
  children: object
  isArticle: boolean
  url: string
}

const Layout: React.FC<Props> = ({
  children,
  title,
  isArticle = false,
  url = '/'
}) => {
  const description =
    'Personal website where you can find web development articles. Updated daily.'

  return (
    <>
      <Helmet title={title} defer={false}>
        <html lang='en' />
        <link rel='canonical' href='https://bartol.dev/' />

        <meta charSet='utf-8' />
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='image' content='/images/social.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={`https://bartol.dev${url}`} />
        <meta name='twitter:creator' content='@BartolDeak' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='/images/social.png' />

        <meta property='og:url' content={`https://bartol.dev${url}`} />
        <meta property='og:type' content={isArticle ? 'article' : 'website'} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/images/social.png' />
      </Helmet>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
