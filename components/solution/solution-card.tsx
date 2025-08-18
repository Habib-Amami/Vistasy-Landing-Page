"use client"
import { useRouter } from '@/i18n/navigation';

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { VideoIcon, MousePointer2 } from "lucide-react"

import StatItem, { type StatItemInterface } from "./state-item"
import { motion } from "motion/react"

interface SolutionCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  colorClass?: string // Example: "bg-c-purple"
  reverseLayout?: boolean
  stats: StatItemInterface[]
  primary_button_text: string,
  secondary_button_text: string
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
  stats,
  primary_button_text,
  secondary_button_text
}: SolutionCardProps) {
  const colorValue = colorMap[colorClass] || "#8B5CF6" // fallback color
  const router = useRouter();

  return (
    <motion.div
      className={cn(
        "flex flex-col md:flex-row items-stretch min-h-[400px] gap-16",
        reverseLayout && "md:flex-row-reverse",
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* Image + Title */}
      <motion.div
        className="flex-1 flex flex-col gap-4 items-center"
        variants={{
          hidden: { opacity: 0, x: reverseLayout ? 50 : -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
      >
        <motion.h2
          className="text-2xl font-extrabold uppercase text-center"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </motion.div>
      </motion.div>

      {/* Stats + Buttons */}
      <motion.div
        className="flex-1 flex flex-col justify-between rounded-xl border-2 border-black dark:border-white p-6 md:p-8"
        style={{ boxShadow: `8px 8px 0px 0px ${colorValue}` }}
        variants={{
          hidden: { opacity: 0, x: reverseLayout ? -50 : 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
      >
        <motion.div
          className="flex flex-col gap-4"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <StatItem value={item.value} label={item.label} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={() => router.push("/contact")}
              className={`${colorClass} capitalize text-black font-semibold w-full sm:w-auto`}
            >
              <VideoIcon fill="currentColor" /> {primary_button_text}
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="outline"
              className="capitalize font-semibold w-full sm:w-auto dark:bg-black dark:border dark:border-white bg-transparent"
              onClick={()=>router.push("/pricing")}
            >
              <MousePointer2 fill="currentColor" /> {secondary_button_text}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
