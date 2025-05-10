import Image from "next/image";
import Link from "next/link";
import React from "react";

function StripToCallAction({ className }: any) {
  return (
    <main
      className={` container relative h-[150px] md:h-[280px] lg:h-[350px] max-w-screen mx-auto ${className}`}
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
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider transform scale-y-125">
            Lowest price of the year
          </h1>

          <p className="text-sm md:text-xl text-white tracking-wider mt-2 uppercase  transform scale-y-125">
            It's Now or never kinda deal
          </p>
          {/* <Button className="mt-4 lg:mt-10 !bg-white !text-black font-semibold" /> */}
          <Link
            href={`/products?lowest_price=Price: Low to High`}
            className="bg-white py-4 px-10 mt-5 hover:bg-gray-300 font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </main>
  );
}

export default StripToCallAction;
