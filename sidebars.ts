import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  userGuideSidebar: [
    'intro',
    'concepts',
    {
      type: 'category',
      label: 'The Dashboard',
      items: [
        'dashboard/overview',
        'dashboard/upload-status',
      ],
    },
    {
      type: 'category',
      label: 'Managing Assets',
      items: [
        'assets/uploading',
        'assets/organization',
        'assets/vaults',
        'assets/metadata',
        'assets/ratings',
        'assets/smart-features',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/google-drive',
      ],
    },
    {
      type: 'category',
      label: 'Search & Discovery',
      items: [
        'search/smart-search',
      ],
    },
    {
      type: 'category',
      label: 'Sharing & Distribution',
      items: [
        'sharing/portals',
        'sharing/downloads',
        'sharing/upload-links',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/settings',
        'admin/users',
        'admin/roles-permissions',
        'admin/sso',
        'admin/audit-logs',
        'admin/workflows',
      ],
    },
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'api/quickstart',
        'api/authentication',
        'api/reference',
        'api/webhooks',
      ],
    },
  ],
};

export default sidebars;
