"use client";

import { MenuIcon } from "lucide-react";

import SideBar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileSideBarProps {
  userApiLimitCount: number;
}

const MobileSideBar = ({ userApiLimitCount }: MobileSideBarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-xl text-gray-600 dark:text-gray-300"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar userApiLimitCount={userApiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
