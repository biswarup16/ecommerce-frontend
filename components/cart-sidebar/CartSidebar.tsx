import React, { useState } from "react";
import CartProductItem from "../cart-product/CartProductItem";
import Button from "../button/Button";
import { useCart } from "../context-provider/ContextProvider";
import { useRouter } from "next/navigation";
function CartSidebar({ onClose }: any) {
  const router = useRouter();
  const { totalValue, subtotal } = useCart();
  const [promocode, setPromocode] = useState<string>("");

  return (
    <main className="h-full bg-white shadow-lg z-50">
      <div className="p-4 flex justify-between items-center border-b border-gray-300 mx-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={onClose} className="text-black text-2xl font-semibold">
          ×
        </button>
      </div>

      {/* Content of the sidebar */}
      <div className="flex flex-col h-[90%] mx-4 mt-1">
        {/* Product List */}
        <div className="overflow-y-scroll scrollbar-hide h-[52%]">
          <CartProductItem />
        </div>

        {/* Checkout Section */}
        <div className="flex flex-col justify-between h-[48%] p-4 pt-[6px] border-t-2 border-gray-900">
          {/* Delivery date */}
          <div className="flex flex-col  pb-3 mt-2">
            <span className="font-semibold text-md">Delivery</span>
            <div className="text-xs">
              <span>Delivery date: </span> <span>June 24, 2022</span>
            </div>
          </div>
          {/* promo code */}
          <div className="relative mt-[-30px] border-b-2 py-2 pb-3">
            <input
              type="text"
              id="Promocode"
              placeholder="Promocode"
              className="border-2 border-gray-300 py-[5px] pr-16 px-4 w-full rounded-lg "
            />
            <button
              className="absolute right-[1.4px] top-[26.5px] transform -translate-y-1/2 bg-white text-sm !text-black !px-[9px] py-[6px] font-semibold rounded-md border-2 border-gray-300 hover:bg-gray-200"
              onClick={() => {
                const promocodeElement = document.getElementById(
                  "Promocode"
                ) as HTMLInputElement;
                const promocodeValue = promocodeElement.value;
                return setPromocode(promocodeValue);
              }}
            >
              Apply
            </button>
            <span className="text-xs  text-gray-500 font-semibold ml-2">
              20% off discount
            </span>
          </div>

          {/* SubTotal and Discount */}
          <div className="flex flex-col mt-[-25px] border-b-2 py-2">
            <div
              className="flex items-center justify-between w-full"
              id="subtotal-container"
            >
              <span className="text-md font-semibold">Subtotal</span>
              <span id="subtotal" className="text-sm font-semibold">
                ₹{subtotal}
              </span>
            </div>

            <div
              className="flex items-center justify-between w-full text-sm"
              id="discount-container"
            >
              <span>Discount</span>
              <span id="discount">
                {promocode === "WELCOME20" ? "20%" : "No Discount"}
              </span>
            </div>

            <div
              className="flex items-center justify-between w-full text-sm"
              id="tax-container"
            >
              <span>Tax</span>
              <span id="tax">30%</span>
            </div>
          </div>

          <div>
            <div
              className="flex items-center justify-between w-full mt-[-15px]"
              id="total-container"
            >
              <span className="text-md font-black">Total</span>
              <span id="total" className="text-md font-semibold">
                ₹{totalValue}
              </span>
            </div>
          </div>

          <Button
            className="w-full rounded-sm hover:bg-black/70"
            text="Check out"
            onClick={() => router.push("/checkout")}
          />
        </div>
      </div>
    </main>
  );
}

export default CartSidebar;
