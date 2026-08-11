import Link from "next/link";
import { Suspense } from "react";
import { CurrentYear } from "./current-year";
import {
  ChefHat,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Recipes", href: "/recipes" },
  { label: "Premium", href: "/premium" },
];

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Register", href: "/register" },
  { label: "Sign In", href: "/login" },
];

const categoryLinks = [
  { label: "Italian", href: "/news?searchTerm=Italian" },
  { label: "Desserts", href: "/news?searchTerm=Desserts" },
  { label: "Healthy", href: "/news?searchTerm=Healthy" },
  { label: "Vegan", href: "/news?searchTerm=Vegan" },
];

// const socialLinks = [
//   { label: "Facebook", icon: Globe, href: "#" },
//   { label: "Instagram", icon: Camera, href: "#" },
//   { label: "Twitter", icon: MessageCircle, href: "#" },
//   { label: "YouTube", icon: Video, href: "#" },
// ];

export function Footer() {
  return (
    <footer className="relative z-20 border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <ChefHat className="size-6 text-primary" />
              <span className="text-lg font-bold text-primary">
                Cooking Recipes
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Discover, cook, and share recipes with a growing community of
              home cooks and chefs from around the world.
            </p>
            {/* <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div> */}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:grid-cols-3">
          <span className="flex items-center gap-2">
            <Mail className="size-4 text-primary" />
            hello@cookingrecipes.com
          </span>
          {/* <span className="flex items-center gap-2">
            <Phone className="size-4 text-primary" />
            +1 (555) 123-4567
          </span> */}
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            123 Kitchen Lane, Flavor Town
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; <Suspense fallback={null}><CurrentYear /></Suspense> Cooking
            Recipes. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
