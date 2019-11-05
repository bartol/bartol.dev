require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Bartol's personal cyberspace`,
    description:
      'Personal cyberspace where you can find my thoughts and notes about web development. Updated daily.',
    siteUrl: 'https://bartol.dev',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-sass', // !remove
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss', // ???
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/articles`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-terminal-style',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              withWebp: true,
              wrapperStyle: 'margin: 1.25rem 0;',
              backgroundColor: '#1F2023',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {
              background: '#1F2023',
              scrollOffset: 0,
              margin: 0,
            },
          },
          {
            resolve: 'gatsby-remark-embed-video', // ???
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
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',
              className: 'autolink',
              maintainCase: false,
              offsetY: '20',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs', // refactor
            options: {
              aliases: {
                // terminal: 'bash'
              },
            },
          },
          'gatsby-remark-emoji', // ???
          'gatsby-remark-copy-linked-files', // ???
          'gatsby-remark-external-links',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Bartol's personal cyberspace`,
        short_name: 'Bartol',
        start_url: '/',
        background_color: '#1F2023',
        theme_color: '#1F2023',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
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
        color: 'hsla(190, 80%, 50%, 1)',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg', // !remove
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
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
            title: "Bartol's personal cyberspace RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: true,
        tailwind: true,
        ignore: ['/article.css', 'code.css'],
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
