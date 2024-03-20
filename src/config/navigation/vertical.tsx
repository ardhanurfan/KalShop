import {
  Circle,
  File,
  Lock,
  Mail,
  Pencil,
  Shield,
  ShoppingCart,
  SmartHome,
  Package,
  History,
  Packages,
} from "@nxweb/icons/tabler";

import type { VerticalNavItemsType } from "@layouts/types.js";

export const navigation: readonly VerticalNavItemsType[] = [
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
    section: "Administrator",
    id: "administrator",
  },
  {
    icon: <Packages />,
    id: "manage-products",
    link: "/manage-products",
    text: "Manage Products",
  },
];
