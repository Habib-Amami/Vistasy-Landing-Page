import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
    const t = await getTranslations("Metadata.contact");
    return {
        title: t("title"),
        description: t("description"),
    };
}

import ContactClient from "@/components/contact/ContactClient";

export default function Contact() {
    return <ContactClient />;
}
