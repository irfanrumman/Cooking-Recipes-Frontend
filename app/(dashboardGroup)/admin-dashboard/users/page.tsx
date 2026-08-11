import { Suspense } from "react";
import { UserList } from "../../_components/UserList";
import { UserListSkeleton } from "../../_components/UserListSkeleton";

const AdminUsersPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-semibold">Users</h1>
        <p className="text-sm text-muted-foreground">
          Everyone registered as a regular user.
        </p>
      </div>

      <Suspense fallback={<UserListSkeleton />}>
        <UserList role="USER" />
      </Suspense>
    </div>
  );
};

export default AdminUsersPage;
