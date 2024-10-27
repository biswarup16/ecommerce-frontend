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
    <>
      {imageSrc.map((srcImage, i) => (
        <main key={i} className={`w-[350px] inset-0 mx-auto ${className}`}>
          <div className="ImageContainer">
            <Image
              src={srcImage.src}
              alt={`category-card ${i + 1}`}
              width={380}
              height={600}
            />
          </div>
          <div className="font-semibold uppercase max-w-full mt-4 text-center  text-2xl leading-[1.1666] ">
            {srcImage.category}
          </div>
          <div className="w-full text-center mt-2">
            <Button className="px-8" />
          </div>
        </main>
      ))}
    </>
  );
}

export default CategoryCard;
