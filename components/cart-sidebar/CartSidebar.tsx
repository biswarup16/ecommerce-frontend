import React from "react";
import CartProductItem from "../cart-product/CartProductItem";

function CartSidebar({ onClose }: any) {
  return (
    <main className="fixed right-0 top-0 max-w-[500px] h-full bg-white shadow-lg z-50 transform transition-transform duration-500 ease-out translate-x-0">
      <div className="p-4 flex justify-between items-center border-b border-gray-300 mx-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <button onClick={onClose} className="text-black text-2xl font-semibold">
          ×
        </button>
      </div>

      {/* Content of the sidebar */}
      <div className="flex flex-col h-[90%] mx-4">
        {/* Product List */}
        <div className="overflow-y-scroll scrollbar-hide flex flex-col gap-5 h-[60%]">
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
        <div className="flex flex-col justify-between h-[40%] p-4 border-t border-gray-300">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">$99.99</span>
          </div>
          <button className="w-full mt-4 py-2 bg-black text-white font-semibold rounded hover:bg-black/70">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}

export default CartSidebar;
