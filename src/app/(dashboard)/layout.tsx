import React from "react";
import { UserButton } from "@clerk/nextjs";

import SideBar from "@/components/sidebar";
import ThemeToggle from "@/components/theme-toggle";
import MobileSideBar from "@/components/mobile-sidebar";
import { userApiLimitCount } from "@/lib/api-limit";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await userApiLimitCount();

  return (
    <div className="flex relative h-full">
      <div className="hidden md:w-64 lg:w-72 md:flex md:items-center md:fixed md:inset-y-0 border-r border-zinc-300 dark:border-zinc-800">
        <SideBar userApiLimitCount={apiLimitCount} />
      </div>

      <div className="w-full lg:max-w-7xl mx-auto md:pl-64 lg:pl-72">
        <nav className="flex items-center justify-between md:justify-end px-5 pt-3">
          <div className="flex md:hidden">
            <MobileSideBar userApiLimitCount={apiLimitCount} />
          </div>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>

        <main className="mx-3">{children}</main>
      </div>
    </div>
  );
}
