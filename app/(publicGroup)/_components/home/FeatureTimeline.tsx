"use client";

import { ChefHatIcon, ClockIcon, SparklesIcon, UsersIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: ChefHatIcon,
    title: "Tested Recipes",
    description: "Every recipe is tried and refined before it's published.",
  },
  {
    icon: UsersIcon,
    title: "Community Driven",
    description: "Built by home cooks, for home cooks, around the world.",
  },
  {
    icon: ClockIcon,
    title: "Quick & Easy",
    description: "Clear instructions that save you time in the kitchen.",
  },
  {
    icon: SparklesIcon,
    title: "Premium Content",
    description: "Exclusive, chef-crafted recipes for our subscribers.",
  },
];

const FeatureTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const updateProgress = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const value =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);
      setProgress(Math.min(1, Math.max(0, value)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* track line */}
      <div className="absolute top-0 left-5.5 h-full w-0.5 -translate-x-1/2 bg-border sm:left-1/2" />
      {/* scroll-filled progress line */}
      <div
        className="absolute top-0 left-5.5 w-0.5 -translate-x-1/2 bg-primary shadow-[0_0_8px_var(--primary)] transition-[height] duration-150 ease-out sm:left-1/2"
        style={{ height: `${progress * 100}%` }}
      />

      <div className="space-y-6 sm:space-y-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isRight = index % 2 === 1;
          const threshold =
            features.length === 1 ? 1 : index / (features.length - 1);
          const isActive = progress >= threshold - 0.06;

          return (
            <div
              key={feature.title}
              className="flex items-start gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6"
            >
              <div className="shrink-0 sm:col-start-2 sm:justify-self-center">
                <div
                  className={`relative flex size-11 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-linear-to-br from-primary to-primary/70 text-primary-foreground shadow-[0_0_16px_-2px_var(--primary)]"
                      : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  <Icon className="size-5" />
                </div>
              </div>

              <div
                className={`sm:row-start-1 ${
                  isRight ? "sm:col-start-3 sm:mr-auto" : "sm:col-start-1 sm:ml-auto"
                } sm:w-full sm:max-w-sm`}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border bg-card p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 ${
                    isActive ? "border-primary/30" : "border-border"
                  }`}
                >
                  <span
                    className={`pointer-events-none absolute top-2 text-6xl leading-none font-bold text-primary/5 transition-colors duration-300 select-none group-hover:text-primary/10 sm:text-7xl ${
                      isRight ? "sm:right-3" : "sm:left-3"
                    } right-3`}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative flex items-center gap-2.5">
                    <div
                      className={`flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 sm:hidden ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <h3 className="font-medium">{feature.title}</h3>
                  </div>
                  <p className="relative mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureTimeline;
