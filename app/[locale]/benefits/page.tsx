import { getTranslations } from "next-intl/server";

import BenefitsClient from "@/components/benefits/BenefitsClient";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.benefits");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: 'https://www.vistasy.clinic/en/benefits',
    },
  };
}

export default function Benefits() {

  return (
    <BenefitsClient/>    
  );
}
