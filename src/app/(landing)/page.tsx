import Link from "next/link";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full gap-5">
      <h1 className="text-xl font-bold text-center mt-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-orange-700">
        Im come back baby.
      </h1>

      <ThemeToggle />

      <div className="flex gap-4">
        <Link href={"/sign-in"}>
          <Button className="rounded-xl" size={"lg"}>
            Sign In
          </Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button className="rounded-xl" size={"lg"}>
            Register
          </Button>
        </Link>
      </div>
    </main>
  );
}
