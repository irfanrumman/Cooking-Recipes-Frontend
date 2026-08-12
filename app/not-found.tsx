import { Button } from "@/components/ui/button";
import { ChefHatIcon, HomeIcon, SearchIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-secondary px-4 py-16 text-center sm:px-6">
      {/* decorative dot-grid texture */}
      <div
        className="absolute inset-0 opacity-60 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[22px_22px] mask-[radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative w-full max-w-md space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-bold text-primary sm:text-xl"
        >
          <ChefHatIcon className="size-6 sm:size-7" />
          Cooking Recipes
        </Link>

        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 sm:size-20">
          <SearchIcon className="size-7 text-primary sm:size-9" />
        </div>

        <div className="space-y-2">
          <p className="text-6xl font-bold text-primary sm:text-7xl">404</p>
          <h1 className="text-xl font-semibold sm:text-2xl">
            This recipe isn&apos;t on the menu
          </h1>
          <p className="text-balance text-sm text-muted-foreground sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back to something delicious.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              <HomeIcon data-icon="inline-start" />
              Back to Home
            </Button>
          </Link>
          <Link href="/recipes" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Browse Recipes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
