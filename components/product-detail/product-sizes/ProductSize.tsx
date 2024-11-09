"use client";
import React, { useState } from "react";

function ProductSize({ availableSizes, selecetedSize }: any) {
  const [activeSize, setActiveSize] = useState<number | null>(null);

  const [Shoesizes] = useState<any[]>(availableSizes);

  const handleSizeClick = (index: number, size: string) => {
    setActiveSize(index);
    selecetedSize(size);
  };

  return (
    <section className="flex flex-wrap  gap-1 w-full max-w-lg">
      {Shoesizes.map((size: string, index: number) => (
        <div
          key={index}
          className={`flex items-center justify-center h-[50px] w-[50px] border cursor-pointer ${
            activeSize === index ? "border-black" : "border-gray-300"
          }`}
          onClick={() => handleSizeClick(index, size)}
        >
          <span className="text-sm text-gray-700">{size}</span>
        </div>
      ))}
    </section>
  );
}

export default ProductSize;
