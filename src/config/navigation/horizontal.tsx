import { Package, Packages, SmartHome, History } from "@nxweb/icons/tabler";

import type { HorizontalNavItemsType } from "@layouts/types.js";

export const navigation: readonly HorizontalNavItemsType[] = [
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
  // {
  //   subject: "Administrator",
  // },
  {
    icon: <Packages />,
    id: "manage-products",
    link: "/manage-products",
    text: "Manage Products",
  },
];
