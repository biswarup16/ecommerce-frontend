import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ProductData } from "@/utils/ProductData";
import { Button } from "../ui/button";

function CategoryCard({ className }: any) {
  const categoryDisplay = ["Men", "Women", "Kids"];

  return (
    <div
      className={`w-[93vw] lg:w-full mx-auto h-[500px] md:h-[600px] ${
        className
          ? ""
          : "flex flex-wrap md:grid md:grid-cols-2 lg:flex lg:flex-wrap gap-4 mx-auto"
      }`}
    >
      <div className="flex md:flex-none overflow-x-auto xl:overflow-hidden scrollbar-hide w-[85vw] h-full gap-4 md:gap-5 lg:gap-10 lg:flex lg:items-center lg:justify-center">
        {ProductData.slice(0, 3).map((product: any, index: number) => {
          // Finding First Varaint ID
          const firstVaraint = product.variants.find(
            (v: any) => v.variant_id === 1
          );

          // Find VariantId's First image[0]
          const firstVaraintSrc = firstVaraint?.images[0];

          // Set category based on `categoryDisplay` array and current index
          const category = categoryDisplay[index % categoryDisplay.length];
          return (
            <Link
              key={product.product_id}
              href={`/products/?category_name=${product.category}`}
            >
              <div className="flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[408px] h-[400px] md:h-[450px] lg:h-[580px] lg:my-auto mx-auto">
                <div className="relative w-[90vw] h-[400px] md:w-[46vw] md:h-[450px] lg:h-[450px] lg:w-[406px]">
                  {firstVaraintSrc && (
                    <Image
                      src={firstVaraintSrc} // Display the first image in the variant images array
                      alt={`Product ${product.product_name}`}
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  )}
                </div>
                <div className="font-semibold uppercase mt-2 text-center text-2xl leading-[1.1666]">
                  {category}
                </div>

                <div className="text-center mt-4 pb-2">
                  <Button className="px-8 py-6 text-md uppercase !rounded-none w-[70%] hover:bg-black/80">
                    Shop Now
                  </Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryCard;
