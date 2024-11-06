import Image from "next/image";
import React, { useEffect, useState } from "react";
import { StarIcon } from "lucide-react";

interface VariantProps {
  id: number;
  pid: number;
  color: string;
  images: string[];
  stock: number;
  sizes: string[];
  price: number;
  sale_price: number;
}

interface ProductProps {
  id: number;
  product_name: string;
  product_description: string;
  product_brand: string;
  category: string;
  sub_category: string;
  variants: VariantProps[];
}

function ProductCard({
  product,
  className,
}: {
  product: ProductProps;
  className?: string;
}) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  // Track the cart with unique pids
  const [addToCartProductArray, setAddToCartProductArray] = useState<number[]>(
    []
  );

  // Handle color change
  const handleColorChange = (color: string) => {
    const variantColor = product.variants.find((v) => v.color === color);
    if (variantColor) setSelectedVariant(variantColor);
  };

  // Handle Add to Cart, ensuring unique pids
  const handleAddToCart = (pid: number) => {
    setAddToCartProductArray((prev) => [...prev, pid]);
  };

  useEffect(() => {
    console.log("Array of Product IDs:", addToCartProductArray);
    localStorage.setItem(
      "ProductsArray",
      JSON.stringify(addToCartProductArray)
    );
  }, [addToCartProductArray]);

  return (
    <div
      className={`rounded max-h-[300px] w-auto md:max-h-[400px] lg:min-h-[450px] lg:w-auto border ${className}`}
    >
      <div className="relative mx-auto w-full h-[150px] md:h-[200px] md:w-[230px] lg:h-[200px] lg:w-auto rounded-md">
        <Image
          src={selectedVariant.images[0]} // Display first image from the array
          alt={product.product_name}
          fill
          className="rounded object-cover"
        />
        <div className="absolute bottom-[3px] left-[5px] md:bottom-2 md:left-3 flex items-center bg-white bg-opacity-30 backdrop-blur-md px-1 md:px-4 md:py-1.5 lg:py-2 rounded-md border border-gray-200">
          <span className="text-[6px] md:text-xs lg:text-[14px] font-medium text-gray-700">
            4.5
          </span>
          <div className="h-2 md:h-4 border-l border-gray-300 mx-[1.5px] md:mx-2"></div>
          <StarIcon className="w-2 h-2 md:w-4 md:h-4 text-gray-600 " />
        </div>
      </div>

      <div className="p-3 flex flex-col md:justify-between h-[200px] lg:h-[250px] overflow-hidden gap-2 md:space-y-2">
        <div className="flex flex-col items-start">
          <span className="text-black/90 font-semibold text-sm md:text-lg lg:text-xl line-clamp-2">
            {product.product_brand}
          </span>
          <div className="text-gray-600 text-[8px] md:text-xs lg:text-[13px] line-clamp-2 ">
            {product.product_name.split(" ").slice(0, 4).join(" ") + " ..."}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-black font-semibold text-[12px] md:text-[16px] lg:text-md">
            ₹{selectedVariant.price}
          </span>
          <span className="text-red-700 line-through text-[8px] sm:text-xs lg:text-[14px]">
            ₹{selectedVariant.sale_price}
          </span>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1 text-xs lg:text-sm">
            <span className="text-gray-900 font-semibold">Size:</span>
            <select
              className="w-18 h-6 md:w-20 md:h-8 lg:w-12 lg:h-7 border border-gray-300 rounded text-xs"
              defaultValue={selectedVariant.sizes[0]}
            >
              {selectedVariant.sizes.map((size, index) => (
                <option
                  key={index}
                  value={size}
                  className="text-xs text-center"
                >
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-1">
            {product.variants?.map((variant, index) => (
              <span
                key={index}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-300 cursor-pointer ${
                  selectedVariant.color === variant.color ? "border-black" : ""
                }`}
                style={{ backgroundColor: variant.color.toLowerCase() }}
                onClick={() => handleColorChange(variant.color)}
              />
            ))}
          </div>
        </div>

        <div className="w-full text-center mt-2">
          <button
            onClick={() => handleAddToCart(selectedVariant.pid)}
            type="button"
            className="md:py-2 lg:py-3 lg:px-2 text-xs rounded p-[5px] text-white bg-black w-[70%]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
