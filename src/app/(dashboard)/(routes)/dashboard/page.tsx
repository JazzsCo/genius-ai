"use client";

import { useTheme } from "next-themes";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/constant";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false);

  const theme = useTheme().theme;
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>

      <div className="px-5 md:px-20 space-y-4">
        {routes
          .filter((route) => route.name !== "Setting")
          .map((route) => (
            <Card
              key={route.href}
              onClick={() => router.push(route.href)}
              className="p-2 sm:p-3 border-black/5 dark:border-gray-900 flex items-center justify-between hover:shadow-md dark:hover:shadow-gray-900 transition cursor-pointer rounded-xl"
            >
              <div className="flex items-center gap-x-4 sm:gap-x-3">
                <div
                  className={`p-2 w-fit rounded-xl ${
                    theme === "dark" ? route.darkbgcolor : route.bgcolor
                  }`}
                >
                  <route.icon
                    className={cn("w-5 h-5 sm:w-7 sm:h-7", route.color)}
                  />
                </div>
                <div className="font-semibold text-ellipsis overflow-hidden">
                  {route.name}
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
      </div>
    </div>
  );
}
