import { Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { checkSubscription } from "@/lib/subscription";

interface SettingLayoutProps {
  children: React.ReactNode;
}

const SettingLayout: React.FC<SettingLayoutProps> = async ({ children }) => {
  const isPro = await checkSubscription();

  return (
    <>
      {children}
      <div className="px-2">
        <div className="flex items-center gap-2">
          <h3>
            {isPro
              ? "You are currently pro plan."
              : "You are currently free plan"}
          </h3>
          {isPro ? (
            <Button className="rounded-xl px-7">Manage</Button>
          ) : (
            <Button variant="preminum" className="rounded-xl px-7 text-white">
              Upgrade
              <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingLayout;
