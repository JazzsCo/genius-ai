import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const Logo = () => {
  return (
    <div>
      <Link href={"/"} className="flex w-fit space-x-2 mb-8">
        <div className="relative h-7 w-7">
          <Image fill alt="Logp" src={"/favicon-dev.png"} />
        </div>
        <h2
          className={cn(
            "flex items-center text-lg font-medium",
            poppins.className
          )}
        >
          Genius AI
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
