import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavBar from "@/components/navbar/navbar";

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Validate locale
    if (!routing.locales.includes(params.locale as (typeof routing.locales)[number])) {
        notFound();
    }

    // Load messages for the current locale
    const messages = (await import(`@/messages/${params.locale}.json`)).default;

    return (
        <NextIntlClientProvider locale={params.locale} messages={messages}>
            <NavBar />
            {children}
        </NextIntlClientProvider>
    );
}
