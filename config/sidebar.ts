import {
  BarChart2,
  HelpCircle,
  MessageSquare,
  Users,
  type LucideIcon,
} from "lucide-react"

interface SidebarItem {
  title: string
  href: string
  icon: LucideIcon
  target?: string
  isHidden?: boolean
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

export const sidebarConfig: SidebarSection[] = [
  {
    title: "Reporting",
    items: [
      {
        title: "Analysis",
        href: "/admin/dashboard/analytics",
        icon: BarChart2,
      },
    ],
  },
  {
    title: "Submissions",
    items: [
      {
        title: "Submissions",
        href: "/admin/dashboard/submissions",
        icon: Users,
      },
    ],
  },
  // {
  //   title: "Settings",
  //   items: [
  //     {
  //       title: "Users",
  //       href: "/admin/dashboard/settings/users",
  //       icon: Settings,
  //     },
  //   ],
  // },
  {
    title: "Support",
    items: [
      {
        title: "Documentation",
        href: "/admin//docs",
        icon: MessageSquare,
        target: "_blank",
      },
      {
        title: "Contact Us",
        href: "/admin/support",
        icon: HelpCircle,
        target: "_blank",
      },
    ],
  },
]
