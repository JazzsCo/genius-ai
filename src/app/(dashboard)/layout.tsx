import React from "react";
import { UserButton } from "@clerk/nextjs";

import SideBar from "@/components/sidebar";
import MobileSideBar from "@/components/mobile-sidebar";
import { ThemeButton } from "@/components/theme-button";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative h-full">
      <div className="hidden md:w-64 lg:w-72 md:flex md:fixed md:inset-y-0 border-r border-zinc-300 dark:border-zinc-800">
        <SideBar />
      </div>
      <div className="flex md:pl-64 lg:pl-72 mt-5">
        <div className="flex md:hidden">
          <MobileSideBar />
        </div>
        <ThemeButton />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
