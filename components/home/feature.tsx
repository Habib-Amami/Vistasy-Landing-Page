import React from "react";
import Image from "next/image";

import { useTranslations } from 'next-intl';

import { Button } from "../ui/button";
import { MousePointer2 } from "lucide-react";

interface FeatureProps {
  reverse?: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonColor?: string; 
}

const colorToSvgMap: Record<string, string> = {
  "bg-c-purple": "/features/line-purple.svg",
  "bg-c-blue": "/features/line-blue.svg",
  "bg-c-orange": "/features/line-orange.svg",
};

const Feature: React.FC<FeatureProps> = ({
  reverse = false,
  imageSrc,
  imageAlt,
  title,
  description,
  buttonColor ="bg-c-purple",
}) => {
  const svgSrc = colorToSvgMap[buttonColor];
  const t = useTranslations('HomePage');
  return (
    <div
      className={`flex justify-between items-center gap-6 p-6 max-w-5xl mx-auto flex-col md:flex-row 
        ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image */}
      <div className="md:w-1/3 flex justify-center bg-amber-50  rounded-xl">
        <div className="relative w-[250px] h-[300px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-md object-contain"
          />
        </div>
      </div>

      {/* Text and Button */}
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="uppercase text-xl lg:text-2xl font-bold">{title}</h1>
        {svgSrc && (
          <div className="mb-6 flex justify-center md:justify-start">
            <Image
              src={svgSrc}
              alt="curved-divider-line"
              width={150}
              height={16}
              className="object-contain"
            />
          </div>
        )}
        <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-muted-foreground lg:text-md">
          {description}
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button className={`${buttonColor} text-black fon font-semibold capitalize`}>
            <MousePointer2 fill="currentColor"/>
            {t("contact")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;