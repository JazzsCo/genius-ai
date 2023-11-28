"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <main className="mt-10 flex flex-col justify-center items-center">
      <div>
        <h2 className="text-2xl sm:text-5xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light mt-3 md:text-xl text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>

      <div className="mt-3">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant="preminum"
            size="lg"
            className="rounded-xl text-white font-semibold"
          >
            Use This AI For Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
