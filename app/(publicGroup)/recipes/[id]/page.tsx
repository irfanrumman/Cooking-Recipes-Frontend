
import {mockRecipes} from "@/app/(publicGroup)/_components/recipes/PublicRecipesList";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CalendarIcon,
  ChefHatIcon,
  ClockIcon,
  MessageSquareIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const recipeDetails: Record<
  string,
  { prepTime: string; servings: string; ingredients: string[]; steps: string[] }
> = {
  "1": {
    prepTime: "30 mins",
    servings: "4",
    ingredients: [
      "1 pizza dough (store-bought or homemade)",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella, torn",
      "A handful of fresh basil leaves",
      "2 tbsp olive oil",
      "Salt to taste",
    ],
    steps: [
      "Preheat your oven to the highest setting with a pizza stone or tray inside.",
      "Roll out the dough on a floured surface into your desired shape.",
      "Spread the tomato sauce evenly, leaving a small border for the crust.",
      "Scatter the torn mozzarella over the sauce.",
      "Bake for 8-10 minutes until the crust is golden and cheese is bubbling.",
      "Top with fresh basil, a drizzle of olive oil, and a pinch of salt before serving.",
    ],
  },
  "2": {
    prepTime: "20 mins",
    servings: "2",
    ingredients: [
      "400g shrimp, peeled and deveined",
      "4 tbsp butter",
      "4 cloves garlic, minced",
      "1 lemon, juiced",
      "Fresh parsley, chopped",
      "Salt and pepper to taste",
    ],
    steps: [
      "Melt butter in a large skillet over medium heat.",
      "Add garlic and cook until fragrant, about 30 seconds.",
      "Add shrimp and season with salt and pepper, cooking 2-3 minutes per side.",
      "Stir in lemon juice and simmer for a minute.",
      "Garnish with parsley and serve over pasta or rice.",
    ],
  },
  "3": {
    prepTime: "45 mins",
    servings: "4",
    ingredients: [
      "115g dark chocolate, chopped",
      "115g unsalted butter",
      "2 large eggs plus 2 egg yolks",
      "1/4 cup granulated sugar",
      "2 tbsp all-purpose flour",
      "A pinch of salt",
    ],
    steps: [
      "Preheat the oven to 220°C (425°F) and butter 4 ramekins.",
      "Melt the chocolate and butter together until smooth.",
      "Whisk the eggs, egg yolks, and sugar until pale and thick.",
      "Fold the chocolate mixture into the egg mixture, then fold in the flour and salt.",
      "Divide between the ramekins and bake for 10-12 minutes until the edges are set but the center is soft.",
      "Let rest for a minute, then invert onto plates and serve immediately.",
    ],
  },
};

const RecipeByIdPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const recipe = mockRecipes.find((item) => item.id === id);

  if (!recipe) {
    notFound();
  }

  const details = recipeDetails[id] ?? recipeDetails["1"];
  const commentCount = recipe.comments?.length ?? 0;

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/recipes"
        className="text-sm font-medium text-muted-foreground hover:text-primary"
      >
        &larr; Back to Recipes
      </Link>

      {recipe.thumbnail ? (
        <Image
          src={recipe.thumbnail}
          unoptimized
          alt={recipe.title}
          width={1200}
          height={480}
          className="h-64 w-full rounded-2xl object-cover sm:h-80"
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-secondary sm:h-80">
          <ChefHatIcon className="size-14 text-primary/60" />
        </div>
      )}

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {recipe.isPremium && (
            <Badge variant="default">
              <SparklesIcon data-icon="inline-start" />
              Premium
            </Badge>
          )}
          {recipe.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl font-semibold sm:text-4xl">{recipe.title}</h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>By {recipe.author?.name ?? "Unknown"}</span>
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="size-4" />
            {new Date(recipe.createdAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="size-4" />
            {details.prepTime}
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon className="size-4" />
            Serves {details.servings}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageSquareIcon className="size-4" />
            {commentCount}
          </span>
        </div>

        <p className="text-muted-foreground">{recipe.content}</p>
      </div>

      <Separator />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <Card className="sm:col-span-1">
          <CardContent className="space-y-3">
            <h2 className="font-medium">Ingredients</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {details.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-2">
                  <span className="text-primary">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2">
          <CardContent className="space-y-3">
            <h2 className="font-medium">Instructions</h2>
            <ol className="space-y-4 text-sm text-muted-foreground">
              {details.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecipeByIdPage;
