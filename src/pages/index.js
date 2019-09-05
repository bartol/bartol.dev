import React from 'react'
import Layout from '../components/layout'
import LastPosts from '../components/last-posts'
import PopularPosts from '../components/popular-posts'
import Newsletter from '../components/newsletter-card'

export default () => (
  <Layout>
    <h1>Bartol's Coding Blog</h1>
    <p>
      Hey! I'm Bartol Deak, High School student currently living in
{' '}
      <a
        href="https://www.google.com/maps/place/Zadar/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Zadar
      </a>
      ,
{' '}
      <a
        href="https://www.google.com/maps/place/Croatia/"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Croatia
      </a>
      . Started learning web development last year and these days I am writing
      blog posts about technologies, concepts and tools I learn.
    </p>
    <LastPosts />
    <PopularPosts />
    <Newsletter />
  </Layout>
)
