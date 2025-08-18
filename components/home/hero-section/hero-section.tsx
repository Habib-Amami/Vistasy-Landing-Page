'use client';
import AnimatedHeading from "@/components/animated-heading";
import { motion } from "motion/react";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subTitle: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  foregroundImage: string;
  foregroundImageAlt: string;

}

export default function HeroSection({
  title,
  subTitle,
  backgroundImage,
  backgroundImageAlt,
  foregroundImage,
  foregroundImageAlt
}: HeroSectionProps) {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </motion.div>
      {/* Overlay Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-6 md:pb-0 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Text Section */}
          <motion.div
            className="text-white md:w-1/2 space-y-10 text-center pb-6 md:text-left md:mb-0 mb-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <AnimatedHeading
              className="text-3xl sm:text-5xl lg:text-6xl font-bold"
            >
              {title}
            </AnimatedHeading>
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              {subTitle}
            </motion.h2>
          </motion.div>

          {/* Foreground Image (side-by-side for md+) */}
          <motion.div
            className="hidden md:block md:w-1/2"
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={foregroundImage || "/placeholder.svg"}
              alt={foregroundImageAlt}
              width={400}
              height={400}
              className="object-contain mx-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Foreground Image (bottom-clipped for mobile) */}
      <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] pointer-events-none">
        <Image
          src={foregroundImage}
          alt="Foreground mobile"
          width={300}
          height={300}
          className="object-contain mx-auto"
        />
      </div>
    </motion.div>
  );
}
