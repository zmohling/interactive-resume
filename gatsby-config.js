module.exports = {
  siteMetadata: {
    title: `Zachary Mohling`,
    description:
        `My personal website and interactive résumé`,
    author: "Zachary Mohling",
    menuLinks: [
      {
        "name": "About",
        "link": "/"
      },
      {
        "name": "Education",
        "link": "/education"
      },
      {
        "name": "Experience",
        "link": "/experience"
      },
      {
        "name": "Projects",
        "link": "/projects"
      },
      {
        "name": "Contact",
        "link": "/contact"
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,  // This path is relative to the
                                             // root of the site.
      },
    },
    `gatsby-plugin-typescript`, `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline
    // functionality To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
