import {
  LayoutDashboard,
  House,
  ListOrdered,
  UserPen,
  Users,
  ShoppingBasket,
} from "lucide-react";

export const userSidebarItems = [
  {
    title: "Home",
    url: `/`,
    icon: House,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "Dashboard",
    url: `/user/dashboard`,
    icon: LayoutDashboard,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "My Oders",
    url: `/user/dashboard/orders`,
    icon: ListOrdered,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "My Profile",
    url: `/profile`,
    icon: UserPen,
    isNotCollapsible: true,
    isActive: true,
  },
];

export const adminSidebarItems = [
  {
    title: "Home",
    url: `/`,
    icon: House,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "Dashboard",
    url: `/admin/dashboard`,
    icon: LayoutDashboard,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "Manage User",
    url: `/admin/dashboard/users`,
    icon: Users,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "Manage Products",
    url: `/admin/dashboard/products`,
    icon: ShoppingBasket,
    isNotCollapsible: true,
    isActive: true,
  },
  {
    title: "Manage Oders",
    url: `/admin/dashboard/orders`,
    icon: ListOrdered,
    isNotCollapsible: true,
    isActive: true,
  },
];
