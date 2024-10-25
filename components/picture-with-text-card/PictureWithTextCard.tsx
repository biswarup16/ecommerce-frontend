import Image from "next/image";
import React from "react";

function PictureWithTextCard({ className }: any) {
  return (
    <main
      className={`padding relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full md:w-[450px] ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="hero-banner"
          src="/picture-with-text-image/product1.webp"
          fill
          quality={100}
          priority={true}
          className="object-cover"
        />
      </div>

      {/* Text content on bottom center of the image */}
      <div className="absolute bottom-0 inset-x-0 z-10 pb-5">
        <div className="text-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Puma One8
          </h1>
        </div>
      </div>
    </main>
  );
}

export default PictureWithTextCard;
