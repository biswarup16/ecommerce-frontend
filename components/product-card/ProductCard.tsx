import Image from "next/image";
import React from "react";

function ProductCard({ className }: any) {
  return (
    <div
      className={`relative mt-20 border rounded-lg overflow-hidden w-full mx-auto max-w-xs ${className}`}
    >
      {/* Product Image */}
      <div className="w-full h-[400px] relative">
        <Image
          src="/products-image/product1.avif"
          alt="Product Image"
          width={500}
          height={400}
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Product Info */}
      <div className="absolute bottom-0 w-full p-4 flex flex-col space-y-3 justify-between  from-black/70  ">
        {/* Product Name */}
        <span className="text-black/80 font-semibold">Product Name</span>
        {/* Product Price */}
        <span className="text-black/80 font-semibold">₹99.99</span>
      </div>
    </div>
  );
}

export default ProductCard;
