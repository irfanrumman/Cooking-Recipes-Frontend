import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/shared/footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Cooking Recipes",
    template: "%s | Cooking Recipes",
  },
  description:
    "Discover, cook, and share recipes with a growing community of home cooks and chefs from around the world.",
  keywords: [
    "recipes",
    "cooking recipes",
    "cooking",
    "food",
    "premium recipes",
    "home cooking",
  ],
  applicationName: "Cooking Recipes",
  openGraph: {
    title: "Cooking Recipes",
    description:
      "Discover, cook, and share recipes with a growing community of home cooks and chefs from around the world.",
    siteName: "Cooking Recipes",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cooking Recipes",
    description:
      "Discover, cook, and share recipes with a growing community of home cooks and chefs from around the world.",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" richColors />
          {/* Navbar */}
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
