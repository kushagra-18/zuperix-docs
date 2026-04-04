import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zuperix Docs',
  tagline: 'The AI-Powered Digital Asset Management System',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://docs.zuperix.com',
  baseUrl: '/',

  organizationName: 'zuperix', 
  projectName: 'zuperix-docs', 

  onBrokenLinks: 'throw',
  markdown: {
    format: 'mdx',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ['en'],
        searchBarShortcut: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/zuperix-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Zuperix',
      logo: {
        alt: 'Zuperix Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://dashboard.zuperix.com',
          label: 'Go to Dashboard',
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
              label: 'User Guide',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/api/authentication',
            },
          ],
        },
        {
          title: 'Zuperix',
          items: [
            {
              label: 'Dashboard',
              href: 'https://dashboard.zuperix.com',
            },
            {
              label: 'Website',
              href: 'https://zuperix.com',
            },
            {
              label: 'Status',
              href: 'https://status.zuperix.com',
            },
          ],
        },
      ],
      copyright: `
        <div class="footer-status-badge">
          <a href="https://status.zuperix.com/" target="_blank" rel="noopener noreferrer" class="status-badge-pill">
            <div class="status-badge-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="status-badge-text">All services are online</span>
          </a>
        </div>
        <div class="footer-bottom-container">
          <div class="footer-copyright">
            © ${new Date().getFullYear()} Zuperix. Open source under the GNU AGPL v3.
          </div>
          <div class="footer-legal-links">
            <a href="/privacy" class="footer-legal-link">Privacy Policy</a>
            <a href="/terms" class="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
