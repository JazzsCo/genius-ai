import axios from "axios";

import PremiumSetting from "@/components/premium-setting";
import { checkSubscription } from "@/lib/subscription";

export default async function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isPro = await checkSubscription();

  const onSubscribe = async () => {
    try {
      // setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("Error", error);
    } finally {
      // setLoading(false);
    }
  };

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
}
