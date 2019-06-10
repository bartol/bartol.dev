import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import usePosts from '../utils/use-posts'
import PostPreview from '../components/post-preview'

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Hello...</h1>
      <p>...world!</p>
      <Link to="/about/">Learn more about me</Link>
      <h2>Read my blog. Just do it.</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
