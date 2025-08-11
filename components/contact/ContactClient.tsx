'use client'

import { useState } from "react";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact/contact-dialog";

import { MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";

import { ContactPayload, sendContactForm } from "@/service/contact_service";




export default function ContactClient() {
    const t = useTranslations("ContactPage");

    const [loading, setLoading] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogSuccess, setDialogSuccess] = useState(true);

    // Define your Zod schema for validation
    const contactFormSchema = z.object({
        name: z.string().min(1, t("form.errors.name_required")),
        email: z.email(t("form.errors.email_invalid")).min(1, t("form.errors.email_required")),
        message: z.string().min(1, t("form.errors.message_required")),
    });

    type ContactFormInputs = z.infer<typeof contactFormSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactFormSchema),
        mode: "onTouched", // validate fields on blur
    });

    const onSubmit = async (data: ContactFormInputs) => {
        setLoading(true);

        const payload: ContactPayload = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        const success = await sendContactForm(payload);
        setDialogSuccess(success);

        if (success) {
            reset();
        }

        setLoading(false);
        setDialogOpen(true);
    };

    return (
        <main className="max-w-5xl mx-auto p-16 lg:p-0">
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
                <div className="flex-1 w-full">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 flex items-center">
                        {t("title")}
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                        <div>
                            <Label htmlFor="name">{t("form.name_label")}</Label>
                            <Input
                                id="name"
                                {...register("name")}
                                className={`mt-2 h-12 rounded-sm border-black dark:border-white ${errors.name ? "border-red-500" : ""
                                    }`}
                                aria-invalid={errors.name ? "true" : "false"}
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && (
                                <p className="mt-1 text-red-600 text-sm" id="name-error">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="email">{t("form.email_label")}</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                className={`mt-2 h-12 rounded-sm border-black dark:border-white ${errors.email ? "border-red-500" : ""
                                    }`}
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && (
                                <p className="mt-1 text-red-600 text-sm" id="email-error">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="message">{t("form.message_label")}</Label>
                            <Textarea
                                id="message"
                                {...register("message")}
                                rows={6}
                                className={`mt-2 rounded-sm border-black dark:border-white ${errors.message ? "border-red-500" : ""
                                    }`}
                                aria-invalid={errors.message ? "true" : "false"}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            />
                            {errors.message && (
                                <p className="mt-1 text-red-600 text-sm" id="message-error">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            disabled={loading || !isValid}
                            className="bg-c-orange flex items-center gap-2"
                        >
                            <MousePointerClick fill="currentcolor" />
                            {loading ? "Sending..." : t("form.submit_button")}
                        </Button>
                    </form>

                    <p className="mt-6 text-sm text-gray-600 dark:text-gray-300">
                        {t("contact_paragraph")}{" "}
                        <a
                            href="mailto:hr@vistasy.clinic"
                            className="font-bold text-gray-900 dark:text-gray-300 hover:underline"
                        >
                            hr@vistasy.clinic
                        </a>
                    </p>
                </div>

                <div className="flex-1 flex items-center justify-center p-8">
                    <Image
                        src="/contact/hands-typing-on-laptop.png"
                        alt="Close-up of hands typing on a laptop keyboard."
                        width={400}
                        height={200}
                        className="object-contain"
                    />
                </div>
            </div>
            <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} success={dialogSuccess} />
        </main>
    );
}
