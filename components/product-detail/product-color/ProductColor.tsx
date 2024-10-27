"use client";

import Image from "next/image";
import React, { useState } from "react";

function ProductColor() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveImage(index);
  };

  const images = [
    {
      src: "/Product-details-list/p1.avif",
      alt: "Product Color 1",
    },
    { src: "/products-image/product1.avif", alt: "Product Color 2" },
  ];

  return (
    <section className="flex space-x-3">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative h-[50px] w-[40px] border px-7 cursor-pointer ${
            activeImage === index ? "border-black" : "border-transparent"
          }`}
          onClick={() => handleClick(index)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      ))}
    </section>
  );
}

export default ProductColor;
