const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-pnpm',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
