module.exports = {
  siteTitle: 'פנזטי ליג - בלוג', // Navigation and Site Title
  siteTitleAlt: 'פנטזי פרמייר ליג - בלוג (ישראל)', // Alternative Site title for SEO
  siteTitleShort: 'פנזטי ליג', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'http://tabmixplus.org', // Domain of your site. No trailing slash!
  lang: 'he', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'בואו לבדוק את פנטזי ליג בלוג, האתר שיגלה לכם כל מה שאתם לא יודעים.',
  minibio: ``,
  author: guest
  organization: '',

  siteFBAppID: '', // Facebook App ID - Optional
  // userTwitter: '', // Twitter Username
  // ogSiteName: '', // Facebook Site Name
  ogLanguage: 'he',

  // Manifest and Progress color
  themeColor: '#4CE656',
  backgroundColor: '#575353',

  // Social component
  // twitter: 'https://twitter.com/????/',
  twitterHandle: '', // twitter Handle @USERNAME
  // github: 'https://github.com/????/',
};
