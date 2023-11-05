"use client";

import React from "react";
import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";

interface PremiumSettingProps {
  isPro: boolean;
}

const PremiumSetting: React.FC<PremiumSettingProps> = ({ isPro }) => {
  const proModal = useProModal();

  return (
    <>
      <h3>
        {isPro ? "You are currently pro plan." : "You are currently free plan"}
      </h3>
      {isPro ? (
        <Button className="rounded-xl px-7">Manage</Button>
      ) : (
        <Button
          onClick={proModal.onOpen}
          variant="preminum"
          className="rounded-xl px-7 text-white"
        >
          Upgrade
          <Zap className="w-4 h-4 ml-2 fill-white" />
        </Button>
      )}
    </>
  );
};

export default PremiumSetting;
