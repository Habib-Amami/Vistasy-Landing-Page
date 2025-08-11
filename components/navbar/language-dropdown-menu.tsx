"use client"
import * as React from "react"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

import EnglishFlag from "@/public/flags/en.svg"
import FrenchFlag from "@/public/flags/fr.svg"

export function LanguesDropdownMenu() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  // Determine initial language from the path
  const currentLocale = pathname.split("/")[1] === "fr" ? "French" : "English"
  const [lang, setLang] = React.useState(currentLocale)

  // Map languages to flags and locale codes
  const flagMap: Record<string, string> = {
    English: EnglishFlag,
    French: FrenchFlag,
  }
  const localeMap: Record<string, string> = {
    English: "en",
    French: "fr",
  }

  function handleLanguageChange(newLang: string) {
    setLang(newLang)
    const newLocale = localeMap[newLang]

    // Replace the first segment of the URL with the new locale
    const segments = pathname.split("/")
    segments[1] = newLocale
    router.push(segments.join("/") || "/")
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <div className="flex ml-4 md:ml-8 self-center cursor-pointer">
          <Image
            src={flagMap[lang]}
            alt={`${lang} flag`}
            width={20}
            height={20}
          />
          <ChevronDown
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Choose Your Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={lang} onValueChange={handleLanguageChange}>
          <DropdownMenuRadioItem value="English">
            <div className="flex items-center gap-2">
              <Image src={EnglishFlag} alt="English flag" width={20} height={20} />
              English
            </div>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="French">
            <div className="flex items-center gap-2">
              <Image src={FrenchFlag} alt="French flag" width={20} height={20} />
              French
            </div>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
