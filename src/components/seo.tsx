import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({
  title,
  description = 'Personal cyberspace where you can find my thoughts and notes about web development. Updated daily.',
  url = '/',
  image = '/social.png',
  isArticle = false,
}) => {
  return (
    <Helmet title={title} defer={false}>
      <html lang='en' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

      <meta charSet='utf-8' />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      <meta name='image' content={image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={`https://bartol.dev${url}`} />
      <meta name='twitter:creator' content='@BartolDeak' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      <meta property='og:url' content={`https://bartol.dev${url}`} />
      <meta property='og:type' content={isArticle ? 'article' : 'website'} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Helmet>
  )
}

export default SEO
