"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/constant";
import Logo from "@/components/logo";
import PremiumUser from "@/components/premium-user";

interface SideBarProps {
  userApiLimitCount: number;
  onChange?: () => void;
}

const SideBar: FC<SideBarProps> = ({ userApiLimitCount, onChange }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-full h-full px-5 lg:px-8 py-6">
      <Logo />

      <div className="space-y-2 flex-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            onClick={onChange}
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
