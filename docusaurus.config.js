// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kershia Mukoro',
  tagline: 'Tech made simple, clarity made powerful.',
  favicon: 'img/browser.png',

  // Set the production url of your site here
  url: 'https://kershiamukoro.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/KershiaMukoro.github.io/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KershiaM', // Usually your GitHub org/user name.
  projectName: 'KershiaMukoro.github.io', // Usually your repo name.
  deploymentBranch: 'Deployment',            // Branch for deployment
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js', //routeBasePath: '/', // Set this value to '/'.
         
        },
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true,
        },
        theme: {
          customCss: ('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:{
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // ({
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
         
          {to: '/blog', label: 'Blog', position: 'left'},
                   
          {to: '/contact', label: 'Contact Me', position: 'right'}, // Make sure '/contact' is set up
          {
            href: 'https://www.linkedin.com/in/kershiam/',
            label: 'LinkedIn',
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://kershiamukoro.github.io',
              },
              {label: 'Contact Me', to: '/contact'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kershia Mukoro`,
      },
      prism: {
        // theme: prismThemes.github, /* affects code block text color */
        darkTheme: prismThemes.dracula,
         defaultLanguage: 'javascript',
      },
       // Add your script here:
    scripts: [
      {
        src: './js/clipboard.js',
        async: true,
        defer: true,
      }
    ]
    }
};

export default config;
