import { RecipesCard } from "@/app/(publicGroup)/_components/recipes/RecipesCard";
import { IAuthor, IPost } from "@/lib/types";

export const mockRecipes: IPost[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    content:
      "A simple, cheesy classic topped with fresh basil, mozzarella, and a rich tomato sauce. Ready in just 30 minutes with a crisp, golden crust.",
    thumbnail:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=60",
    isFeatured: true,
    status: "PUBLISHED",
    tags: ["Italian", "Dinner"],
    views: 100,
    isPremium: false,
    authorId: "1",
    author: { name: "Maria Rossi" } as IAuthor,
    createdAt: "2026-07-14",
    updatedAt: "2026-07-14",
  },
  {
    id: "2",
    title: "Creamy Garlic Butter Shrimp",
    content:
      "Juicy shrimp seared in a garlicky butter sauce with a splash of lemon. Serve over pasta or rice for a quick weeknight dinner.",
    thumbnail:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800&auto=format&fit=crop&q=60",
    isFeatured: false,
    status: "PUBLISHED",
    tags: ["Seafood", "Quick Meals"],
    views: 80,
    isPremium: false,
    authorId: "2",
    author: { name: "James Carter" } as IAuthor,
    createdAt: "2026-07-10",
    updatedAt: "2026-07-10",
  },
  {
    id: "3",
    title: "Chocolate Lava Cake",
    content:
      "A decadent dessert with a molten chocolate center. Impress your guests with this restaurant-quality treat made in under an hour.",
    thumbnail:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&auto=format&fit=crop&q=60",
    isFeatured: true,
    status: "PUBLISHED",
    tags: ["Dessert", "Baking"],
    views: 210,
    isPremium: true,
    authorId: "3",
    author: { name: "Sophie Turner" } as IAuthor,
    createdAt: "2026-07-05",
    updatedAt: "2026-07-05",
  },
];

export async function PublicRecipesList() {
  const result = {
    success: true,
    data: mockRecipes,
  };

  if (!result.success || !result.data?.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No recipes found.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.data.map((post: IPost) => (
          <RecipesCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
