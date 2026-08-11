import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getMyPosts } from "@/app/(dashboardGroup)/_actions/myPostsActions";
import { getMe } from "@/service/getMe";
import { IPost } from "@/lib/types";
import { ArrowRightIcon, FileTextIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { PostFormDialog } from "../_components/PostFormDialog";

const AuthorDashboardPage = async () => {
  const [meResult, postsResult] = await Promise.all([getMe(), getMyPosts()]);

  const authorName = meResult.success
    ? meResult.data?.profile?.name
    : undefined;

  const posts: IPost[] = postsResult.success ? postsResult.data ?? [] : [];

  const stats = [
    { label: "Total Posts", value: posts.length },
    {
      label: "Published",
      value: posts.filter((post) => post.status === "PUBLISHED").length,
    },
    {
      label: "Drafts",
      value: posts.filter((post) => post.status === "DRAFT").length,
    },
    {
      label: "Premium",
      value: posts.filter((post) => post.isPremium).length,
    },
  ];

  const recentPosts = posts.slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Welcome back{authorName ? `, ${authorName}` : ""}
          </h1>
          <p className="text-sm text-muted-foreground">
            Here&apos;s an overview of your recipe posts.
          </p>
        </div>
        <PostFormDialog mode="create" />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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

      <Card>
        <CardContent className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <FileTextIcon className="size-5 text-primary" />
          </div>
          <div className="space-y-2">
            <div>
              <h3 className="font-medium">Manage Your Posts</h3>
              <p className="text-sm text-muted-foreground">
                View, edit, and publish your recipe posts.
              </p>
            </div>
            <Link
              href="/author-dashboard/my-posts"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Go to My Posts
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Posts</h2>
          <Link
            href="/author-dashboard/my-posts"
            className="text-sm font-medium text-primary hover:underline"
          >
            View all
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              You haven&apos;t created any posts yet.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{post.status}</Badge>
                    {post.isPremium && (
                      <Badge>
                        <SparklesIcon data-icon="inline-start" />
                        Premium
                      </Badge>
                    )}
                    <span className="font-medium">{post.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorDashboardPage;
