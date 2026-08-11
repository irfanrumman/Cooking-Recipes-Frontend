import { Suspense } from "react";
import { UserList } from "../../_components/UserList";
import { UserListSkeleton } from "../../_components/UserListSkeleton";

const AdminAuthorsPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-semibold">Authors</h1>
        <p className="text-sm text-muted-foreground">
          Everyone with author access on the platform.
        </p>
      </div>

      <Suspense fallback={<UserListSkeleton />}>
        <UserList role="AUTHOR" />
      </Suspense>
    </div>
  );
};

export default AdminAuthorsPage;
