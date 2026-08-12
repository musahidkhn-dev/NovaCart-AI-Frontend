import {
  LayoutDashboard,
  Users,
  Store,
  Package,
  Tags,
  Tag,
  ShoppingCart,
  Truck,
  MessageSquare,
  Settings,
} from "lucide-react";

export const adminNavData = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    label: "Sellers",
    path: "/admin/sellers",
    icon: Store,
  },
  {
    label: "Products",
    path: "/admin/products",
    icon: Package,
  },
  {
    label: "Categories",
    path: "/admin/categories",
    icon: Tags,
  },
  {
    label: "Brands",
    path: "/admin/brands",
    icon: Tag,
  },
  {
    label: "Orders",
    path: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    label: "Delivery",
    path: "/admin/delivery",
    icon: Truck,
  },
  {
    label: "Reviews",
    path: "/admin/reviews",
    icon: MessageSquare,
  },
  {
    label: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];