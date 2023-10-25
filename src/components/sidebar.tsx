"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { routes } from "@/constant";
import PremiumUser from "@/components/premium-user";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

interface SideBarProps {
  userApiLimitCount: number;
}

const SideBar = ({ userApiLimitCount }: SideBarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full h-full px-5 lg:px-8 py-6">
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

      <div className="space-y-2 flex-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "p-3 px-5 lg:px-7 flex space-x-4 lg:space-x-5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 group",
              pathname === route.href ? "bg-slate-200 dark:bg-slate-700" : ""
            )}
          >
            <route.icon className={cn("w-5 h-5", route.color)} />
            <h4
              className={cn(
                "text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200",
                pathname === route.href
                  ? "text-gray-900 dark:text-gray-200"
                  : ""
              )}
            >
              {route.name}
            </h4>
          </Link>
        ))}
      </div>

      <PremiumUser userApiLimitCount={userApiLimitCount} />
    </div>
  );
};

export default SideBar;
