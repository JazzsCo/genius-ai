"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import CutieBotAI from "@/assets/Animation - 1702109609276.json";
import AiBuilder from "@/assets/Animation - 1702109673704.json";

export default function Home() {
  const { isSignedIn } = useAuth();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="mt-16 flex flex-col justify-center items-center">
      <div>
        <h2 className="text-2xl sm:text-5xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light mt-3 md:text-xl text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="mt-3 relative group">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <div className="absolute -inset-0.5 opacity-70 group-hover:opacity-100 bg-gradient-to-r from-red-500 to-violet-500 rounded-xl blur-xl transition duration-700 group-hover:duration-200" />
          <Button
            variant="preminum"
            size="lg"
            className="relative rounded-xl text-white font-semibold"
          >
            Use This AI For Free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
      <section className="mt-24 flex flex-col items-center justify-around md:flex-row space-y-10 md:space-x-10 transition-all ease-in-out">
        <div className="space-y-5 w-2/4 flel flex-col justify-center">
          <div className="space-y-5 text-center md:text-left transition-all">
            <h2 className="text-3xl font-bold">
              Welcome to Genius AI - Whe &rarr;re Innovation Meets Intelligence!
            </h2>
            <p className="text-muted-foreground">
              Join the Genius AI community and embark on a journey of AI
              innovation. Whether you&rsquo;re a seasoned developer or just
              getting started, our platform provides the tools and support you
              need to bring your ideas to life. Start building intelligent
              applications that shape the future.
            </p>
          </div>
        </div>

        <div className="w-[220px] sm:w-[300px] md:w-[400px]">
          <Lottie animationData={AiBuilder} />
        </div>
      </section>
    </main>
  );
}
