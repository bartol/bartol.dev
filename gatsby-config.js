const replace = require('lodash.replace')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const postQuery = `{
  posts: allMdx(
    filter: { frontmatter: { published: { eq: true } } }
  ) {
    edges {
      node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            datetimestamp
              image {
              sharp: childImageSharp {
                fixed(width: 75, height: 75) {
                  src
                  srcSet
                  srcSetWebp
                  aspectRatio
                  base64
                  width
                  height
                }
              }
              extension
              publicURL
            }
          }
          timeToRead
          excerpt(pruneLength: 100000)
      }
    }
  }
}`

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => data.posts.edges.map(({ node }) => node), // optional
    settings: {},
  },
]

const dynamicPlugins = []
// pick data from 3 months ago
const startDate = new Date()
startDate.setMonth(startDate.getMonth() - 3)
if (
  process.env.GA_SERVICE_ACCOUNT
  && process.env.GA_SERVICE_ACCOUNT_KEY
  && process.env.GA_VIEW_ID
) {
  const googleApiKey = replace(
    process.env.GA_SERVICE_ACCOUNT_KEY,
    new RegExp('\\\\n', 'g'),
    '\n',
  )
  dynamicPlugins.push({
    resolve: 'gatsby-plugin-guess-js',
    options: {
      GAViewID: `${process.env.GA_VIEW_ID}`,
      jwt: {
        client_email: process.env.GA_SERVICE_ACCOUNT,
        private_key: googleApiKey,
      },
      period: {
        startDate,
        endDate: new Date(),
      },
    },
  })
}

module.exports = {
  siteMetadata: {
    defaultTitle: "Bartol's Coding Blog",
    title: "Bartol's Coding Blog",
    titleTemplate: "%s • Bartol's Coding Blog",
    defaultDescription:
      'Personal blog where you can find web development posts and tutorials. Updated weekly.',
    description:
      'Personal blog where you can find web development posts and tutorials. Updated weekly.',
    siteUrl: 'https://bartol.dev',
    defaultImage: '/social.png',
    twitterUsername: '@BartolDeak',
    facebookAppID: '370797287125807',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-force-trailing-slashes',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-images' },
          { resolve: 'gatsby-remark-prismjs' },
          { resolve: 'gatsby-remark-reading-time' },
          { resolve: 'gatsby-remark-smartypants' },
          { resolve: 'gatsby-remark-external-links' },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './posts/',
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'IBM Plex Sans',
            variants: ['400', '600'],
          },
          {
            family: 'IBM Plex Mono',
            variants: ['400'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://www.google.com',
          'https://marketingplatform.google.com',
          'https://www.google-analytics.com',
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: process.env.GA_TRACKING,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Bartol's Coding Blog",
        short_name: "Bartol's Blog",
        start_url: '/',
        background_color: '#121212',
        theme_color: '#1f1f1f',
        display: 'standalone',
        icon: 'static/logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bartol.dev/',
        sitemap: 'https://bartol.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#0e8fd5',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => allMdx.edges.map(edge => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
                {
                  allMdx(
                    limit: 1000,
                    sort: {
                      order: DESC,
                      fields: [frontmatter___date]
                    }
                  ) {
                    edges {
                      node {
                        frontmatter {
                          title
                          date
                          slug
                        }
                        excerpt
                        html
                      }
                    }
                  }
                }
              `,
            output: 'rss.xml',
          },
        ],
      },
    },
    // 'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ].concat(dynamicPlugins),
  // ],
}
