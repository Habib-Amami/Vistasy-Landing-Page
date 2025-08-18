"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Image from "next/image"

interface BenefitCardProps {
  stepNumber: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  colorClass?: string // Example: "bg-c-purple"
  reverseLayout?: boolean
}

const colorMap: Record<string, string> = {
  "bg-c-purple": "#B366FF",
  "bg-c-blue": "#4DA1FF",
  "bg-c-orange": "#FFAB65",
}

export default function BenefitCard({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt,
  colorClass = "bg-c-purple",
  reverseLayout = false,
}: BenefitCardProps) {
  const colorValue = colorMap[colorClass] || "#8B5CF6" // fallback to purple

  return (
    <motion.div
      className={cn("bg-white dark:bg-black relative w-full max-w-2xl rounded-xl border-2 border-black dark:border-white p-6 md:p-12 lg:p-16")}
      style={{
        boxShadow: `8px 8px 0px 0px ${colorValue}`,
      }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1,
      }}
      whileHover={{
        y: -4,
        boxShadow: `12px 12px 0px 0px ${colorValue}`,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.span
        className={cn(
          "absolute top-6 text-lg font-extrabold md:top-8 lg:top-10",
          reverseLayout ? "right-6 md:right-8 lg:right-10" : "left-6 md:left-8 lg:left-10",
        )}
        style={{ color: colorValue }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
      >
        {stepNumber}.
      </motion.span>

      <div
        className={cn(
          "flex flex-col items-center gap-6 pt-10 md:gap-8 md:pt-0",
          reverseLayout ? "md:flex-row-reverse" : "md:flex-row",
        )}
      >
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={200}
            height={200}
            className="rounded-md object-contain"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 text-left"
          initial={{ opacity: 0, x: reverseLayout ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.h2
            className="uppercase font-extrabold text-black dark:text-white text-xl md:text-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text md:text-lg text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}
