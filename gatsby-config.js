const config = require('./config/website');
const path = require('path');

const here = (...p) => path.join(__dirname, ...p);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  ROOT_URL: NETLIFY_SITE_URL = config.siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: [
      'fantasy premier league',
      'פנזטי ליג - בלוג',
      'fantasy football',
      'football',
    ],
    canonicalUrl: siteUrl,
    image: config.siteLogo,
    author: guest
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: config.siteFBAppID,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: here('content', 'blog'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: here('src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: here('src'),
        name: 'src',
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
        excerpt: true,
        excerpt_separator: `<!-- end -->`,
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
        icon: 'src/images/icon.png',
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
