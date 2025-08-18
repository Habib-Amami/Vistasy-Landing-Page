"use client"

import { motion } from "motion/react"


export interface StatItemInterface {
  value: string
  label: string
}

export default function StatItem({ value, label }: StatItemInterface) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-xl font-extrabold uppercase">{value}</p>
      <p className="text-sm capitalize">{label || "\u00A0"}</p>
    </motion.div>
  )
}
