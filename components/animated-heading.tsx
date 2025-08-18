'use client'
import { motion, MotionProps } from "motion/react";

interface AnimatedHeadingProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedHeading({
  children,
  className,
  initial = { opacity: 0, y: 30 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, delay: 0.5, ease: "easeOut" },
  ...rest
}: AnimatedHeadingProps) {
  return (
    <motion.h1
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.h1>
  );
}
