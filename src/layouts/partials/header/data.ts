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
    { url: "/stocks", name: "Stocks", tag: "new" },
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
      {
        name: "Profile",
        icon: Icons.PersonIcon,
      },
      {
        name: "Task",
        icon: Icons.TaskIcon,
        children: menuItems.dashboard,
      },
      {
        name: "Forms",
        icon: Icons.FormsIcon,
        children: menuItems.support,
      },
      {
        name: "Tables",
        icon: Icons.TableIcon,
        children: menuItems.support,
      },
      {
        name: "Pages",
        icon: Icons.PagesIcon,
        children: menuItems.support,
      },
    ],
  },
  {
    label: "Supports",
    name: "Supports",
    children: [
      {
        name: "Message",
        icon: Icons.MessageIcon,
      },
      {
        name: "Inbox",
        icon: Icons.InboxIcon,
      },
      {
        name: "Invoice",
        icon: Icons.InvoiceIcon,
      },
    ],
  },
];
