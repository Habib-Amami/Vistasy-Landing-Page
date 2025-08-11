import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { PricingCard } from "@/components/pricing/pricing-card";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.pricing");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: 'https://www.vistasy.clinic/en/pricing',
    },
  };
}

export default function Pricing() {
  const t = useTranslations("PricingPage");

  return (
    <main className="max-w-6xl mx-auto p-8 lg:p-16">
      <h1 className="uppercase text-2xl text-center lg:text-4xl font-extrabold">
        {t("title")}
      </h1>
      <h2 className="uppercase p-8 text-sm text-center lg:text-md font-medium">
        {t("subtitle")}
      </h2>

      <div className="mb-6 flex justify-center">
        <Image
          src="/features/line-blue.svg"
          alt="image_alt"
          width={400}
          height={16}
          className="object-contain mb-6"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PricingCard
          title={t("cards.hardware.title")}
          subtitle={t("cards.hardware.subtitle")}
          subtitleDescription={t("cards.hardware.subtitle_description")}
          icon="monitor"
          cardColor="#B366FF"
          features={[
            {
              text: t("cards.hardware.features.label"),
              isList: true,
              listItems: [
                t("cards.hardware.features.list_items.0"),
                t("cards.hardware.features.list_items.1"),
                t("cards.hardware.features.list_items.2"),
                t("cards.hardware.features.list_items.3"),
                t("cards.hardware.features.list_items.4")
              ]
            }
          ]}
          buttonText={t("cards.hardware.button_text")}
        />
        <PricingCard
          title={t("cards.service.title")}
          subtitle={t("cards.service.subtitle")}
          subtitleDescription={t("cards.service.subtitle_description")}
          icon="briefcase"
          cardColor="#4DA1FF"
          features={[
            t("cards.service.features.0"),
            t("cards.service.features.1"),
            t("cards.service.features.2"),
            t("cards.service.features.3")
          ]}
          buttonText={t("cards.service.button_text")}
        />
        <PricingCard
          title={t("cards.software.title")}
          subtitle={t("cards.software.subtitle")}
          subtitleDescription={t("cards.software.subtitle_description")}
          icon="cloud"
          cardColor="#FFAB65"
          features={[
            t("cards.software.features.0"),
            t("cards.software.features.1")
          ]}
          buttonText={t("cards.software.button_text")}
        />
      </div>
    </main>
  );
}
