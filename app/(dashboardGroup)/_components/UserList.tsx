import { IAuthor } from "@/lib/types";
import { getAllUsers } from "../_actions/adminActions";
import { UserCard } from "./UserCard";

type UserListProps = {
    role: "USER" | "AUTHOR";
}

export async function UserList({ role }: UserListProps) {
    const result = await getAllUsers(role);

    if (!result.success || !result.data?.length) {
        return (
            <p className="py-12 text-center text-muted-foreground">
                No {role === "AUTHOR" ? "authors" : "users"} found.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {result.data.map((user: IAuthor) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}
