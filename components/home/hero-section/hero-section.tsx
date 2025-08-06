'use client';
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subTitle: string;
  backgroundImage: string;
  foregroundImage: string;
}

export default function HeroSection({
  title,
  subTitle,
  backgroundImage,
  foregroundImage,
}: HeroSectionProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden w-full">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover"
        quality={100}
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-6 md:pb-0 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Text Section */}
          <div className="text-white md:w-1/2 space-y-10 text-center pb-6 md:text-left md:mb-0 mb-100">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">{title}</h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">{subTitle}</h2>
          </div>

          {/* Foreground Image (side-by-side for md+) */}
          <div className="hidden md:block md:w-1/2">
            <Image
              src={foregroundImage}
              alt="Foreground"
              width={400}
              height={400}
              className="object-contain mx-auto"
            />
          </div>
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
    </div>
  );
}
