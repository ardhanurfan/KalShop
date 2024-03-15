import { File, Lock, Mail, Pencil, Shield, ShoppingCart, SmartHome } from '@nxweb/icons/tabler';

import type { HorizontalNavItemsType } from "@layouts/types.js";

export const navigation: readonly HorizontalNavItemsType[] = [
  {
    icon: <ShoppingCart />,
    id: 'cart',
    link: '/cart',
    text: 'Cart'
  },
  {
    icon: <Pencil />,
    id: 'add',
    link: '/products/add',
    text: 'Add Form'
  },
  {
    icon: <SmartHome />,
    id: "home",
    link: "/home",
    text: "Home",
  },
  {
    icon: <Package />,
    id: "products",
    link: "/products",
    text: "Products",
  },
  {
    icon: <History />,
    id: "history",
    link: "/history",
    text: "History",
  },

  {
    icon: <Packages />,
    id: "manage-products",
    link: "/manage-products",
    text: "Manage Products",
  },
  {
    icon: <File />,
    id: 'misc',
    text: 'Miscellaneous',
    title: 'Miscellaneous',
    children: [
      {
        id: 'page-not-found',
        link: '/pages/misc/404',
        text: 'Page Not Found - 404',
        title: 'Page Not Found - 404'
      },
      {
        id: 'not-authorized',
        link: '/pages/misc/401',
        text: 'Not Authorized - 401',
        title: 'Not Authorized - 401'
      },
      {
        id: 'server-error',
        link: '/pages/misc/500',
        text: 'Server Error - 500',
        title: 'Server Error - 500'
      }
    ]
  }
];
