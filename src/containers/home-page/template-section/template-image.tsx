"use client"

import React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

type TemplateImageProps = {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
  className?: string
} & Omit<React.ComponentProps<typeof Image>, "src">

export const TemplateImage = ({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
}: TemplateImageProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return theme === "dark" ? (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={darkSrc}
      className={className}
    />
  ) : (
    <Image
      width={width}
      height={height}
      alt={alt}
      src={lightSrc}
      className={className}
    />
  )
}
