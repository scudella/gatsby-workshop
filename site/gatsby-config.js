/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `JavaScript Conf 2021`,
    description: `Next JS Conf`,
    author: `@scudella`,
    siteUrl: `https://susegana2.ddns.net/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jv-custom`,
        short_name: `jvc`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icons.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
