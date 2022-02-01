module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-plugin-twind`,
      options: {
        config: `./twind.config.js`,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
