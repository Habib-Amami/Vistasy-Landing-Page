"use client"

import { motion } from "motion/react"

interface ConnectorSVGProps {
  direction: "left" | "right"
  color?: string
}

export default function ConnectorSVG({ direction, color = "#B366FF" }: ConnectorSVGProps) {
  const isRight = direction === "right"

  return (
    <svg
      width="180"
      height="380"
      viewBox="0 0 179 377"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isRight ? "scale-x-[-1]" : ""}`}
    >
      <motion.path
        d="M0 4 L178 4" // use integer coordinates
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }} // trigger earlier
        transition={{
          pathLength: { duration: 1.2, ease: "easeInOut" },
          opacity: { duration: 0.3 },
        }}
      />

      <motion.path
        d="M175 4 L175 412"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          pathLength: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
          opacity: { duration: 0.3, delay: 0.8 },
        }}
      />
    </svg>
  )
}
