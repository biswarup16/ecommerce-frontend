import React from "react";
import CartProductItem from "../cart-product/CartProductItem";
import { useCart } from "../context-provider/ContextProvider";
import { useRouter } from "next/navigation";

function CartSidebar() {
  const router = useRouter();
  const { totalValue, subtotal, toggleCart, discount, setPromocode } =
    useCart();

  return (
    <main className="h-full bg-white shadow-lg z-30">
      {/* Header Section with Close Button */}
      <div className="p-4 flex justify-between items-center border-b border-gray-300 mx-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <button
          onClick={toggleCart}
          className="text-black text-2xl font-semibold z-40"
        >
          ×
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col h-[calc(100%-64px)] mx-4 mt-1">
        {/* Product List */}
        <div className="overflow-y-scroll scrollbar-hide h-[50%]">
          <CartProductItem />
        </div>

        {/* Checkout Section */}
        <div className="flex flex-col justify-between h-[50%] p-4 pt-[6px] border-t-2 border-gray-900">
          {/* Delivery Date Section */}
          <div className="flex flex-col pb-3 mt-2">
            <span className="font-semibold text-md">Delivery</span>
            <div className="text-xs">
              <span>Delivery date: </span> <span>June 24, 2022</span>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="relative mt-[-30px] border-b-2 py-2 pb-3">
            <input
              type="text"
              id="Promocode"
              placeholder="Promocode"
              className="border-2 border-gray-300 py-[5px] pr-16 px-4 w-full rounded-lg"
            />
            <button
              className="absolute right-[1.4px] top-[26.5px] transform -translate-y-1/2 bg-white text-sm !text-black !px-[9px] py-[6px] font-semibold rounded-md border-2 border-gray-300 hover:bg-gray-200"
              onClick={() => {
                const promocodeElement = document.getElementById(
                  "Promocode"
                ) as HTMLInputElement;
                const promocodeValue = promocodeElement.value;
                setPromocode(promocodeValue);
              }}
            >
              Apply
            </button>
            <span className="text-xs text-gray-500 font-semibold ml-2">
              20% off discount
            </span>
          </div>

          {/* Subtotal, Discount, and Tax Section */}
          <div className="flex flex-col mt-[-25px] border-b-2 py-2">
            <div className="flex items-center justify-between w-full">
              <span className="text-md font-semibold">Subtotal</span>
              <span className="text-sm font-semibold">₹{subtotal}</span>
            </div>

            <div className="flex items-center justify-between w-full text-sm">
              <span>Discount</span>
              <span>{discount ? "20%" : "0"}</span>
            </div>

            <div className="flex items-center justify-between w-full text-sm">
              <span>Tax</span>
              <span>30%</span>
            </div>
          </div>

          {/* Total Section */}
          <div className="flex items-center justify-between w-full mt-[-15px]">
            <span className="text-md font-black">Total</span>
            <span className="text-md font-semibold">₹{totalValue}</span>
          </div>
          {/* Checkout Button */}
          <div className="py-4 border-t border-gray-300">
            <button
              className="w-full text-white bg-black py-3 text-lg  rounded-sm hover:bg-black/90"
              onClick={() => {
                router.push("/checkout");
                toggleCart();
              }}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CartSidebar;
