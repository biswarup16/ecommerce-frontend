import React from "react";
import CartProductItem from "../cart-product/CartProductItem";
import Button from "../button/Button";

function CartSidebar({ onClose }: any) {
  return (
    <main className="h-full bg-white shadow-lg z-50">
      <div className="p-4 flex justify-between items-center border-b border-gray-300 mx-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={onClose} className="text-black text-2xl font-semibold">
          ×
        </button>
      </div>

      {/* Content of the sidebar */}
      <div className="flex flex-col h-[90%] mx-4 mt-2">
        {/* Product List */}
        <div className="overflow-y-scroll scrollbar-hide flex flex-col gap-2 h-[50%]">
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
        </div>

        {/* Checkout Section */}
        <div className="flex flex-col justify-between  h-[50%] p-4 pt-[6px] border-t border-gray-300">
          {/* Delivery date */}
          <div className="flex flex-col  pb-3">
            <span className="font-semibold text-md">Delivery</span>
            <div className="text-xs">
              <span>Delivery date: </span> <span>June 24, 2022</span>
            </div>
          </div>
          {/* promo code */}
          <div className="relative mt-[-30px] border-b-2 py-2">
            <input
              type="text"
              placeholder="Promocode"
              className="border-2 border-gray-300 py-[5px] pr-16 px-4 w-full rounded-lg" // Add right padding to avoid text overlap with button
            />
            <Button
              className="absolute right-[1.4px] top-[26.5px] transform -translate-y-1/2 bg-white text-sm !text-black !px-[9px] py-[6px] font-semibold rounded-md border-2 border-gray-300 hover:bg-gray-200"
              text="Apply"
            />
            <span className="text-xs text-gray-500 font-semibold ml-1">
              20% off discount
            </span>
          </div>

          {/* SubTotal and Discount */}
          <div className="flex-flex-col mt-[-25px] border-b-2 py-2">
            <div className="flex items-center justify-between w-full">
              <span className="text-md font-semibold ">Subtotal</span>
              <span className="text-sm font-semibold">$99.99</span>
            </div>
            <div className="flex items-center justify-between w-full text-sm">
              <span className=" ">Discount</span>
              <span className="">
                <span>(20%) - $16.99</span>
              </span>
            </div>
            <div className="flex items-center justify-between w-full text-sm">
              <span className="">Tax</span>
              <span className="">+ $14.99</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between w-full mt-[-20px]">
              <span className="text-md font-black ">Total</span>
              <span className="text-md font-semibold">$99.99</span>
            </div>
          </div>
          <Button
            className="w-full rounded-sm hover:bg-black/70"
            text="Check out"
          />
        </div>
      </div>
    </main>
  );
}

export default CartSidebar;
