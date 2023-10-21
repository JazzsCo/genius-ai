import { Zap } from "lucide-react";

import { MAX_FREE_COUNTS } from "@/constant";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface PremiumUserProps {
  userApiLimitCount: number;
}

const PremiumUser = ({ userApiLimitCount }: PremiumUserProps) => {
  return (
    <div className="w-full rounded-xl p-5 text-center text-sm space-y-4 bg-black/5 dark:bg-white/10">
      <div className="space-y-1.5">
        <p>
          {userApiLimitCount} / {MAX_FREE_COUNTS} Free Generations
        </p>

        <Progress
          value={(userApiLimitCount / MAX_FREE_COUNTS) * 100}
          className="h-3 text-black/5"
        />
      </div>
      <Button className="rounded-xl w-full bg-gradient-to-r from-pink-500 via-red-400 to-amber-500 text-black/70 font-semibold">
        Upgrade <Zap className="w-4 h-4 ml-2 fill-zinc-700" />
      </Button>
    </div>
  );
};

export default PremiumUser;
