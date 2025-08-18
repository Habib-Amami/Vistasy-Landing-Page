"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Briefcase, Cloud, VideoIcon, CircleCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

interface PricingCardProps {
  title: string
  subtitle: string
  subtitleDescription?: string
  features: string[] | { text: string; isList?: boolean; listItems?: string[] }[]
  buttonText: string
  icon: "monitor" | "briefcase" | "cloud"
  cardColor: string
  delay?: number
}

const iconMap = {
  monitor: Monitor,
  briefcase: Briefcase,
  cloud: Cloud,
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 5,
  },
}

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const buttonVariants = {
  hover: {
    scale: 1.02,
    boxShadow: "0 5px 5px rgba(0,0,0,0.15)",
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
}

export function PricingCard({
  title,
  subtitle,
  subtitleDescription,
  features,
  buttonText,
  icon,
  cardColor,
  delay = 0, // Default delay value
}: PricingCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ animationDelay: `${delay}s` }}
      className="h-full"
    >
      <Card className="flex flex-col justify-between p-4 rounded-xl border border-black dark:border-white h-full overflow-hidden">
        <CardHeader className="pb-2 text-center">
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
            style={{ backgroundColor: cardColor + "1A" }}
          >
            <IconComponent className="h-6 w-6" style={{ color: cardColor }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          </motion.div>

          <motion.p
            className="text-lg font-semibold"
            style={{ color: cardColor }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
            {subtitleDescription && (
              <span className="text-sm font-normal text-gray-500 dark:text-gray-200 ml-1">{subtitleDescription}</span>
            )}
          </motion.p>
        </CardHeader>

        <CardContent className="flex-grow">
          <motion.ul
            className="space-y-3 text-black dark:text-white"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={featureVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                </motion.div>

                {typeof feature === "string" ? (
                  <span className="font-bold text-black dark:text-white">{feature}</span>
                ) : (
                  <div>
                    <span className="text-black dark:text-white font-bold">{feature.text}</span>
                    {feature.isList && feature.listItems && (
                      <ul className="list-disc list-inside ml-7 text-sm text-gray-600">
                        {feature.listItems.map((item, itemIndex) => (
                          <li className="font-bold text-black dark:text-white" key={itemIndex}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>

        <CardFooter className="pt-4">
          <motion.div className="w-full">
            <Button
              className={cn("w-full py-3 text-lg font-semibold rounded-lg text-black capitalize")}
              style={{ backgroundColor: cardColor }}
              asChild
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <VideoIcon fill="currentColor" />
                {buttonText}
              </motion.button>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}