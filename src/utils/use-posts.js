import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            spoiler
            image {
              sharp: childImageSharp {
                fluid(duotone: { shadow: "#212121", highlight: "#299999" }) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    spoiler: post.frontmatter.spoiler,
    image: post.frontmatter.image,
    excerpt: post.excerpt
  }))
}

export default usePosts
