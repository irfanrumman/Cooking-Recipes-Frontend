import { IPost } from "@/lib/types";
import { getAllPosts } from "../_actions/adminActions";
import { AdminPostCard } from "./AdminPostCard";

type AdminPostListProps = {
  isPremium: boolean;
};

export async function AdminPostList({ isPremium }: AdminPostListProps) {
  const result = await getAllPosts();

  const posts: IPost[] = result.success ? result.data ?? [] : [];
  const filtered = posts.filter((post) => post.isPremium === isPremium);

  if (!filtered.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No {isPremium ? "premium" : ""} recipes found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((post) => (
        <AdminPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
