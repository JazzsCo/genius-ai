"use client";

import { FC } from "react";
import Image from "next/image";

interface EmptyProps {
  title: string;
}

const Empty: FC<EmptyProps> = ({ title }) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="relative w-64 h-64 md:w-72 md:h-72">
        <Image fill alt="Empty" src={"/empty.png"} />
      </div>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  );
};

export default Empty;
