"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSearch = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (value) params.set("searchTerm", value);
    router.push(`/news?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md items-center gap-1.5 rounded-full border border-border bg-background p-1.5 shadow-sm lg:mx-0"
    >
      <SearchIcon className="ml-2 size-4 shrink-0 text-muted-foreground" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a recipe... e.g. Pasta"
        className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
      <Button type="submit" size="sm" className="shrink-0 rounded-full">
        Search
      </Button>
    </form>
  );
};

export default HeroSearch;
