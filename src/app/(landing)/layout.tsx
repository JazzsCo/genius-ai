import React from "react";

import LandingNav from "@/components/landing-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full lg:max-w-7xl mx-auto p-3 px-7">
      <LandingNav />
      <div>{children}</div>
    </div>
  );
}
