"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IPost } from "@/lib/types";
import { StarIcon } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { toggleFeatured } from "../_actions/adminActions";

type AdminPostCardProps = {
  post: IPost;
};

export function AdminPostCard({ post }: AdminPostCardProps) {
  const [isPending, startTransition] = useTransition();

  const handleToggleFeatured = () => {
    startTransition(async () => {
      const result = await toggleFeatured(post.id, !post.isFeatured);

      if (result.success) {
        toast.success(
          post.isFeatured
            ? "Removed from featured recipes"
            : "Marked as a featured recipe"
        );
      } else {
        toast.error(result.message || "Something went wrong");
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-1.5">
          <Badge variant="outline">{post.status}</Badge>
          {post.isPremium && <Badge>Premium</Badge>}
          {post.isFeatured && (
            <Badge variant="secondary">
              <StarIcon data-icon="inline-start" className="fill-current" />
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="line-clamp-3 whitespace-pre-line text-muted-foreground">
          {post.content}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>By {post.author?.name ?? "Unknown"}</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <Button
          size="sm"
          variant={post.isFeatured ? "outline" : "default"}
          disabled={isPending}
          onClick={handleToggleFeatured}
          className="w-full"
        >
          <StarIcon
            data-icon="inline-start"
            className={post.isFeatured ? "" : "fill-current"}
          />
          {isPending
            ? "Saving..."
            : post.isFeatured
              ? "Remove from Featured"
              : "Feature on Home Page"}
        </Button>
      </CardContent>
    </Card>
  );
}
