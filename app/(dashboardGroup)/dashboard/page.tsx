import { Card, CardContent } from "@/components/ui/card";
import { getMe } from "@/service/getMe";
import { ArrowRightIcon, FileTextIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/app/(publicGroup)/_components/payment/PricingSection";

const UserDashboardPage = async () => {
  const meResult = await getMe();

  const userName = meResult.success ? meResult.data?.profile?.name : undefined;

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome back{userName ? `, ${userName}` : ""}
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your premium access and recipe posts here.
        </p>
      </div>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <SparklesIcon className="size-5 text-primary" />
          <h2 className="text-lg font-semibold">Premium Access</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          You&apos;re logged in and can browse free recipes right away. Premium
          recipes need an active subscription — subscribe below to unlock
          them.
        </p>
        <PricingSection />
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="space-y-2">
            <h3 className="font-medium">Free Recipes</h3>
            <p className="text-sm text-muted-foreground">
              Browse everything available without a subscription.
            </p>
            <Link
              href="/news"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Browse Recipes
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-2">
            <h3 className="font-medium">Premium Recipes</h3>
            <p className="text-sm text-muted-foreground">
              Exclusive recipes for subscribed members.
            </p>
            <Link
              href="/premium"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View Premium Page
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <FileTextIcon className="size-4 text-primary" />
              <h3 className="font-medium">My Posts</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Manage recipes you&apos;ve shared with the community.
            </p>
            <Link
              href="/dashboard/my-posts"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Go to My Posts
              <ArrowRightIcon className="size-3.5" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboardPage;
