import Image from "next/image";
import React from "react";

const imageSrc = [
  {
    src: "/picture-with-text-image/product1.webp",
    alt: "Puma One8",
    title: "Puma Runner",
  },
  {
    src: "/picture-with-text-image/product2.webp",
    alt: "Puma Stlyish",
    title: "Puma Stlyish",
  },
  {
    src: "/picture-with-text-image/product3.webp",
    alt: "Puma Marathon",
    title: "Puma Marathon",
  },
  {
    src: "/picture-with-text-image/product2.webp",
    alt: "Puma Faster",
    title: "Puma Faster",
  },
  // Add more images as needed
];

function PictureWithTextCard({ className }: any) {
  return (
    <div className="w-[95vw] mx-auto">
      <div className="flex gap-2 md:gap-3 overflow-x-scroll  h-[300px] md:h-[400px] lg:h-[500px] lg:overflow-hidden ">
        {imageSrc.map((image, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 w-[49vw] h-[300px] md:h-full lg:w-[355px] lg:h-[500px]  
               ${className}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                alt={image.alt}
                src={image.src}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Text content on bottom center of the image */}
            <div className="absolute bottom-0 inset-x-0 z-10 pb-5">
              <div className="text-center">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {image.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PictureWithTextCard;
