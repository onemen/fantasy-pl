const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'פנזטי ליג - בלוג',
    description: 'כל מה שיש לדעת על פנטזי פריימר ליג',
    author: guest
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-pnpm',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
  ],
};
