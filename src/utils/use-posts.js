import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          frontmatter: { published: { eq: true }, langKey: { eq: "en" } }
        }
      ) {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            tags
            published
            image {
              sharp: childImageSharp {
                fluid(duotone: { shadow: "#222222", highlight: "#089a82" }) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          timeToRead
          excerpt(pruneLength: 90)
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    tags: post.frontmatter.tags,
    image: post.frontmatter.image,
    timeToRead: post.timeToRead,
    excerpt: post.excerpt
  }))
}

export default usePosts
