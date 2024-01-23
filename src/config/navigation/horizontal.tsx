import { Mail, Shield, SmartHome } from '@nxweb/icons/tabler';

import type { HorizontalNavItemsType } from '@layouts/types.js';

export const navigation: readonly HorizontalNavItemsType[] = [
  {
    icon: <SmartHome />,
    id: 'home',
    link: '/home',
    text: 'Home'
  },
  {
    icon: <Mail />,
    id: 'second-page',
    link: '/second-page',
    text: 'Second Page'
  },
  {
    action: 'read',
    icon: <Shield />,
    id: 'acl-page',
    link: '/acl',
    subject: 'acl-page',
    text: 'Access Control'
  }
];
