"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgcolor?: string;
  darkbgcolor?: string;
}

const Heading: FC<HeadingProps> = ({
  title,
  description,
  icon: Icon,
  color,
  bgcolor,
  darkbgcolor,
}) => {
  const theme = useTheme().theme;

  return (
    <div className="flex items-center space-x-3 mb-6">
      <div
        className={`p-2 lg:p-3 w-fit rounded-xl ${
          theme === "dark" ? darkbgcolor : bgcolor
        }`}
      >
        <Icon className={cn("w-5 h-5 sm:w-7 sm:h-7", color)} />
      </div>
      <div>
        <h1 className="font-bold text-sm md:text-base lg:text-xl">{title}</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
