"use client";

import { FC, useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";

import SideBar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileSideBarProps {
  userApiLimitCount: number;
}

const MobileSideBar: FC<MobileSideBarProps> = ({ userApiLimitCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>
        <Button
          variant="outline"
          size="icon"
          className="rounded-xl text-gray-600 dark:text-gray-300"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar
          userApiLimitCount={userApiLimitCount}
          onChange={() => setIsOpen(false)}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
