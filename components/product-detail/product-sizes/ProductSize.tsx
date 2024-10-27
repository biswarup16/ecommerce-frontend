"use client";
import React, { useState } from "react";

function ProductSize() {
  const [activeSize, setActiveSize] = useState<number | null>(null);

  const handleSizeClick = (index: number) => {
    setActiveSize(index);
  };

  const sizes = [
    "UK3",
    "UK4",
    "UK5",
    "UK6",
    "UK7",
    "UK8",
    "UK9",
    "UK10",
    "UK11",
    "UK12",
    "UK13",
  ];

  return (
    <section className="flex flex-wrap  gap-1 w-full max-w-lg">
      {sizes.map((size, index) => (
        <div
          key={index}
          className={`flex items-center justify-center h-[50px] w-[50px] border cursor-pointer ${
            activeSize === index ? "border-black" : "border-gray-300"
          }`}
          onClick={() => handleSizeClick(index)}
        >
          <span className="text-sm text-gray-700">{size}</span>
        </div>
      ))}
    </section>
  );
}

export default ProductSize;
