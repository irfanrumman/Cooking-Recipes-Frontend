"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { ChefHatIcon, HomeIcon, RotateCcwIcon, TriangleAlertIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-secondary px-4 py-16 text-center sm:px-6">
      {/* decorative dot-grid texture */}
      <div
        className="absolute inset-0 opacity-60 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[22px_22px] mask-[radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-destructive/15 blur-3xl"
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

        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-destructive/10 sm:size-20">
          <TriangleAlertIcon className="size-7 text-destructive sm:size-9" />
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-semibold sm:text-2xl">
            Something went wrong
          </h1>
          <p className="text-balance text-sm text-muted-foreground sm:text-base">
            Our kitchen hit a snag preparing this page. Try again, or head
            back home while we sort it out.
          </p>
          {error.digest && (
            <p className="text-xs text-muted-foreground/70">
              Error reference: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Button
            size="lg"
            onClick={() => unstable_retry()}
            className="w-full sm:w-auto"
          >
            <RotateCcwIcon data-icon="inline-start" />
            Try Again
          </Button>
          <Link href="/" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <HomeIcon data-icon="inline-start" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
