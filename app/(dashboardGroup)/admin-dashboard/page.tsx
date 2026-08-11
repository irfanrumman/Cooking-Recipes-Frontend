import { Card, CardContent } from "@/components/ui/card";
import { getMe } from "@/service/getMe";
import { IAuthor, IPost } from "@/lib/types";
import Link from "next/link";
import { getAllPosts, getAllUsers } from "../_actions/adminActions";
import { AdminPostCard } from "../_components/AdminPostCard";
import { UserCard } from "../_components/UserCard";

const AdminDashboardPage = async () => {
  const [meResult, authorsResult, usersResult, postsResult] =
    await Promise.all([
      getMe(),
      getAllUsers("AUTHOR"),
      getAllUsers("USER"),
      getAllPosts(),
    ]);

  const adminName = meResult.success
    ? meResult.data?.profile?.name
    : undefined;

  const authors: IAuthor[] = authorsResult.success
    ? authorsResult.data ?? []
    : [];
  const users: IAuthor[] = usersResult.success ? usersResult.data ?? [] : [];
  const posts: IPost[] = postsResult.success ? postsResult.data ?? [] : [];

  const premiumPosts = posts.filter((post) => post.isPremium);
  const freePosts = posts.filter((post) => !post.isPremium);
  const featuredCount = posts.filter((post) => post.isFeatured).length;

  const stats = [
    { label: "Authors", value: authors.length },
    { label: "Users", value: users.length },
    { label: "Premium Recipes", value: premiumPosts.length },
    { label: "Free Recipes", value: freePosts.length },
    { label: "Featured", value: featuredCount },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome back{adminName ? `, ${adminName}` : ""}
        </h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s a full overview of the platform.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="text-center">
              <p className="text-2xl font-semibold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Authors</h2>
          <Link
            href="/admin-dashboard/authors"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        {authors.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No authors found.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {authors.slice(0, 3).map((author) => (
              <UserCard key={author.id} user={author} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Users</h2>
          <Link
            href="/admin-dashboard/users"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        {users.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No users found.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {users.slice(0, 3).map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Premium Recipes</h2>
          <Link
            href="/admin-dashboard/premium-recipes"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        {premiumPosts.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No premium recipes found.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {premiumPosts.slice(0, 3).map((post) => (
              <AdminPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recipes</h2>
          <Link
            href="/admin-dashboard/recipes"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        {freePosts.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No recipes found.
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {freePosts.slice(0, 3).map((post) => (
              <AdminPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminDashboardPage;
