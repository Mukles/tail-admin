import * as Icons from "@/icons";

export const dashboardMenu = [
  {
    name: "Profile Settings",
    url: "/dashboard/profile",
  },
  {
    name: "Download History",
    url: "/dashboard/downloads",
  },
  {
    name: "Billing Information",
    url: "/dashboard/billing",
  },
  {
    name: "Support Tickets",
    url: "/dashboard/tickets",
  },
  {
    name: "Team Members",
    url: "/dashboard/members",
  },
  {
    name: "Access Token",
    url: "/dashboard/access-token",
  },
];

const menuItems = {
  dashboard: [
    { url: "/ecommerce", name: "Ecommerce" },
    { url: "/analytics", name: "Analytics" },
    { url: "/marketing", name: "Marketing" },
    { url: "/crm", name: "CRM" },
    { url: "/stocks", name: "Stocks" },
  ],
  support: [
    { url: "/help", name: "Help" },
    { url: "/faq", name: "FAQ" },
  ],
};

export const sidebarMenu = [
  {
    label: "MENU",
    name: "menu",
    children: [
      {
        name: "Dashboard",
        icon: Icons.DashboardIcon,
        children: menuItems.dashboard,
      },
      {
        name: "Calendar",
        icon: Icons.CalendarIcon,
      },
    ],
  },
  {
    label: "Supports",
    name: "Supports",
    children: [
      {
        name: "Dashboard",
        icon: Icons.DashboardIcon,
        children: menuItems.dashboard,
      },
      {
        name: "Calendar",
        icon: Icons.CalendarIcon,
      },
    ],
  },
];
