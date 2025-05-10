import Image from "next/image";
import React, { useState } from "react";

interface ImageProps {
  id: number;
  src: string;
  alt: string;
}

interface ProductColorProps {
  activeImageProps?: number;
  imageListProps?: ImageProps[];
  handleimageColorChangeCallback: (id: number) => void;
}

function ProductColor({
  activeImageProps,
  imageListProps = [],
  handleimageColorChangeCallback,
}: ProductColorProps) {
  const [activeImage, setActiveImage] = useState<number | null>(
    activeImageProps ?? null
  );

  const handleClick = (id: number) => {
    setActiveImage(id);
    handleimageColorChangeCallback(id); // Pass variant id to ProductDetails
  };

  return (
    <section className="flex space-x-3">
      {imageListProps.map((image, index) => (
        <div
          key={index}
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
