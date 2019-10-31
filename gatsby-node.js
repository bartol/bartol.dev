exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = node.frontmatter.title
      .toLowerCase() // convert to lower case
      .replace(/[^\w\s]/g, '') // remove everything that isn't letter or number
      .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, '-') // replace all spaces and low dash

    const timestamp = new Date(node.frontmatter.date).getTime() / 1000

    const edit = node.fileAbsolutePath
      .split('/')
      .splice(-3, 3)
      .join('/')

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    createNodeField({
      node,
      name: 'timestamp',
      value: timestamp,
    })

    createNodeField({
      node,
      name: 'edit',
      value: edit,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const query = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  if (query.errors) {
    reporter.panic('failed to create pages', query.errors)
  }

  const articles = query.data.allMarkdownRemark.nodes

  articles.forEach(article => {
    actions.createPage({
      path: `/${article.fields.slug}/`,
      component: require.resolve('./src/components/article/article.tsx'),
      context: {
        slug: article.fields.slug,
      },
    })
  })
}
