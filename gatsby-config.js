module.exports = {
  siteMetadata: {
    title: "Bartol's Blog",
    author: 'Bartol Deak',
    description:
      'Awesome personal blog where you can find everything technology related!',
    siteUrl: 'https://blog.bartol.dev/',
    social: {
      mail: 'contact@bartol.dev',
      twitter: 'BartolDeak',
      github: 'bartold3ak',
      linkedin: 'bartoldeak'
    }
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts/`,
        name: 'posts'
      }
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/posts/hr`,
    //     name: 'posts-hr'
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135944510-1'
      }
    },
    // 'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Bartol's Blog",
        short_name: 'Bartol',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#2664A3',
        // #26998E #26859E #2664A3
        display: 'minimal-ui'
        // icon: 'static/favicon.ico'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        useLangKeyLayout: false,
        prefixDefault: false
      }
    }
  ]
}
