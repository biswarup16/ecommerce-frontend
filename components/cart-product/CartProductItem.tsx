"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi2";
import { IoMdHeart } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

function CartProductItem() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="grid grid-cols-[120px_1fr_1fr] gap-1 border-b py-6 px-1  h-[200px]">
      {/* Product Image with fixed width */}
      <div className="w-full h-full relative flex justify-center items-center">
        <Image
          src="/products-image/product1.avif"
          alt="Product Image"
          layout="fill"
          // objectFit="contain"
          className="rounded !h-[150px] w-auto my-auto object-cover"
        />
      </div>

      {/* Product Details with flexible width */}
      <div className="flex flex-col justify-between my-auto space-y-5 ml-[10px]">
        <h3 className="font-semibold">Product Name</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs">$12.99</span>
          {/* Vertical divider */}
          <div className="h-4 w-px bg-gray-200"></div>
          <span className="text-green-400 text-sm">In Stock</span>
        </div>
        <div className="flex space-x-1 p-[2px] rounded">
          <select title="color" className="border rounded-md text-xs ">
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
          <select title="size" className="border p-1 rounded text-xs">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <div className="flex items-center justify-evenly px-[2px] rounded-sm space-x-2 border ">
            <button
              type="button"
              onClick={() => setQuantity(quantity == 0 ? 0 : quantity - 1)}
              className=""
            >
              <HiMinus />
            </button>
            <span className="text-sm">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-md "
            >
              <HiPlus />
            </button>
          </div>
        </div>
      </div>

      {/* Price save and delete section */}
      <div className="flex flex-col justify-between items-end ml-5 my-auto space-y-16">
        <span>$12.99</span>
        <div className="flex items-center space-x-2 ">
          <div className="flex items-center space-x-1 text-gray-500 cursor-pointer text-sm">
            <span>
              <IoMdHeart />
            </span>
            <span>Save</span>
            {/* Vertical divider */}
          </div>
          <div className="h-4 w-[1.5px] bg-gray-200"></div>
          <div className="flex items-center space-x-1 text-gray-500 cursor-pointer text-sm">
            <span>
              <AiOutlineDelete />
            </span>
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductItem;
