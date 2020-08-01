/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `cassweb`,
    description: `Cassidy’s Web Presence`,
    author: `@heycassidy`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "IBM Plex Sans",
              variants: ["400", "400i", "600", "700"],
            },
          ],
        },
      },
    },
  ],
}
