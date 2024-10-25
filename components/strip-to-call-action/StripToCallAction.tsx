import Image from "next/image";
import React from "react";
import Button from "../button/Button";

function StripToCallAction({ className }: any) {
  return (
    <main
      className={` container relative mt-10 h-[150px] md:h-[350px] max-w-screen mx-auto ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="strip-image"
          src="/strip-image/strip.webp"
          fill
          quality={100}
          priority={true}
          className="object-cover"
        />
      </div>

      {/* Text content on bottom center of the image */}
      <div className="relative z-10 h-full flex justify-center pl-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider transform scale-y-125">
            Lowest price of the year
          </h1>

          <p className="text-lg md:text-xl text-white tracking-wider mt-2 uppercase  transform scale-y-125">
            It's Now or never kinda deal
          </p>
          <Button className="mt-4 !bg-white !text-black font-semibold" />
        </div>
      </div>
    </main>
  );
}

export default StripToCallAction;
