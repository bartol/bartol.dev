import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            description
            langKey
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
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
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    description: post.frontmatter.description,
    image: post.frontmatter.image,
    langKey: post.frontmatter.langKey,
    excerpt: post.excerpt
  }))
}

export default usePosts

// duotone: { shadow: "#2664A3", highlight: "#26998E" }
