"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  id: number;
}

interface ProductColorProps {
  activeImageProps?: number;
  imageListProps?: ImageProps[];
  handleimageColorChangeCallback: (id: number) => void;
}

function ProductColor({ activeImageProps, imageListProps = [], handleimageColorChangeCallback }: ProductColorProps) {
  const [activeImage, setActiveImage] = useState<number | null>(activeImageProps ?? null);
  const [imageList, setImageList] = useState<ImageProps[]>(imageListProps);

  const handleClick = (id: number) => {
    setActiveImage(id);
    handleimageColorChangeCallback(id)
  };

  return (
    <section className="flex space-x-3">
      {imageList.map((image) => (
        <div
          key={image.id}
          className={`relative h-[50px] w-[40px] border px-7 cursor-pointer ${
            activeImage === image.id ? "border-black" : "border-transparent"
          }`}
          onClick={() => handleClick(image.id)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </section>
  );
}

export default ProductColor;
