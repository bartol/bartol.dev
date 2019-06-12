import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            tags
            image {
              sharp: childImageSharp {
                fluid(duotone: { shadow: "#212121", highlight: "#299999" }) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          timeToRead
          excerpt(pruneLength: 110)
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
