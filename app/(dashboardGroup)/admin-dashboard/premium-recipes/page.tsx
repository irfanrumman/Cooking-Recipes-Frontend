import { Suspense } from "react";
import { AdminPostList } from "../../_components/AdminPostList";
import { MyPostsSkeleton } from "../../_components/MyPostSkeleton";

const AdminPremiumRecipesPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-semibold">Premium Recipes</h1>
        <p className="text-sm text-muted-foreground">
          All premium recipes across the platform. Feature one to show it on
          the home page.
        </p>
      </div>

      <Suspense fallback={<MyPostsSkeleton />}>
        <AdminPostList isPremium />
      </Suspense>
    </div>
  );
};

export default AdminPremiumRecipesPage;
