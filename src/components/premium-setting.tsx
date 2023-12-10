"use client";

import { FC } from "react";
import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";

interface PremiumSettingProps {
  isPro: boolean;
  loading?: boolean;
  onSubscribe?: () => Promise<void>;
}

const PremiumSetting: FC<PremiumSettingProps> = ({
  isPro,
  loading,
  onSubscribe,
}) => {
  const proModal = useProModal();

  return (
    <>
      <h3>
        {isPro ? "You are currently pro plan." : "You are currently free plan"}
      </h3>
      {isPro ? (
        <Button
          disabled={loading}
          onClick={onSubscribe}
          className="rounded-xl px-7"
        >
          Manage
        </Button>
      ) : (
        <div className="relative group">
          <div className="absolute -inset-0.5 opacity-70 group-hover:opacity-100 bg-gradient-to-r from-red-500 to-violet-500 rounded-xl blur-xl transition duration-700 group-hover:duration-200" />
          <Button
            onClick={proModal.onOpen}
            variant="preminum"
            className="relative rounded-xl px-7 text-white w-[180px]"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </div>
      )}
    </>
  );
};

export default PremiumSetting;
