import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { checkSubscription } from "@/lib/subscription";

const PremiumButton = async () => {
  const isPro = await checkSubscription();
  return (
    <>
      {isPro ? (
        <Button className="rounded-xl px-7">Manage</Button>
      ) : (
        <Button variant="preminum" className="rounded-xl px-7 text-white">
          Upgrade
          <Zap className="w-4 h-4 ml-2 fill-white" />
        </Button>
      )}
    </>
  );
};

export default PremiumButton;
