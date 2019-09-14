const getPopularPages = require('./src/utils/getPopularPages')

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions

  const data = {
    popularPages: await getPopularPages().then(res => res)
  }

  const meta = {
    id: createNodeId('popularPages'),
    parent: null,
    children: [],
    internal: {
      type: 'googleApiData',
      mediaType: 'text/html',
      content: JSON.stringify(data),
      contentDigest: createContentDigest(data)
    }
  }

  createNode({ ...data, ...meta })
}

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

    const views = await getPopularPages().then(res =>
      res.data.rows
        .filter(r => r[0].includes(slug))
        .reduce((a, b) => {
          return a + parseInt(b[1], 10)
        }, 0)
    )

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    createNodeField({
      node,
      name: 'timestamp',
      value: timestamp
    })

    createNodeField({
      node,
      name: 'edit',
      value: edit
    })

    createNodeField({
      node,
      name: 'views',
      value: views
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
      component: require.resolve('./src/templates/Article.tsx'),
      context: {
        slug: article.fields.slug
      }
    })
  })
}
