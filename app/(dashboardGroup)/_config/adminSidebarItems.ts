import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard, Sparkles, User, Users } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
    {
        label : "Admin Dashboard",
        href : "/admin-dashboard",
        icon : LayoutDashboard
    },
    {
        label : "Authors",
        href : "/admin-dashboard/authors",
        icon : Users
    },
    {
        label : "Users",
        href : "/admin-dashboard/users",
        icon : User
    },
    {
        label : "Premium Recipes",
        href : "/admin-dashboard/premium-recipes",
        icon : Sparkles
    },
    {
        label : "Recipes",
        href : "/admin-dashboard/recipes",
        icon : FileText
    },
]
