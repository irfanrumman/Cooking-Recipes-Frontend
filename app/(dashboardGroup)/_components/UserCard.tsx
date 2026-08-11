import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IAuthor } from "@/lib/types";

type UserCardProps = {
  user: IAuthor;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {user.name
            ?.split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div className="min-w-0 space-y-1">
          <p className="truncate font-medium">{user.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {user.email}
          </p>
          <Badge variant={user.activeStatus === "ACTIVE" ? "secondary" : "outline"}>
            {user.activeStatus}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
