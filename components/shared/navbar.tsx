"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavbarProps } from "@/lib/types";
import { logout } from "@/service/logout";
import { ThemeToggle } from "./theme-toggle";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

// Navigation items configuration
const navItems = [
  { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Premium", href: "/premium" },
];

// User menu items configuration
const userMenuItems = [
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard" },
  { label: "Profile", icon: User, action: "profile" },
  { label: "Settings", icon: Settings, action: "settings" },
];

export function Navbar({ user }: NavbarProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleUserMenuAction = async (action: string) => {
    if (action === "dashboard") {
      if (user.data.profile.role === "USER") {
        router.push("/dashboard");
      } else if (user.data.profile.role === "AUTHOR") {
        router.push("/author-dashboard");
      } else if (user.data.profile.role === "ADMIN") {
        router.push("/admin-dashboard");
      }
      setIsMobileMenuOpen(false);
      return;
    }

    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      setIsMobileMenuOpen(false);
      router.push("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-lg sm:text-2xl font-bold text-primary">
              Cooking Recipes
            </span>
          </Link>

          {/* Nav Links - Desktop only */}
          <div className="hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side: Theme toggle + User area (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* User Dropdown / Auth Buttons - hidden on mobile, shown from sm up */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3">
              {user.success ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">
                          {user.data?.profile.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user.data?.profile.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {userMenuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <DropdownMenuItem
                          key={item.action}
                          onClick={() => handleUserMenuAction(item.action)}
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          <span>{item.label}</span>
                        </DropdownMenuItem>
                      );
                    })}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={async () => {
                        await handleUserMenuAction("logout");
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link href={"/register"}>
                    <Button
                      variant="outline"
                      className="cursor-pointer text-sm px-3 sm:px-4"
                    >
                      Register
                    </Button>
                  </Link>
                  <Link href={"/login"}>
                    <Button className="cursor-pointer text-sm px-3 sm:px-4">
                      Sign In
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Hamburger button - mobile only */}
            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary hover:bg-muted transition-colors text-sm font-medium px-2 py-2 rounded-md"
              >
                {item.label}
              </Link>
            ))}

            <div className="h-px bg-border my-2" />

            {user.success ? (
              <>
                <div className="px-2 py-1">
                  <p className="text-sm font-medium">
                    {user.data?.profile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.data?.profile.email}
                  </p>
                </div>
                {userMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.action}
                      type="button"
                      onClick={() => handleUserMenuAction(item.action)}
                      className="flex items-center text-sm font-medium px-2 py-2 rounded-md hover:bg-muted transition-colors text-left"
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={async () => {
                    await handleUserMenuAction("logout");
                  }}
                  className="flex items-center text-sm font-medium px-2 py-2 rounded-md hover:bg-muted transition-colors text-left"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Log out</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2 px-2">
                <Link href={"/register"} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full cursor-pointer">
                    Register
                  </Button>
                </Link>
                <Link href={"/login"} onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full cursor-pointer">
                    Sign In
                    </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}