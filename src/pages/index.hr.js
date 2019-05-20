import React from 'react'
import Layout from '../components/layout'
import usePosts from '../utils/use-posts'
import PostPreview from '../components/post-preview'
import { Link } from 'gatsby'

export default () => {
  const posts = usePosts()
  return (
    <>
      <Layout>
        <h2>Citaj moj blog</h2>
        <Link to="/hr/">HRV</Link>
        <Link to="/">ENG</Link>
        {posts.map(post => {
          if (post.langKey === 'hr') {
            return <PostPreview key={post.slug} post={post} />
          }
          return null
        })}
      </Layout>
    </>
  )
}
