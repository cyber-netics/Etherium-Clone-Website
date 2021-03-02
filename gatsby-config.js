const defaultLanguage = `en`
const siteUrl = `https://example.org`

module.exports = {
  siteMetadata: {
    // `title` & `description` pulls from respective ${lang}.json files in PageMetadata.js
    title: `example.org`,
    description: `Tech Hub simple website starter with layout`,
    url: siteUrl,
    siteUrl,
    author: `@edo92`,
    defaultLanguage,
    editContentUrl: `https://github.com/cyber-netics/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public"],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // Needed for `gatsby-image`
    `gatsby-plugin-sharp`,
    // CSS in JS
    `gatsby-plugin-styled-components`,
    // Source assets
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [
          `shorthands`,
          `currying`,
          `caching`,
          `collections`,
          `exotics`,
          `guards`,
          `metadata`,
          `deburring`,
          `unicode`,
          `chaining`,
          `momoizing`,
          `coercions`,
          `flattening`,
          `paths`,
          `placeholders`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    // CSS in JS
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes
            .filter(node => {
              // Filter out 404 pages
              return !node.path.includes("404")
            })
            .map(node => {
              const path = node.path
              const url = `${site.siteMetadata.siteUrl}${path}`
              const changefreq = path.includes(`/${defaultLanguage}/`)
                ? `weekly`
                : `monthly`
              const priority = path.includes(`/${defaultLanguage}/`) ? 0.7 : 0.5
              return {
                url,
                changefreq,
                priority,
              }
            }),
      },
    },
  ],
}
