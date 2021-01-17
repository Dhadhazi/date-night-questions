module.exports = {
  siteMetadata: {
    title: "Date Night Questions",
    description: "Out of ideas what to talk about? Here you can choose a category and get a lot of conversation starters!"
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
