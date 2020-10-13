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
  BLOG_TESTING,
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
      'פנטזי ליג - בלוג',
      'fantasy football',
      'football',
    ],
    canonicalUrl: siteUrl,
    image: config.siteLogo,
    author: {
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
        path: BLOG_TESTING
          ? here('__test_content__', 'content', 'blog')
          : here('content', 'blog'),
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
    {
      resolve: 'gatsby-plugin-preload-fonts',
      options: {
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet-async',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    'gatsby-plugin-workerize-loader',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt: true,
        excerpt_separator: `<!-- end -->`,
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-autolink-headers',
            icon: `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>`,
            enableCustomId: true,
          },
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
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        lang: config.lang,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
        omitGoogleFont: true,
      },
    },
    /**
     *  TODO:
     *
     *  enable when we get a domain name
     *
     *  pnpm install gatsby-plugin-robots-txt
     *
     {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{userAgent: '*'}],
          },
          'branch-deploy': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{userAgent: '*', disallow: ['/']}],
            sitemap: null,
            host: null,
          },
        },
      },
    },
     */
    'gatsby-plugin-sitemap',
  ],
};
