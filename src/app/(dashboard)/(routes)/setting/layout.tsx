import PremiumSetting from "@/components/premium-setting";
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
          <PremiumSetting isPro={isPro} />
        </div>
      </div>
    </>
  );
};

export default SettingLayout;
