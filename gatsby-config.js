module.exports = {
  siteMetadata: {
    title: `kalinowski.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kalinowski.dev`,
        short_name: `kalinowski.dev`,
        start_url: `/`,
        background_color: `#37474f`,
        theme_color: `#37474f`,
        display: `minimal-ui`,
        icon: `./src/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Code:400,700'],
        },
      },
    },
    'gatsby-plugin-typescript',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-157539339-1',
      },
    },
  ],
}
