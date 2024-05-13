// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const path = require('path'); // Added to use path.resolve in the custom plugin
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kershia Mukoro',
  tagline: 'Technical Writer',
  favicon: 'img/portfolio.svg',

  url: 'https://kershiamukoro.github.io',
  baseUrl: '/KershiaMukoro.github.io/',

  organizationName: 'KershiaM', // Usually your GitHub org/user name.
  projectName: 'KershiaMukoro.github.io', // Usually your repo name.
  deploymentBranch: 'Deployment', // Branch for deployment
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
  require.resolve('docusaurus-plugin-image-zoom'),
],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/home.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/contact', label: 'Contact Me', position: 'right' },
        {
          href: 'https://www.linkedin.com/in/kershiam/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },

    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
    },

    footer: {
      links: [
        {
          title: 'More',
          items: [
            { label: 'Contact Me', to: '/contact' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kershia Mukoro`,
    },

    prism: {
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
    },

    scripts: [
      {
        src: './js/clipboard.js',
        async: true,
        defer: true,
      },
    ],
  },
};

module.exports = config;
