"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/constant";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>

      <div className="px-5 md:px-20 lg:px-32 xl:px-52 space-y-4">
        {routes.map((route) => (
          <Card
            key={route.href}
            onClick={() => router.push(route.href)}
            className="p-2 border-black/5 dark:border-gray-900 flex items-center justify-between hover:shadow-md dark:hover:shadow-gray-900 transition cursor-pointer rounded-xl"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-xl", route.bgcolor)}>
                <route.icon className={cn("w-7 h-7", route.color)} />
              </div>
              <div className="font-semibold">{route.name}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </>
  );
}
