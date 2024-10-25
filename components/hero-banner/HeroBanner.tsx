import Image from "next/image";
import React from "react";
import Button from "../button/Button";

function HeroBanner({ className }: any) {
  return (
    <main className={`relative h-[570px] mx-[1px] min-w-screen ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="hero-banner"
          src="/hero-banner-image/banner1.webp"
          fill
          quality={100}
          priority={true}
          className="object-contain"
        />
      </div>

      {/* Text content on top of the image */}
      <div className="relative z-2 h-full flex pl-16">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-xl md:text-4xl font-bold text-white">
            Puma One8
          </h1>
          <p className="text-lg md:text-xl text-white mt-2 uppercase">
            Your Subtitle Here
          </p>
          <Button className="mt-4 px-8 " />
        </div>
      </div>
    </main>
  );
}

export default HeroBanner;
