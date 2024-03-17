import {
  History,
  Package,
  Packages,
  Pencil,
  ShoppingCart,
  SmartHome,
} from "@nxweb/icons/tabler";

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

  {
    icon: <Packages />,
    id: "manage-products",
    link: "/manage-products",
    text: "Manage Products",
  },
];
