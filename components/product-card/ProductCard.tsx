import Image from "next/image";
import React from "react";
import { StarIcon } from "lucide-react";

function ProductCard({ product, className }: any) {
  return (
    <div
      className={` rounded max-h-[250px] md:max-h-[400px] md:py-2 lg:py-0 lg:min-h-[450px] lg:w-[280px] border ${className}`}
    >
      {/* Product Image and Star Rating */}
      <div className="relative md:h-[200px] md:w-[230px] w-[120px] h-[120px] mx-auto md:mt-0 mt-1 lg:h-[250px] lg:w-auto ">
        <Image
          src="/products-image/product1.avif"
          alt="Product Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        {/* Star Rating */}
        <div className="absolute bottom-[3px] md:bottom-2 md:left-3 flex items-center md:space-x-2 bg-white bg-opacity-30 backdrop-blur-md px-1 md:px-4 md:py-1.5 lg:py-2 rounded-md border border-gray-200">
          <span className="text-[6px] md:text-xs lg:text-[14px] font-medium text-gray-700">
            4.5
          </span>
          <div className="h-2 md:h-4 border-l border-gray-300 mx-[1.5px] md:mx-2"></div>
          <StarIcon className="w-2 h-2 md:w-4 md:h-4 text-gray-600 " />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full  p-2 md:px-1.5 md:pt-1 lg:px-3 lg:py-1   space-y-1 lg:space-y-2 flex flex-col items-start h-[150px] lg:h-[200px] overflow-hidden">
        {/* Product name and details */}
        <div className="flex flex-col items-start ">
          <span className="text-black font-semibold text-sm md:text-lg lg:text-2xl ">
            {product.name}
          </span>
          <p className="text-gray-600 text-[8px] md:text-xs lg:text-[14px]">
            A brief description of the product goes here.
          </p>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-center md:space-x-2 space-x-2">
          <span className="text-black font-semibold text-[12px] md:text-[16px] lg:text-lg">
            ₹999.99
          </span>
          <span className="text-red-700 line-through text-[8px] sm:text-xs lg:text-[16px]">
            ₹149.99
          </span>
        </div>

        {/* Size Selection */}
        <div className="flex items-center space-x-1 text-xs lg:text-lg">
          <p className="text-gray-900 font-semibold">Size:</p>
          <p className="">S</p>
        </div>
        {/* Add to Cart Button */}

        <div className="w-full text-center">
          <button
            type="button"
            className=" md:py-2 lg:py-3 text-xs rounded p-[5px] text-white bg-black w-[70%]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
