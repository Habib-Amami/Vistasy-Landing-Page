'use client'

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { VideoIcon, MousePointer2 } from "lucide-react"

import StatItem, { StatItemInterface } from "./state-item"

interface SolutionCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  colorClass?: string // Example: "bg-c-purple"
  reverseLayout?: boolean
  stats: StatItemInterface[]
}

const colorMap: Record<string, string> = {
  "bg-c-purple": "#B366FF",
  "bg-c-blue": "#4DA1FF",
  "bg-c-orange": "#FFAB65",
}

export default function SolutionCard({
  title,
  imageSrc,
  imageAlt,
  colorClass = "bg-c-purple",
  reverseLayout = false,
  stats
}: SolutionCardProps) {
  const colorValue = colorMap[colorClass] || "#8B5CF6" // fallback color

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-stretch min-h-[400px] gap-16",
        reverseLayout && "md:flex-row-reverse"
      )}
    >
      {/* Image + Title */}

      <div className="flex-1 flex flex-col gap-4 items-center">
        <h2
          className="text-2xl font-extrabold uppercase text-center"
        >
          {title}.
        </h2>
        <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats + Buttons */}
      <div
        className={cn(
          "flex-1 flex flex-col justify-between rounded-xl border-2 border-black dark:border-white p-6 md:p-8"
        )}
        style={{
          boxShadow: `8px 8px 0px 0px ${colorValue}`,
        }}
      >
        <div className="flex flex-col gap-4">
          {stats.map((item, index) => (
            <StatItem key={index} value={item.value} label={item.label} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button className={`${colorClass} text-black font-semibold w-full sm:w-auto`}>
            <VideoIcon fill="currentColor" /> Book a Call
          </Button>
          <Button variant="outline" className="font-semibold w-full sm:w-auto dark:bg-black dark:border dark:border-white">
            <MousePointer2 fill="currentColor" /> Check Pricing
          </Button>
        </div>
      </div>
    </div>
  )
}


