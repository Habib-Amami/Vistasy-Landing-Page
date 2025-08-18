"use client"

import type React from "react"
import Image from "next/image"

import { useTranslations } from "next-intl"

import { MousePointer2 } from "lucide-react"
import { motion, type Variants } from "motion/react"
import { Button } from "../ui/button"

interface FeatureProps {
  reverse?: boolean
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  buttonColor?: string
}

const colorToSvgMap: Record<string, string> = {
  "bg-c-purple": "/features/line-purple.svg",
  "bg-c-blue": "/features/line-blue.svg",
  "bg-c-orange": "/features/line-orange.svg",
}

const Feature: React.FC<FeatureProps> = ({
  reverse = false,
  imageSrc,
  imageAlt,
  title,
  description,
  buttonColor = "bg-c-purple",
}) => {
  const svgSrc = colorToSvgMap[buttonColor]
  const t = useTranslations("HomePage")

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className={`flex justify-between items-center gap-6 p-6 max-w-5xl mx-auto flex-col md:flex-row 
        ${reverse ? "md:flex-row-reverse" : ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Image */}
      <motion.div
        className="md:w-1/3 flex justify-center bg-amber-50 rounded-xl"
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-[250px] h-[300px]">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="rounded-md object-contain" />
        </div>
      </motion.div>

      {/* Text and Button */}
      <motion.div className="md:w-2/3 text-center md:text-left" variants={itemVariants}>
        <motion.h1 className="uppercase text-xl lg:text-2xl font-bold" variants={itemVariants}>
          {title}
        </motion.h1>

        {svgSrc && (
          <motion.div
            className="mb-6 flex justify-center md:justify-start"
            variants={itemVariants}
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={svgSrc || "/placeholder.svg"}
              alt="curved-divider-line"
              width={150}
              height={16}
              className="object-contain"
            />
          </motion.div>
        )}

        <motion.p className="mb-8 max-w-xl mx-auto lg:mx-0 text-muted-foreground lg:text-md" variants={itemVariants}>
          {description}
        </motion.p>

        <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
            <Button className={`${buttonColor} text-black font-semibold capitalize`}>
              <MousePointer2 fill="currentColor" />
              {t("contact")}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Feature