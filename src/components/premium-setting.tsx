import { checkUserApiLimit } from "@/lib/api-limit";
import PremiumButton from "@/components/premium-button";

const PremiumSetting = async () => {
  const isPro = await checkUserApiLimit();

  return (
    <div className="flex items-center gap-2">
      <h3>
        {isPro ? "You are currently pro plan." : "You are currently free plan"}
      </h3>
      <PremiumButton isPro={isPro!} />
    </div>
  );
};

export default PremiumSetting;