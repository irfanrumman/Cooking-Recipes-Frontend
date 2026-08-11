import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  ChefHat,
  Users,
  BookOpen,
  Heart,
  Utensils,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: ChefHat,
    title: "Tested Recipes",
    description:
      "Every recipe on our platform is tried, tested, and refined by home cooks and professional chefs alike before it reaches your kitchen.",
  },
  {
    icon: Users,
    title: "A Growing Community",
    description:
      "Thousands of food lovers share tips, swap substitutions, and celebrate each other's kitchen wins in our community.",
  },
  {
    icon: BookOpen,
    title: "Something For Everyone",
    description:
      "From five-minute snacks to weekend feasts, our library spans cuisines, skill levels, and dietary needs.",
  },
  {
    icon: Heart,
    title: "Made With Care",
    description:
      "We obsess over clear instructions and honest photos, because we know a good recipe should never leave you guessing.",
  },
];

const stats = [
  { label: "Recipes Shared", value: "2,500+" },
  { label: "Home Cooks", value: "40,000+" },
  { label: "Cuisines Covered", value: "60+" },
];

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mx-auto max-w-3xl space-y-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Utensils className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          About Cooking Recipes
        </h1>
        <p className="text-balance text-muted-foreground sm:text-lg">
          We started Cooking Recipes with one simple idea: great food should
          be easy to find, easy to follow, and easy to share. Whether you're
          cooking your first meal or your thousandth, you belong in our
          kitchen.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
      </section>

      <Separator />

      {/* Story */}
      <section className="mx-auto max-w-3xl space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold sm:text-2xl">Our Story</h2>
        </div>
        <p className="text-muted-foreground">
          Cooking Recipes began as a small collection of family recipes
          passed between friends, and grew into a place where anyone can
          publish, discover, and save the dishes that matter to them. We
          believe the best recipes come from real kitchens, so we built a
          platform that makes it simple for home cooks to share what they
          love.
        </p>
        <p className="text-muted-foreground">
          Today, our community includes home cooks, food bloggers, and
          professional chefs, all contributing to a growing library that
          celebrates every cuisine and every skill level.
        </p>
      </section>

      {/* Values */}
      <section className="space-y-6">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <CardContent className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-2xl space-y-4 text-center">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Ready to Start Cooking?
        </h2>
        <p className="text-muted-foreground">
          Explore our recipe collection or join the community to save your
          favorites and share your own creations.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button>Browse Recipes</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline">Join the Community</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
