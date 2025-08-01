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
  lightLogoSrc = "/vistasy_logo/logo_black.png",
  darkLogoSrc = "/vistasy_logo/logo_white.png",
  alt = "App Logo",
  width = 100,
  height = 50,
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
