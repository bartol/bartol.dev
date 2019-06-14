import React from 'react'
import Layout from '../components/layout'
import usePosts from '../utils/use-posts'
import PostPreview from '../components/post-preview'
// import Search from '../components/Search'

export default () => {
  const posts = usePosts()

  return (
    <Layout>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
