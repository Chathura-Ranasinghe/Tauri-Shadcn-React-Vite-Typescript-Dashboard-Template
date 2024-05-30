import {
  Home,
  Cctv,
  FileClock,
  Settings,
  LayoutDashboard 
} from "lucide-react";

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: Home
        }
      ]
    },
    {
      groupLabel: "Library",
      menus: [
        {
          href: "./records",
          label: "Records",
          active: pathname.includes("/records"),
          icon: Cctv,
        },
        {
          href: "./alerts",
          label: "Alerts",
          active: pathname.includes("/alerts"),
          icon: FileClock ,
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/layout",
          label: "Layout",
          active: pathname.includes("/layout"),
          icon: LayoutDashboard 
        },
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings
        }
      ]
    }
  ];
}