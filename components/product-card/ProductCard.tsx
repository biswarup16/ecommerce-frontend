import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function ProductCard({ className }: any) {
  return (
    <div
      className={` border rounded-lg overflow-hidden w-full mx-auto max-w-xs pb-3 text-center ${className}`}
    >
      {/* Product Image */}
      <div className="w-full h-[300px]">
        <Image
          src="/products-image/product1.avif"
          alt="Product Image"
          width={500}
          height={400}
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Product Info */}
      <div className="w-full p-4 flex items-center space-y-3 justify-between  ">
        {/* Product Name */}
        <span className="text-black font-semibold">Product Name</span>
        {/* Product Price */}
        <span className="text-black font-semibold">₹99.99</span>
      </div>
      <Button className="w-[80%] py-6 ">Add To Cart</Button>
    </div>
  );
}

export default ProductCard;
