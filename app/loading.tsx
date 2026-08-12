import { ChefHatIcon, Loader2Icon } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <div className="relative flex size-14 shrink-0 items-center justify-center sm:size-16">
        <Loader2Icon className="absolute inset-0 size-full animate-spin text-primary/25" />
        <ChefHatIcon className="size-6 text-primary sm:size-7" />
      </div>
      <p className="text-sm font-medium text-muted-foreground sm:text-base">
        Cooking things up...
      </p>
    </div>
  );
};

export default GlobalLoading;
