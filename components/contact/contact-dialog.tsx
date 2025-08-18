"use client"

import { motion, AnimatePresence, circOut, circIn } from "motion/react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, XCircle } from "lucide-react"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  success: boolean
}

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: circOut, 
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: circIn,
    },
  },
}

const iconContainerVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: circOut,
      delay: 0.2,
    },
  },
}

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.3,
      ease: circOut,
      delay: 0.4,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: circOut,
      delay: 0.6,
    },
  },
}

export default function ContactDialog({ open, onOpenChange, success }: ContactDialogProps) {
  const icon = success ? <CheckCircle className="h-16 w-16 text-white" /> : <XCircle className="h-16 w-16 text-white" />

  const iconBgColor = success ? "bg-c-purple" : "bg-[#EF4444]"

  const title = success ? "THANK YOU FOR REACHING OUT!" : "OOPS, SOMETHING WENT WRONG!"

  const description = success
    ? "Thank you for your email. We will be in touch with you shortly."
    : "There was an issue processing your request. Please try again later."

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-8 text-center border-black dark:border-white">
        <AnimatePresence>
          {open && (
            <motion.div variants={dialogVariants} initial="hidden" animate="visible" exit="exit">
              <DialogHeader className="flex flex-col items-center space-y-4">
                <motion.div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}
                  variants={iconContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={iconVariants} initial="hidden" animate="visible">
                    {icon}
                  </motion.div>
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate="visible">
                  <DialogTitle className="text-center text-2xl font-extrabold uppercase tracking-wide text-black dark:text-white">
                    {title}
                  </DialogTitle>
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate="visible">
                  <DialogDescription className="text-center text-base text-gray-600 dark:text-gray-300">
                    {description}
                  </DialogDescription>
                </motion.div>
              </DialogHeader>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
