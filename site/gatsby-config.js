/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `TechNSketchXConf 2020`,
    description: `An amazing conference to bring together professional and aspriing technical sketch noters.`,
    author: `@scudella`,
    siteUrl: `https://monica.dev/gatsbyworkshop`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `jct`,
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
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
