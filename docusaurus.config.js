// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const backendFiles = require('./generated/backend.docs.external.js')
const data = require('./generated/api.docs.external.json');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XpensePath',
  tagline: 'An open source and free personal finance manager',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://XpensePath.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/XpensePath-Documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XpensePath', // Usually your GitHub org/user name.
  projectName: ' XpensePath-Documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // derived from docusaurus-theme-openapi-docs
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/XpensePath-social-card.png',
      bigLogo: {
        alt: 'XpensePath Logo Big',
        src: 'img/Logo.png',
      },
      navbar: {
        title: 'XpensePath',
        logo: {
          alt: 'XpensePath Logo',
          src: 'img/Logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/orgs/XpensePath/repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/XpensePath',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/XpensePath',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/XpensePath/repositories',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XpensePath, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "backend-content", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/XpensePath/Rest-Api/main/docs/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/backend", // the base directory to output to.
        documents: backendFiles, // the file names to download
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
        config: data
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components
};

module.exports = config;
