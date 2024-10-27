import Button from "@/components/button/Button";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

function AddtoCart() {
  return (
    <div className="flex gap-2 items-start">
      {/* Quantity Dropdown */}
      <div className="">
        <select
          title="quantity"
          id="quantity"
          name="quantity"
          className="border border-gray-300 py-3 px-2 text-sm"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      {/*  Buttons */}
      <div className="flex flex-col gap-1 w-full mx-1">
        <Button
          className="text-sm font-semibold py-3 w-full"
          text="Add to Cart"
        />
        <button
          type="button"
          className="flex items-center justify-center space-x-2 w-full text-sm text-gray-700 border border-black px-4 py-3 font-medium hover:bg-gray-100"
        >
          <FaRegHeart className="text-black text-lg" />
          <span className="text-black uppercase font-semibold">
            Add to Wishlist
          </span>
        </button>
      </div>
    </div>
  );
}

export default AddtoCart;
