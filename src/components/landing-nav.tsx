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

      <div className="hidden sm:flex justify-end transition-all">
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {isSignedIn ? (
            <div className="relative group">
              <Link href="/dashboard">
                <div className="absolute -inset-0.5 opacity-70 group-hover:opacity-100 bg-gradient-to-r from-red-500 to-violet-500 rounded-xl blur-xl transition duration-700 group-hover:duration-200" />
                <Button
                  variant="preminum"
                  className="relative rounded-xl w-full text-white font-semibold ease-linear delay-100"
                >
                  Go To Dashboard
                </Button>
              </Link>
            </div>
          ) : (
            <Link href={"/sign-in"}>
              <Button className="rounded-xl font-semibold" size={"lg"}>
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-end sm:hidden transition-all ease-in-out delay-75">
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
