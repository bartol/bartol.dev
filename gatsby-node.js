const { google } = require('googleapis')
const replace = require('lodash.replace')

require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: '.env.production',
})

let data

function getPopularPosts() {
  const VIEW_ID = 'ga:196730733'

  // fix for failing build on the cloud
  const googleApiKey = replace(process.env.GA_SERVICE_ACCOUNT_KEY, new RegExp('\\\\n', 'g'), '\n')

  const jwtClient = new google.auth.JWT(
    process.env.GA_SERVICE_ACCOUNT,
    null,
    googleApiKey,
    ['https://www.googleapis.com/auth/analytics.readonly'],
    null,
  )

  return new Promise((resolve, reject) => {
    // Do async job
    jwtClient.authorize((err, tokens) => {
      if (err) {
        console.log(err)
        return
      }
      const analytics = google.analytics('v3')

      analytics.data.ga.get(
        {
          auth: jwtClient,
          ids: VIEW_ID,
          metrics: 'ga:uniquePageviews',
          dimensions: 'ga:pagePath',
          'start-date': '2019-01-01', // or 30daysAgo
          'end-date': 'today',
          sort: '-ga:uniquePageviews',
          'max-results': 5,
          filters: 'ga:pagePath=~/blog/.*/',
        },
        (err, response) => {
          if (err) {
            reject(err)
          }

          // console.log(JSON.stringify(response, null, 4))
          console.log(JSON.stringify(response.data.rows, null, 4))

          data = response.data.rows

          resolve(data)
        },
      )
    })
  })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  await getPopularPosts()

  const myData = {
    popularPosts: data,
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId('popular-posts'),
    parent: null,
    children: [],
    internal: {
      type: 'googleApiData',
      mediaType: 'text/html',
      content: nodeContent,
      contentDigest: createContentDigest(myData),
    },
  }

  const node = Object.assign({}, myData, nodeMeta)

  createNode(node)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { published: { eq: true } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   createNodeField({
//     node,
//     name: 'popularPosts',
//     value: data,
//   })
// }
