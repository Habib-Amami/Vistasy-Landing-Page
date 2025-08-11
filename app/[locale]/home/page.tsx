import { useTranslations } from 'next-intl';
import { getTranslations } from "next-intl/server";

import HeroSection from "@/components/home/hero-section/hero-section";
import Feature from "@/components/home/feature";
import LogoCloud from "@/components/home/logo-cloud";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.home");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <main className="p-8">
            {/*Hero section section*/}
            <section className="max-w-5xl mx-auto pr-8 pl-8 pt-8">
                <HeroSection
                    backgroundImage="/hero-section/abstract-gradient-hero-background.svg"
                    backgroundImageAlt="A close-up image showing a blue and white background with an abstract design. The colors blend seamlessly into each other, creating a visually appealing pattern."
                    foregroundImage="/hero-section/young-woman-taking-selfie.png"
                    foregroundImageAlt="A young woman with blonde hair taking a selfie with a smartphone."
                    title="VISTASY"
                    subTitle={t('slogan')}
                />
            </section>
            {/*Partners section*/}
            <section className="max-w-5xl mx-auto pr-8 pl-8 pt-16">
                <h1 className="uppercase mb-6 text-xl text-center lg:text-start  lg:text-3xl font-bold">{t('partnersTitle')}</h1>
                <LogoCloud />
            </section>
            {/*Features section*/}
            <section>
                <Feature
                    title={t('feature1.title')}
                    description={t('feature1.description')}
                    imageSrc="/features/smartphone-skin-diagnosis-app.png"
                    imageAlt="A smartphone displaying a skin diagnosis app interface with a close-up of a person's face."
                    buttonColor="bg-c-purple"
                />
                <Feature
                    title={t('feature2.title')}
                    description={t('feature2.description')}
                    imageSrc="/features/face-scan-app-interface.png"
                    imageAlt="User interface for facial scanning application with guidelines."
                    reverse={true}
                    buttonColor="bg-c-orange"
                />
                <Feature
                    title={t('feature3.title')}
                    description={t('feature3.description')}
                    imageSrc="/features/facial-diagnosis-image.png"
                    imageAlt="Image showing a facial analysis indicating the presence of dark circles under the eyes."
                    buttonColor="bg-c-blue"
                />
                <Feature
                    title={t('feature4.title')}
                    description={t('feature4.description')}
                    imageSrc="/features/smart-mirror-face-analysis.png"
                    imageAlt="A woman using a smart mirror for face analysis."
                    reverse={true}
                    buttonColor="bg-c-purple"
                />
            </section>
        </main>
    );
}