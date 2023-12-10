"use client";

import axios from "axios";
import { FC } from "react";
import { Zap } from "lucide-react";

import { MAX_FREE_COUNTS } from "@/constant";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";

interface PremiumUserProps {
  userApiLimitCount: number;
}

const PremiumUser: FC<PremiumUserProps> = ({ userApiLimitCount }) => {
  const proModal = useProModal();

  return (
    <div className="w-full rounded-xl p-5 text-center text-sm space-y-4 bg-black/5 dark:bg-white/10">
      <div className="space-y-1.5">
        <p>
          {userApiLimitCount} / {MAX_FREE_COUNTS} Free Generations
        </p>

        <Progress
          value={(userApiLimitCount / MAX_FREE_COUNTS) * 100}
          className="h-3 bg-white dark:bg-secondary"
        />
      </div>
      <div className="relative group">
        <div className="absolute inset-1 opacity-70 group-hover:opacity-100 bg-gradient-to-r from-red-500 to-violet-500 rounded-xl blur-lg transition duration-700 group-hover:duration-200" />
        <Button
          onClick={proModal.onOpen}
          variant="preminum"
          className="relative rounded-xl w-full text-white font-semibold"
        >
          Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
        </Button>
      </div>
    </div>
  );
};

export default PremiumUser;
