"use client"

import { cn } from "@/lib/utils"
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
    <div
      className={cn(
        "relative w-full max-w-2xl rounded-xl border-2 border-black dark:border-white dark:bg-[#4D4C4C] p-6 md:p-12 lg:p-16"
      )}
      style={{
        boxShadow: `8px 8px 0px 0px ${colorValue}`,
      }}
    >
      <span
        className={cn(
          "absolute top-6 text-lg font-extrabold md:top-8 lg:top-10",
          reverseLayout ? "right-6 md:right-8 lg:right-10" : "left-6 md:left-8 lg:left-10"
        )}
        style={{ color: colorValue }}
      >
        {stepNumber}.
      </span>

      <div
        className={cn(
          "flex flex-col items-center gap-6 pt-10 md:gap-8 md:pt-0",
          reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
        )}
      >
        <div className="flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={200}
            height={200}
            className="rounded-md object-contain"
          />
        </div>

        <div className="flex flex-col gap-2 text-left">
          <h2 className="uppercase  font-extrabold text-black dark:text-white text-xl md:text-2xl">
            {title}
          </h2>
          <p className="text md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  )
}
