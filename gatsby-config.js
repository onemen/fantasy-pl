const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'פנזטי ליג - בלוג',
    description: 'כל מה שיש לדעת על פנטזי פריימר ליג',
    author: guest
    keywords: [
      'fantasy premier league',
      'פנזטי ליג - בלוג',
      'fantasy football',
      'football',
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'פנטזי ליג בלוג',
        short_name: 'פנטזי ליג',
        description:
          'בואו לבדוק את פנטזי ליג בלוג, האתר שיגלה לכם כל מה שאתם לא יודעים',
        start_url: '/',
        lang: 'he',
        background_color: '#575353',
        theme_color: '#00CA6F',
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
