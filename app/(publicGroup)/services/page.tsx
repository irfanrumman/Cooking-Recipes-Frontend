import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpenIcon,
  CalendarCheckIcon,
  GraduationCapIcon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BookOpenIcon,
    title: "Recipe Publishing",
    description:
      "Share your own recipes with our community as an author. Reach thousands of home cooks looking for their next meal.",
    cta: { label: "Become an Author", href: "/register" },
  },
  {
    icon: CalendarCheckIcon,
    title: "Meal Planning",
    description:
      "Browse curated collections and weekly menus to take the guesswork out of what to cook next.",
    cta: { label: "Browse Recipes", href: "/news" },
  },
  {
    icon: SparklesIcon,
    title: "Premium Membership",
    description:
      "Unlock exclusive, chef-crafted recipes, ad-free browsing, and early access to new dishes.",
    cta: { label: "Go Premium", href: "/premium" },
  },
  {
    icon: GraduationCapIcon,
    title: "Cooking Guides",
    description:
      "Step-by-step techniques and tips woven into our recipes to help you build real kitchen confidence.",
    cta: { label: "Start Learning", href: "/news" },
  },
];

const ServicesPage = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl space-y-3 text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">Our Services</h1>
        <p className="text-balance text-muted-foreground sm:text-lg">
          Everything we offer to help you find, cook, and share great food.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title}>
              <CardContent className="space-y-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-medium">{service.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <Link href={service.cta.href}>
                  <Button variant="outline" size="sm">
                    {service.cta.label}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
