"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

interface LogoDisplayProps {
  lightLogoSrc?: string
  darkLogoSrc?: string
  alt?: string
  width?: number
  height?: number
  className?: string
}

export function Logo({
  lightLogoSrc = "/vistasy_logo/vistasy-logo-black.png",
  darkLogoSrc = "/vistasy_logo/vistasy-logo-white.png",
  alt = "Vistasy Logo",
  width = 30,
  height = 30,
  className,
}: LogoDisplayProps) {
  const { theme } = useTheme()

  // Determine which logo to display based on the current theme.
  // If theme is 'dark', use darkLogoSrc, otherwise use lightLogoSrc.
  // Fallback to lightLogoSrc if theme is undefined or 'system' and system preference is light.
  const currentLogoSrc = theme === "dark" ? darkLogoSrc : lightLogoSrc

  return (
    <Image
      src={currentLogoSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority // Prioritize loading of the logo
    />
  )
}
