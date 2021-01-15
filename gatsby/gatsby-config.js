module.exports = {
  siteMetadata: {
    title: "Date Night Questions",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "cp9luqzc",
        dataset: "production",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
