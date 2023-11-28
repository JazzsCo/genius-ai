"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

const LandingNav = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="relative">
      <div className="absolute top-2 left-0">
        <Logo />
      </div>

      <div className="flex justify-end">
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {isSignedIn ? (
            <Link href="/dashboard">
              <Button
                variant="preminum"
                className="rounded-xl w-full text-white font-semibold"
              >
                Go To Dashboard
              </Button>
            </Link>
          ) : (
            <Link href={"/sign-in"}>
              <Button className="rounded-xl font-semibold" size={"lg"}>
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
