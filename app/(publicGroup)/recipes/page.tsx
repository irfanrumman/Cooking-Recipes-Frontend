import { Suspense } from "react";
import { RecipesSearchBar } from "../_components/recipes/RecipesSearchBar";
import { RecipesSkeleton } from "../_components/recipes/RecipesSkeleton";
import { PublicRecipesList } from "../_components/recipes/PublicRecipesList";

const RecipesPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Recipes</h1>
          <p className="text-sm text-muted-foreground">
            Browse recipes shared by our community of home cooks and chefs.
          </p>
        </div>

        <RecipesSearchBar />
      </div>

      <Suspense fallback={<RecipesSkeleton />}>
        <PublicRecipesList />
      </Suspense>
    </div>
  );
};

export default RecipesPage;
