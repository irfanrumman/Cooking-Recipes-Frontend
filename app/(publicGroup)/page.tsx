import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChefHatIcon,
  QuoteIcon,
  SearchIcon,
  ShareIcon,
  SoupIcon,
  StarIcon,
} from "lucide-react";
import { NewsSkeleton } from "./_components/news/NewsSkeleton";
import { PublicNewsList } from "./_components/news/PublicNewsList";
import HeroSearch from "./_components/home/HeroSearch";
import FeatureTimeline from "./_components/home/FeatureTimeline";

const heroAvatars = [
  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=64&h=64&fit=crop&crop=faces&auto=format&q=60",
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=60",
    alt: "Home-cooked dinner plate",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60",
    alt: "Margherita pizza",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&auto=format&fit=crop&q=60",
    alt: "Chocolate lava cake",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=600&auto=format&fit=crop&q=60",
    alt: "Garlic butter shrimp",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
    alt: "Fresh salad bowl",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60",
    alt: "Breakfast pastries",
    span: "",
  },
];

const chefs = [
  {
    name: "Maria Rossi",
    specialty: "Italian Cuisine",
    recipes: "120+ recipes",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  },
  {
    name: "James Carter",
    specialty: "Seafood & Grill",
    recipes: "85+ recipes",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  },
  {
    name: "Sophie Turner",
    specialty: "Baking & Desserts",
    recipes: "150+ recipes",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  },
  {
    name: "Arjun Mehta",
    specialty: "Indian & Vegan",
    recipes: "95+ recipes",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  },
];

const stats = [
  { label: "Recipes Shared", value: "2,500+" },
  { label: "Home Cooks", value: "40,000+" },
  { label: "Cuisines Covered", value: "60+" },
  { label: "Average Rating", value: "4.8/5" },
];

const steps = [
  {
    icon: SearchIcon,
    title: "Discover",
    description:
      "Browse thousands of recipes by cuisine, diet, or craving until something catches your eye.",
  },
  {
    icon: ChefHatIcon,
    title: "Cook",
    description:
      "Follow clear, step-by-step instructions written by real home cooks and chefs.",
  },
  {
    icon: ShareIcon,
    title: "Share",
    description:
      "Save your favorites, leave a review, and share your own recipes with the community.",
  },
];

const testimonials = [
  {
    name: "Amara Chen",
    role: "Home Cook",
    quote:
      "This site completely changed how I cook for my family. Every recipe just works.",
  },
  {
    name: "David Kim",
    role: "Food Blogger",
    quote:
      "The premium recipes are worth every penny. Restaurant-quality food at home.",
  },
  {
    name: "Priya Patel",
    role: "Busy Parent",
    quote:
      "I love how easy it is to find exactly what I'm craving in just a few minutes.",
  },
];

export default async function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-secondary">
        {/* decorative dot-grid texture */}
        <div
          className="absolute inset-0 opacity-60 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[22px_22px] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
          aria-hidden
        />
        {/* decorative glow blobs */}
        <div
          className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <ChefHatIcon className="size-3.5" />
              New recipes added every week
            </span>

            <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
              Cook Something{" "}
              <span className="relative inline-block text-primary">
                Wonderful
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/50"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C40 2 90 2 100 6C110 10 160 2 198 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Today
            </h1>

            <p className="text-balance text-muted-foreground sm:text-lg">
              Discover tried-and-tested recipes from home cooks and chefs
              around the world. Find your next favorite dish, one recipe at a
              time.
            </p>

            <HeroSearch />

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/news">
                <Button size="lg">Browse Recipes</Button>
              </Link>
              <Link href="/premium">
                <Button size="lg" variant="outline">
                  Explore Premium
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2 lg:justify-start">
              <div className="flex -space-x-3">
                {heroAvatars.map((avatar) => (
                  <Image
                    key={avatar}
                    src={avatar}
                    unoptimized
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover ring-2 ring-secondary"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Loved by 40,000+ home cooks
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              className="pointer-events-none absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[3rem_1rem_3rem_1rem] bg-primary/15"
              aria-hidden
            />
            <Image
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&auto=format&fit=crop&q=60"
              unoptimized
              alt="A beautifully plated home-cooked meal"
              width={800}
              height={600}
              className="h-72 w-full rounded-[3rem_1rem_3rem_1rem] object-cover shadow-xl sm:h-96"
              priority
            />

            <Card className="absolute -top-6 -left-6 hidden gap-2 py-3 shadow-lg sm:flex sm:flex-row sm:items-center">
              <CardContent className="flex items-center gap-3 px-4">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                  <SoupIcon className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Trending Now
                  </p>
                  <p className="text-sm font-medium">Margherita Pizza</p>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -right-4 -bottom-6 gap-2 py-3 shadow-lg">
              <CardContent className="flex items-center gap-3 px-4">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <StarIcon className="size-4 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-medium">4.9 Rating</p>
                  <p className="text-xs text-muted-foreground">
                    2,500+ Recipes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* wave divider */}
        <svg
          className="relative block h-10 w-full text-background sm:h-14"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 30C240 60 480 0 720 15C960 30 1200 60 1440 30V60H0V30Z"
            fill="currentColor"
          />
        </svg>
      </section>

      {/* 2. Trust / Stats bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-border bg-card px-6 py-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-semibold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Food gallery */}
      <section className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl space-y-2 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            A Taste of What&apos;s Cooking
          </h2>
          <p className="text-sm text-muted-foreground">
            A glimpse into the dishes our community is cooking up right now.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
          {galleryImages.map((image) => (
            <Link
              key={image.src}
              href="/news"
              className={`group relative block overflow-hidden rounded-2xl ${image.span}`}
            >
              <Image
                src={image.src}
                unoptimized
                alt={image.alt}
                width={500}
                height={500}
                className="h-full min-h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {image.alt}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Featured recipes */}
      <section className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">
              Featured Recipes
            </h2>
            <p className="text-sm text-muted-foreground">
              Hand-picked favorites from our community.
            </p>
          </div>
          <Link
            href="/news"
            className="mx-auto text-sm font-medium text-primary hover:underline sm:mx-0"
          >
            View all recipes &rarr;
          </Link>
        </div>

        <Suspense fallback={<NewsSkeleton />}>
          <PublicNewsList />
        </Suspense>
      </section>

      {/* 5. How it works */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl space-y-2 text-center">
            <h2 className="text-xl font-semibold sm:text-2xl">
              How It Works
            </h2>
            <p className="text-sm text-muted-foreground">
              Three simple steps between you and your next favorite meal.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="relative mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-7" />
                    <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-card text-xs font-semibold text-foreground ring-1 ring-border">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why cook with us */}
      <section className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl space-y-2 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Why Cook With Us
          </h2>
          <p className="text-sm text-muted-foreground">
            A few reasons home cooks keep coming back.
          </p>
        </div>
        <FeatureTimeline />
      </section>

      {/* 7. Testimonials */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl space-y-2 text-center">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Loved by Home Cooks
            </h2>
            <p className="text-sm text-muted-foreground">
              Don&apos;t just take our word for it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="space-y-4">
                  <QuoteIcon className="size-6 text-primary/60" />
                  <div className="flex gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Meet our chefs */}
      <section className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl space-y-2 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">
            Meet Our Chefs
          </h2>
          <p className="text-sm text-muted-foreground">
            The talented cooks behind your favorite recipes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {chefs.map((chef) => (
            <Card key={chef.name}>
              <CardContent className="flex flex-col items-center gap-2 text-center">
                <Image
                  src={chef.avatar}
                  unoptimized
                  alt={chef.name}
                  width={72}
                  height={72}
                  className="size-18 rounded-full object-cover ring-2 ring-primary/10"
                />
                <h3 className="font-medium">{chef.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {chef.specialty}
                </p>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  <ChefHatIcon className="size-3" />
                  {chef.recipes}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 9. Premium CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Unlock Premium Recipes
          </h2>
          <p className="max-w-xl text-balance text-primary-foreground/90">
            Get exclusive access to chef-crafted recipes, ad-free browsing,
            and early access to new dishes.
          </p>
          <Link href="/premium">
            <Button
              size="lg"
              variant="secondary"
              className="text-secondary-foreground"
            >
              Go Premium
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
