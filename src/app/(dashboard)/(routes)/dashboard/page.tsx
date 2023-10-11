import React from "react";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="text-lg font-medium text-green-600 text-center mt-4 gap-3">
      HomePage
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
