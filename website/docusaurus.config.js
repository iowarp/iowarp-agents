// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IOWarp Agents',
  tagline: 'Specialized AI subagents for scientific computing workflows',
  favicon: 'img/iowarp_logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://iowarp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/iowarp-agents/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iowarp', // Usually your GitHub org/user name.
  projectName: 'iowarp-agents', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/iowarp/iowarp-agents/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Enhanced metadata for social sharing
      metadata: [
        {name: 'description', content: 'Specialized AI subagents for scientific computing workflows. Enable Claude Code and other AI assistants to tackle complex scientific tasks.'},
        {name: 'keywords', content: 'AI agents, subagents, scientific computing, Claude Code, IOWarp, data analysis, HPC, research'},
        {property: 'og:title', content: 'IOWarp Agents - AI Subagents for Scientific Computing'},
        {property: 'og:description', content: 'Specialized AI subagents for scientific computing workflows.'},
        {property: 'og:image', content: 'https://iowarp.github.io/iowarp-agents/img/iowarp_social_card.png'},
        {property: 'og:image:width', content: '400'},
        {property: 'og:image:height', content: '400'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'IOWarp Agents - AI Subagents for Scientific Computing'},
        {name: 'twitter:description', content: 'Specialized AI subagents for scientific computing workflows.'},
        {name: 'twitter:image', content: 'https://iowarp.github.io/iowarp-agents/img/iowarp_social_card.png'},
      ],
      // Social card for link previews
      image: 'img/iowarp_social_card.png',
      navbar: {
        title: 'IOWarp Agents',
        logo: {
          alt: 'IOWarp Agents Logo',
          src: 'img/iowarp_logo.png',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Browse Agents',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/iowarp/iowarp-agents',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Agents',
            items: [
              {
                label: 'Browse All Agents',
                to: '/',
              },
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/iowarp/iowarp-agents/issues',
              },
              {
                label: 'IOWarp MCPs',
                href: 'https://github.com/iowarp/iowarp-mcps',
              },
              {
                label: 'Discussions',
                href: 'https://grc.zulipchat.com/#narrow/channel/518574-iowarp-mcps',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/iowarp/iowarp-agents',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IOWarp. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
