"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

import SolutionCard1 from "@/components/solution/solution-card-1";

export default function SolutionClient() {
  const { theme } = useTheme();
  const t = useTranslations("SolutionPage");

  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="uppercase p-8 text-xl text-center lg:text-4xl font-extrabold">
        {t("transform_the_customer_experience")}
      </h1>
      <div className="mb-6 flex justify-center">
        <Image
          src="/features/line-purple.svg"
          alt="Decoration line"
          width={400}
          height={16}
          className="object-contain mb-6"
        />
      </div>
      <div className="flex flex-col gap-16 md:gap-32">
        <SolutionCard1
          title={t("OnlineStore.online_store")}
          imageSrc={theme === "dark" ? "/solution/sl1-d.svg" : "/solution/sl1.svg"}
          imageAlt=""
          colorClass="bg-c-purple"
          stats={[
            { value: "25%", label: t("OnlineStore.reduction_churn_rate") },
            { value: "3X", label: t("OnlineStore.increase_on_screen_time") },
            { value: "40%", label: t("OnlineStore.boost_customer_retention_engagement") },
            { value: "27.3%", label: t("OnlineStore.improvement_marketing_efficiency") },
            { value: "30%", label: t("OnlineStore.higher_ROI_targeted_campaigns") },
          ]}
        />
        <SolutionCard1
          title={t("OnsiteStore.onsite_store")}
          imageSrc={theme === "dark" ? "/solution/sl2-d.svg" : "/solution/sl2.svg"}
          imageAlt=""
          colorClass="bg-c-blue"
          reverseLayout={true}
          stats={[
            { value: "30%", label: t("OnsiteStore.reduction_customer_acquisition_costs") },
            { value: "24/7", label: t("OnsiteStore.ai_expert_staff_training") },
            { value: "real-time", label: t("OnsiteStore.real_time_tailored_recommendations") },
            { value: "40%", label: t("OnsiteStore.boost_cross_selling_opportunities") },
            { value: "30%", label: t("OnsiteStore.effective_targeted_marketing") },
          ]}
        />
        <SolutionCard1
          title={t("OnlineOnsiteStores.online_onsite_stores")}
          imageSrc={theme === "dark" ? "/solution/sl3-d.svg" : "/solution/sl3.svg"}
          imageAlt=""
          colorClass="bg-c-orange"
          stats={[
            { value: t("OnlineOnsiteStores.online_store_solution"), label: "" },
            { value: t("OnlineOnsiteStores.onsite_store_solution"), label: "" },
            { value: t("OnlineOnsiteStores.seamless_omni_channel_experience"), label: "" },
            { value: t("OnlineOnsiteStores.enhanced_loyalty_program"), label: "" },
          ]}
        />
      </div>
    </main>
  );
}
