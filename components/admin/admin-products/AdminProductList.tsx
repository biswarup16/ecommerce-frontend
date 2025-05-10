"use client";
import { ProductData } from "@/utils/ProductData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiEditCircleLine, RiDeleteBin7Line, RiEyeFill } from "react-icons/ri";

function AdminProductList() {
  const products = ProductData;

  // Sudo Function to send product id to details page.

  // Delete from Api server component
  // function handleDeleteFunction(variantId: number) {
  //   // Find the product containing the variant
  //   const product = ProductData.find((product) =>
  //     product.variants.some((variant) => variant.variant_id === variantId)
  //   );

  //   if (product) {
  //     // Find the specific variant
  //     const variant = product.variants.find(
  //       (variant) => variant.variant_id === variantId
  //     );

  //     console.log("Product ID:", product.product_id);
  //     console.log("Variant ID:", variant?.variant_id);

  //     // Proceed with deletion logic here (e.g., update state or call API)
  //   } else {
  //     console.log("Variant not found.");
  //   }
  // }

  return (
    <div className="mx-auto p-4">
      <div className="flex  justify-between mb-2">
        <h2 className="text-xl font-semibold mb-4">All Product List</h2>
        <Link
          href={"/admin/product/Create?"}
          className="py-2 px-4 rounded-lg hover:bg-black/80 bg-black text-white "
        >
          Add Product
        </Link>
      </div>
      <div className="overflow-y-auto scrollbar-hide h-[75vh]">
        <table className="min-w-full bg-white border border-gray-200 ">
          <thead>
            <tr className="bg-gray-100 text-left ">
              <th className="px-6 py-3 border-b text-lg font-semibold text-[#0a0838]">
                Product Name
              </th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-[#0a0838]">
                Category
              </th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-[#0a0838]">
                Price
              </th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-[#0a0838]">
                Stock
              </th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-[#0a0838] ">
                Sizes
              </th>
              <th className="px-6 py-3 border-b text-lg font-semibold text-[#0a0838] text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>
              product.variants.map((variant) => (
                <tr key={variant.variant_id} className="hover:bg-gray-50">
                  {/* Image Column */}
                  <td className="px-6 py-4 border-b">
                    {/* Product Name Column */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={variant.images[0]}
                        alt={`${product.product_name} - ${variant.color}`}
                        width={64}
                        height={64}
                        objectFit="cover"
                      />
                      <span>
                        {product.product_name.split(" ").slice(0, 3).join(" ") +
                          "..."}
                      </span>
                    </div>
                  </td>

                  {/* Category Column */}
                  <td className="px-6 py-4 border-b">{product.category}</td>

                  {/* Price Column */}
                  <td className="px-6 py-4 border-b">
                    ${variant.price.toFixed(2)}
                  </td>

                  {/* Stock Column */}
                  <td className="px-6 py-4 border-b">{variant.stock}</td>

                  {/* Sizes Column */}
                  <td className="px-6 py-4 border-b">
                    {variant.sizes.join(", ")}
                  </td>

                  {/* Action Column */}
                  <td className="px-6 py-4 border-b ">
                    <div className="flex  items-center justify-between text-xl">
                      <div className=" bg-[#04294f4e] hover:bg-[#1a22669c] cursor-pointer p-2 rounded-xl">
                        <RiEyeFill />
                      </div>
                      <div className=" bg-[#ffd7c6de] hover:bg-[#FFB697] p-2 rounded-xl cursor-pointer group">
                        <RiEditCircleLine className=" " />
                      </div>
                      <div className="relative bg-[#ffd7c6de] hover:bg-[#FFB697]  p-2 rounded-xl cursor-pointer group">
                        <RiDeleteBin7Line className="" />
                      </div>
                    </div>
                    {/* <button
                      className="text-red-600 hover:underline ml-4"
                      onClick={() => handleDeleteFunction(variant.variant_id)}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductList;
