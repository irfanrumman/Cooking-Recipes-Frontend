import { Suspense } from "react";
import {RecipesSearchBar} from "../_components/recipes/RecipesSearchBar";
import {RecipesSkeleton} from "../_components/recipes/RecipesSkeleton";
import { PremiumRecipesList } from "../_components/recipes/PremiumRecipesList";

const PremiumPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Premium News</h1>
          <p className="text-sm text-muted-foreground">
            Exclusive stories for our subscribers.
          </p>
        </div>

        <RecipesSearchBar />
      </div>

      <Suspense fallback={<RecipesSkeleton />}>
        <PremiumRecipesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default PremiumPage;
