// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CortexScan Web SDK Docs',
  tagline: 'Browser and Node documentation for Code Corp CortexScan Web SDK',
  favicon: 'img/CodeBrady-logo.ico',

  // Set the production url of your site here
  url: 'https://code-web-sdk-docs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Code Corporation',
  projectName: 'cortexscan-web-sdk-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/CodeBrady-logo.ico',
      navbar: {
        title: 'CortexScan Web SDK',
        logo: {
          alt: 'Cortex Decoder Web Documentation',
          src: 'img/CodeBrady-logo.ico',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Overview',
            position: 'left',
          },
          {
            to: '/docs/Quick_Start',
            label: 'Quick Start',
            position: 'left',
          },
          {
            to: '/docs/API_Reference/Generated',
            label: 'API',
            position: 'left',
          },
          {
            to: '/docs/Release_Notes',
            label: 'Release Notes',
            position: 'left',
          },
          {
            href: 'https://codecorp.com/contact',
            label: 'Contact Us',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
