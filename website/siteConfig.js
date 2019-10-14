// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: '',
    pinned: true,
  },
]

const siteConfig = {
  title: 'AiTmed Relay', // Title for your website.
  tagline: 'A Desktop Software Application for AiTmed 2.0 (internal use)',
  url: 'https://gitlab.aitmed.io', // Your website URL
  baseUrl: '/aitmed-relay/', // Base URL for your project */
  // Used for publishing and more
  projectName: 'aitmed-relay',
  organizationName: 'AiTmed',
  headerLinks: [
    { doc: 'docs', label: 'Docs' },
    { href: 'https://testapi.aitmed.com/relay', label: 'Download' },
    { doc: 'about', label: 'About' },
  ],
  users,
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: '#3c4a58',
    secondaryColor: '#292743',
  },
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} AiTmed`,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
}

module.exports = siteConfig
