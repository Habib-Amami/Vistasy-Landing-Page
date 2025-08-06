import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.solution");
  return {
    title: t("title"),
    description: t("description"),
  };
}

import SolutionClient from "../../../components/solution/SolutionClient";

export default function Solution() {
  return <SolutionClient />;
}
