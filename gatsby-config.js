require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const postQuery = `{
  posts: allMdx(
    filter: { frontmatter: { published: { eq: true } } }
  ) {
    edges {
      node {
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
          }
          excerpt(pruneLength: 100000)
      }
    }
  }
}`

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(({ node }) => node), // optional
    settings: {}
  }
]

module.exports = {
  siteMetadata: {
    title: "Bartol's Blog",
    description: 'site description. add later '
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-images' },
          { resolve: 'gatsby-remark-prismjs' },
          { resolve: 'gatsby-remark-reading-time' }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts'
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000 // default: 1000
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static'
      }
    }
  ]
}
