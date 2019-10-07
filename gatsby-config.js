/* eslint-disable camelcase */
const replace = require('lodash.replace')

require('dotenv').config()

const MAIN_COLOR = 'hsla(190, 80%, 50%, 1)'

const googleApiKey = replace(
  process.env.GA_SERVICE_ACCOUNT_KEY,
  new RegExp('\\\\n', 'g'),
  '\n'
)

const threeMonthsAgo = new Date()
threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3)

module.exports = {
  siteMetadata: {
    title: 'Bartol Deak',
    description:
      'Personal website where you can find web development articles. Updated daily.',
    siteUrl: 'https://bartol.dev',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/articles`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-code-language',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              showCaptions: true,
              wrapperStyle: 'margin: 1rem 0;',
              backgroundColor: '#212121',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {
              background: '#212121',
              scrollOffset: 0,
              margin: 0,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 700,
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
              className: 'header-autolink',
              maintainCase: false,
              offsetY: '30',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                // terminal: 'bash'
              },
            },
          },
          'gatsby-remark-emoji',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-external-links',
          'gatsby-remark-smartypants',
          'gatsby-remark-check-links',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bartol Deak',
        short_name: 'Bartol',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'standalone',
        icon: 'static/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING,
      },
    },
    {
      resolve: 'gatsby-plugin-guess-js',
      options: {
        GAViewID: process.env.GA_VIEW_ID,
        jwt: {
          client_email: process.env.GA_SERVICE_ACCOUNT,
          private_key: googleApiKey,
        },
        minimumThreshold: 0.03,
        period: {
          startDate: threeMonthsAgo,
          endDate: new Date(),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://bartol.dev',
          'https://www.google-analytics.com',
          'https://marketingplatform.google.com',
          'https://www.google.com',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: MAIN_COLOR,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return {
                  ...node.frontmatter,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                }
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    frontmatter {
                      title
                      date(formatString: "MMMM Do, YYYY")
                    }
                    fields {
                      slug
                    }
                    excerpt
                    html
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Bartol Deak's website RSS Feed",
          },
        ],
      },
    },
    'gatsby-plugin-accessibilityjs',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
}
