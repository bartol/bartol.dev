const queryString = require('querystring')
const dateFormat = require('dateformat')
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const backgroundColors = require('./src/backgroundColors.json')

exports.onCreateNode = async ({
  node,
  actions,
  createNodeId,
  cache,
  store,
}) => {
  const { createNode, createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const { title, tags, date, changelog } = node.frontmatter

    const slug = title
      .toLowerCase() // convert to lower case
      .replace(/[^\w\s]/g, '') // remove everything that isn't letter or number
      .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, '-') // replace all spaces and low dash

    const timestamp = new Date(node.frontmatter.date).getTime() / 1000

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

    const imageQueryString = queryString.stringify({
      title,
      published: dateFormat(date, 'mmmm dS, yyyy'),
      background: backgroundColors[tags[0]],
      updated: changelog
        ? dateFormat(changelog[changelog.length - 1].date, 'mmmm dS, yyyy')
        : null,
      image: `https://bartol.dev/images/${tags[0]}.svg`,
    })

    const url = `https://thumbnails.bartol.dev/img?${imageQueryString}`

    const fileNode = await createRemoteFileNode({
      parentNodeId: node.id,
      url,
      createNode,
      createNodeId,
      cache,
      store,
    })

    if (fileNode) {
      // eslint-disable-next-line no-param-reassign
      node.thumbnail___NODE = fileNode.id
    }
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
