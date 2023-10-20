import { MAX_FREE_COUNTS } from "@/constant";
import { Button } from "@/components/ui/button";

interface PremiumUserProps {
  userApiLimitCount?: number;
}

const PremiumUser = ({ userApiLimitCount }: PremiumUserProps) => {
  return (
    <div className="w-full rounded-xl p-5 text-center text-sm space-y-2 bg-white/5">
      <p>
        {userApiLimitCount} / {MAX_FREE_COUNTS} Free Generations
      </p>
      <Button className="rounded-xl w-full">Upgrade</Button>
    </div>
  );
};

export default PremiumUser;
