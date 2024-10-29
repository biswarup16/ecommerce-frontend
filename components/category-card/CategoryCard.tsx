import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const imageSrc = [
  {
    src: "/category-card-image/card1.webp",
    category: "STREETWEAR STAPLE",
  },
  {
    src: "/category-card-image/card2.webp",
    category: "Night out looks",
  },
  {
    src: "/category-card-image/card3.webp",
    category: "Playful Outings",
  },
  {
    src: "/category-card-image/card4.webp",
    category: "The festive edits",
  },
];

function CategoryCard({ className }: any) {
  return (
    <div
      className={`w-[93vw] lg:w-[94vw] mx-auto h-[500px] md:h-[600px]   ${className} ${
        className
          ? ""
          : "flex flex-wrap md:grid md:grid-cols-2 lg:flex lg:flex-wrap gap-4 mx-auto"
      }`}
    >
      <div className="flex md:flex-none overflow-x-auto xl:overflow-hidden scrollbar-hide w-[94vw] h-full gap-4 md:gap-5">
        {imageSrc.map((srcImage, i) => (
          <main
            key={i}
            className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[350px] h-[400px] md:h-[450px] lg:h-[580px] lg:my-auto mx-auto"
          >
            <div className="relative w-[90vw] md:w-[46vw] lg:w-[350px] h-[400px] md:h-[450px] lg:h-[450px]">
              <Image
                src={srcImage.src}
                alt={`category-card ${i + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="font-semibold uppercase mt-2 text-center text-2xl leading-[1.1666]">
              {srcImage.category}
            </div>
            <div className="w-full text-center mt-2 pb-2">
              <Button className="px-8" />
            </div>
          </main>
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;
