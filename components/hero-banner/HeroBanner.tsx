import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";

// Array with images and content
const BannerSections = [
  {
    src: "/hero-banner-image/banner1.webp",
    alt: "Banner Image 1",
    title: "Puma One8",
    subtitle: "Pure Performance",
  },
  {
    src: "/hero-banner-image/banner2.webp",
    alt: "Banner Image 2",
    title: "Puma Faster",
    subtitle: "forever Faster",
  },
];

function HeroBanner({ className }: { className?: string }) {
  return (
    <main
      className={`relative flex flex-col h-[320px] sm:h-[600px] lg:h-[1140px] w-full  ${className}`}
    >
      {/* Map through BannerSections array */}
      {BannerSections.map((section, i) => (
        <div
          key={i}
          className="relative w-full h-[150px] md:h-[300px] lg:h-1/2"
        >
          <Image
            src={section.src}
            alt={section.alt}
            fill
            quality={100}
            priority={true}
            objectFit="cover"
          />
          {/* Content overlay on each image */}
          <div className="absolute inset-0 flex items-center pl-6 md:pl-16 bg-opacity-30">
            <div className="flex flex-col items-start justify-center text-white">
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                {section.title}
              </h1>
              <p className="text-xs sm:text-md md:text-xl lg:text-2xl mt-2 uppercase">
                {section.subtitle}
              </p>
              <Link
                href={"/products"}
                className="bg-white py-3 px-8 mt-5 hover:bg-gray-300 text-black  uppercase font-semibold"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default HeroBanner;
