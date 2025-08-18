"use client"

import { useState } from "react"
import Image from "next/image"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import ContactDialog from "@/components/contact/contact-dialog"

import { MousePointerClick } from "lucide-react"
import { useTranslations } from "next-intl"

import { type ContactPayload, sendContactForm } from "@/service/contact_service"
import { motion, AnimatePresence } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
}

const errorVariants = {
  hidden: { opacity: 0, height: 0, y: -10 },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -10,
  },
}

export default function ContactClient() {
  const t = useTranslations("ContactPage")

  const [loading, setLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogSuccess, setDialogSuccess] = useState(true)

  // Define your Zod schema for validation
  const contactFormSchema = z.object({
    name: z.string().min(1, t("form.errors.name_required")),
    email: z.email(t("form.errors.email_invalid")).min(1, t("form.errors.email_required")),
    message: z.string().min(1, t("form.errors.message_required")),
  })

  type ContactFormInputs = z.infer<typeof contactFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched", // validate fields on blur
  })

  const onSubmit = async (data: ContactFormInputs) => {
    setLoading(true)

    const payload: ContactPayload = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    const success = await sendContactForm(payload)
    setDialogSuccess(success)

    if (success) {
      reset()
    }

    setLoading(false)
    setDialogOpen(true)
  }

  return (
    <main className="max-w-5xl mx-auto p-16 lg:p-0">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.2,
        }}
      >
        <motion.div 
          className="flex-1 w-full" 
          variants={itemVariants}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold mb-8 flex items-center" 
            variants={itemVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {t("title")}
          </motion.h1>

          <motion.form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6" 
            noValidate 
            variants={containerVariants}
            transition={{
              staggerChildren: 0.1,
            }}
          >
            <motion.div 
              variants={itemVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Label htmlFor="name">{t("form.name_label")}</Label>
              <motion.div 
                whileFocus={{ scale: 1.02 }} 
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="name"
                  {...register("name")}
                  className={`mt-2 h-12 rounded-sm border-black dark:border-white transition-all duration-200 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </motion.div>
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    className="mt-1 text-red-600 text-sm"
                    id="name-error"
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Label htmlFor="email">{t("form.email_label")}</Label>
              <motion.div 
                whileFocus={{ scale: 1.02 }} 
                transition={{ duration: 0.2 }}
              >
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`mt-2 h-12 rounded-sm border-black dark:border-white transition-all duration-200 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </motion.div>
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    className="mt-1 text-red-600 text-sm"
                    id="email-error"
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Label htmlFor="message">{t("form.message_label")}</Label>
              <motion.div 
                whileFocus={{ scale: 1.02 }} 
                transition={{ duration: 0.2 }}
              >
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={6}
                  className={`mt-2 rounded-sm border-black dark:border-white transition-all duration-200 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
              </motion.div>
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    className="mt-1 text-red-600 text-sm"
                    id="message-error"
                    variants={errorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                transition={{ duration: 0.2 }}
              >
                <Button
                  type="submit"
                  disabled={loading || !isValid}
                  className="bg-c-orange flex items-center gap-2 transition-all duration-200"
                >
                  <motion.div
                    animate={loading ? { rotate: 360 } : { rotate: 0 }}
                    transition={
                      loading
                        ? {
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }
                        : { duration: 0.2 }
                    }
                  >
                    <MousePointerClick fill="currentcolor" />
                  </motion.div>
                  {loading ? "Sending..." : t("form.submit_button")}
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>

          <motion.p 
            className="mt-6 text-sm text-gray-600 dark:text-gray-300" 
            variants={itemVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {t("contact_paragraph")}{" "}
            <motion.a
              href="mailto:hr@vistasy.clinic"
              className="font-bold text-gray-900 dark:text-gray-300 hover:underline"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              hr@vistasy.clinic
            </motion.a>
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex-1 flex items-center justify-center p-8" 
          variants={imageVariants}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/contact/hands-typing-on-laptop.png"
              alt="Close-up of hands typing on a laptop keyboard."
              width={400}
              height={200}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} success={dialogSuccess} />
    </main>
  )
}