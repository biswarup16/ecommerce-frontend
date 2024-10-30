import Image from "next/image";
import React from "react";
import Button from "../button/Button";

function HeroBanner({ className }: any) {
  return (
    <main
      className={`relative h-[150px] sm:h-[280px] lg:h-[570px] lg:w-full lg:mx-auto mx-[1px] w-[100vw] ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="hero-banner"
          src="/hero-banner-image/banner1.webp"
          fill
          quality={100}
          priority={true}
          objectFit="cover"
        />
      </div>

      {/* Text content on top of the image */}
      <div className="relative z-2 h-full flex pl-6 md:pl-16">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white">
            Puma One8
          </h1>
          <p className="text-xs sm:text-md md:text-xl lg:text-2xl text-white mt-2 uppercase">
            Your Subtitle Here
          </p>
          <Button className="mt-4 !px-1 !py-1 md:!px-8 md:!py-3 bg-white !text-black  text-xs sm:text-sm hover:!bg-gray-200" />
        </div>
      </div>
    </main>
  );
}

export default HeroBanner;
