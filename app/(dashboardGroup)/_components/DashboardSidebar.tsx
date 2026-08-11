"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { ISidebarItem, NavbarProps } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenuItems } from "../_config/sidebarMenuItems";

export default function DashboardSidebar({user} : NavbarProps) {
  const pathname = usePathname();

  let navItems : ISidebarItem[]  = [];

  if (pathname.startsWith("/admin-dashboard")) {
    navItems = sidebarMenuItems.ADMIN;
  } else if (pathname.startsWith("/author-dashboard")) {
    navItems = sidebarMenuItems.AUTHOR;
  } else if (pathname.startsWith("/dashboard")) {
    navItems = sidebarMenuItems.USER;
  } else {
    const role = user.success ? user.data?.profile.role : undefined;

    if (role === "USER") {
      navItems = sidebarMenuItems.USER;
    } else if (role === "AUTHOR") {
      navItems = sidebarMenuItems.AUTHOR;
    } else if (role === "ADMIN") {
      navItems = sidebarMenuItems.ADMIN;
    }
  }

  return (
    <Sidebar
      collapsible="offcanvas"
      className="top-16 h-[calc(100svh-4rem)] border-r border-sidebar-border"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
