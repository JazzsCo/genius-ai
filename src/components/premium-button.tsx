import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const PremiumButton = ({ isPro }: { isPro: boolean }) => {
  return (
    <>
      {isPro ? (
        <Button className="rounded-xl px-7">Manage</Button>
      ) : (
        <Button variant="preminum" className="rounded-xl px-7">
          Upgrade
          <Zap className="w-4 h-4 ml-2 fill-white" />
        </Button>
      )}
    </>
  );
};

export default PremiumButton;
