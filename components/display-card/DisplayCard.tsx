import React from "react";
import Button from "../button/Button";
import Image from "next/image";

function DisplayCard({ className }: any) {
  return (
    <main
      className={`relative h-[150px] max-w-7xl md:h-[300px] lg:h-[650px] rounded-lg mx-auto ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="strip-image"
          src="/display-image/display1.jpg"
          fill
          quality={100}
          priority={true}
          className="object-cover rounded-3xl"
        />
      </div>

      {/* Text content on bottom center of the image */}
      <div className="relative z-10 h-full flex item-end pl-16">
        <div className="flex flex-col items-start justify-end space-y-2 mb-10">
          <h1 className="text-md text-white capitalize">category</h1>
          <h1 className="text-xl md:text-xl font-bold text-white uppercase">
            loweset price of the year
          </h1>
          <Button className="mt-2 rounded-2xl px-10 !bg-white !text-black font-semibold" />
        </div>
      </div>
    </main>
  );
}

export default DisplayCard;
