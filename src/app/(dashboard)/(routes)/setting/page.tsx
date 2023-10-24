"use client";

import { Settings } from "lucide-react";

import Heading from "@/components/heading";
import PremiumSetting from "@/components/premium-setting";

export default function SettingPage() {
  return (
    <div className="h-full px-[10px] md:px-5 mt-4">
      <Heading
        title="Setting"
        description="Manage your payment account 🤑."
        icon={Settings}
        color="text-slate-500"
        bgcolor="bg-slate-700/10"
        darkbgcolor="bg-slate-700/25"
      />

      <div className="px-2">
        <PremiumSetting />
      </div>
    </div>
  );
}
