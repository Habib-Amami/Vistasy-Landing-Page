import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import BenefitCard from "@/components/benefits/benefit-card";
import ConnectorSVG from "@/components/benefits/connector-SVG";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.benefits");

  return {
    title: t("title"),
    description: t("description"),
  };
}


export default function Benefits() {
  const t = useTranslations("BenefitsPage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-0 p-8">
      <h1 className="uppercase p-8 text-xl text-center lg:text-start lg:text-4xl font-extrabold">
        {t("title")}
      </h1>

      <div className="mb-6 flex justify-center md:justify-start">
        <Image
          src="/features/line-purple.svg"
          alt="image_alt"
          width={400}
          height={16}
          className="object-contain mb-6"
        />
      </div>

      {/* Layout for sm/md */}
      {/* Card 1*/}
      <div className="flex flex-col items-center w-full max-w-xl lg:hidden pb-8">
        <BenefitCard
          stepNumber="01"
          title={t("cards.01.title")}
          description={t("cards.01.description")}
          imageSrc="/benefits/character-pointing-at-door.svg"
          imageAlt="A character in a purple outfit pointing at a door with a circular window in the background."
          colorClass="bg-c-purple"
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-xl lg:hidden pb-8">
        <BenefitCard
          stepNumber="02"
          title={t("cards.02.title")}
          description={t("cards.02.description")}
          imageSrc="/benefits/digital-security-concept.svg"
          imageAlt="Illustration of a person using a laptop with a shield symbolizing digital security."
          colorClass="bg-c-blue"
          reverseLayout
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-xl lg:hidden pb-8">
        <BenefitCard
          stepNumber="03"
          title={t("cards.03.title")}
          description={t("cards.03.description")}
          imageSrc="/benefits/urban-lifestyle-illustration.svg"
          imageAlt="An artistic depiction of a person in an urban setting with a heart, bell, and upward arrows."
          colorClass="bg-c-orange"
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-xl lg:hidden pb-8">
        <BenefitCard
          stepNumber="04"
          title={t("cards.04.title")}
          description={t("cards.04.description")}
          imageSrc="/benefits/modern-illustration-working-professional.svg"
          imageAlt="A modern illustration of a professional working with geometric shapes and digital elements in a creative environment."
          colorClass="bg-c-purple"
          reverseLayout
        />
      </div>
      <div className="flex flex-col items-center w-full max-w-xl lg:hidden">
        <BenefitCard
          stepNumber="05"
          title={t("cards.05.title")}
          description={t("cards.05.description")}
          imageSrc="/benefits/business-analytics-illustration.svg"
          imageAlt="Illustration of a person sitting next to a pie chart and clouds, representing business analytics."
          colorClass="bg-c-blue"
        />
      </div>

      {/* Layout for lg* */}
      {/* Card 1*/}
      <div className="hidden lg:flex w-full max-w-5xl">
        <div className="w-3/4">
          <BenefitCard
            stepNumber="01"
            title={t("cards.01.title")}
            description={t("cards.01.description")}
            imageSrc="/benefits/character-pointing-at-door.svg"
            imageAlt="A character in a purple outfit pointing at a door with a circular window in the background."
            colorClass="bg-c-purple"
          />
        </div>
        <ConnectorSVG direction="left" color="#B366FF" />
        <div className="w-1/4" />
      </div>
      {/* Card 2 */}
      <div className="hidden lg:flex w-full max-w-5xl justify-end">
        <div className="w-1/4" />
        <ConnectorSVG direction="right" color="#5E9EFF" />
        <div className="w-3/4">
          <BenefitCard
            stepNumber="02"
            title={t("cards.02.title")}
            description={t("cards.02.description")}
            imageSrc="/benefits/digital-security-concept.svg"
            imageAlt="Illustration of a person using a laptop with a shield symbolizing digital security."
            colorClass="bg-c-blue"
            reverseLayout
          />
        </div>
      </div>
      {/* Card 3 */}
      <div className="hidden lg:flex w-full max-w-5xl">
        <div className="w-3/4">
          <BenefitCard
            stepNumber="03"
            title={t("cards.03.title")}
            description={t("cards.03.description")}
            imageSrc="/benefits/urban-lifestyle-illustration.svg"
            imageAlt="An artistic depiction of a person in an urban setting with a heart, bell, and upward arrows."
            colorClass="bg-c-orange"
          />
        </div>
        <ConnectorSVG direction="left" color="#FFA347" />
        <div className="w-1/4" />
      </div>
      {/* Card 4 */}
      <div className="hidden lg:flex w-full max-w-5xl justify-end">
        <div className="w-1/4" />
        <ConnectorSVG direction="right" color="#B366FF" />
        <div className="w-3/4">
          <BenefitCard
            stepNumber="04"
            title={t("cards.04.title")}
            description={t("cards.04.description")}
            imageSrc="/benefits/modern-illustration-working-professional.svg"
            imageAlt="A modern illustration of a professional working with geometric shapes and digital elements in a creative environment."
            colorClass="bg-c-purple"
            reverseLayout
          />
        </div>
      </div>
      {/* Card 5 */}
      <div className="hidden lg:flex w-full max-w-5xl">
        <div className="w-3/4">
          <BenefitCard
            stepNumber="05"
            title={t("cards.05.title")}
            description={t("cards.05.description")}
            imageSrc="/benefits/business-analytics-illustration.svg"
            imageAlt="Illustration of a person sitting next to a pie chart and clouds, representing business analytics."
            colorClass="bg-c-blue"
          />
        </div>
        <div className="w-1/4" />
      </div>
    </main>
  );
}
