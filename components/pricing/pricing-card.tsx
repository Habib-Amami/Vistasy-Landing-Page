import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Briefcase, Cloud, VideoIcon, CircleCheck } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  subtitle: string
  subtitleDescription?: string
  features: string[] | { text: string; isList?: boolean; listItems?: string[] }[]
  buttonText: string
  icon: "monitor" | "briefcase" | "cloud" // Updated icon types
  cardColor: string // New prop for card-specific color
}

const iconMap = {
  monitor: Monitor,
  briefcase: Briefcase,
  cloud: Cloud,
}

export function PricingCard({
  title,
  subtitle,
  subtitleDescription,
  features,
  buttonText,
  icon,
  cardColor, // Destructure new prop
}: PricingCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <Card className="flex flex-col justify-between p-4 rounded-xl  border border-black dark:border-white">
      <CardHeader className="pb-2 text-center">
        <div
          className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: cardColor + "1A" }}
        >
          {" "}
          {/* Light background with opacity */}
          <IconComponent className="h-6 w-6" style={{ color: cardColor }} /> {/* Icon color */}
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <p className="text-lg font-semibold" style={{ color: cardColor }}>
          {" "}
          {/* Subtitle color */}
          {subtitle}
          {subtitleDescription && <span className="text-sm font-normal text-gray-500 dark:text-gray-200 ml-1">{subtitleDescription}</span>}
        </p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3 text-black dark:text-white">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
              {typeof feature === "string" ? (
                <span className="font-bold text-black dark:text-white">{feature}</span>
              ) : (
                <div>
                  <span className="text-black dark:text-white font-bold">{feature.text}</span>
                  {feature.isList && feature.listItems && (
                    <ul className="list-disc list-inside ml-7 text-sm text-gray-600">
                      {feature.listItems.map((item, itemIndex) => (
                        <li className="font-bold text-black dark:text-white" key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Button
          className={cn("w-full py-3 text-lg font-semibold rounded-lg text-black capitalize")}
          style={{ backgroundColor: cardColor}} // Button background color
        >
          <VideoIcon fill="currentColor" />
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
