"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

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
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Prevent rendering wrong logo during SSR
    return (
      <Image
        src={lightLogoSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority
      />
    )
  }

  const effectiveTheme = theme === "system" ? systemTheme : theme
  const currentLogoSrc = effectiveTheme === "dark" ? darkLogoSrc : lightLogoSrc

  return (
    <Image
      src={currentLogoSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}
