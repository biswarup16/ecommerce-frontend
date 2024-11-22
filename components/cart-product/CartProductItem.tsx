"use client";
import Image from "next/image";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../context-provider/ContextProvider";

function CartProductItem({ extraClass }: any) {
  const { cartItems, setCartItems } = useCart();

  // Delete Function
  function hanldeDeleteCartItem(cartIndex: any) {
    const updatedCartData = cartItems.filter((_, index) => index !== cartIndex);
    // Update cart state and localStorage
    setCartItems(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  }

  // Update Cart Quantity
  function handleCartQuanity(cartIndex: number, newQuantity: number) {
    const updatedCartData = cartItems.map((item, index) =>
      index === cartIndex ? { ...item, product_quantity: newQuantity } : item
    );

    setCartItems(updatedCartData);
    localStorage.setItem("cartData", JSON.stringify(updatedCartData));
  }

  return (
    <div className={`${extraClass ? extraClass : "flex flex-col "}`}>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[120px_1fr_1fr] gap-1 border-b min-h-[140px]"
        >
          {/* Product Image */}
          <div className="w-full h-full relative flex justify-center items-center">
            <Image
              src={item.variant_image?.[0]} // Display the first image or a placeholder
              alt={item.product_name}
              layout="fill"
              className="rounded !h-[130px] w-auto object-cover my-auto "
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between my-auto space-y-5 ml-[10px]">
            <h3 className="font-semibold text-balance">
              {item.product_name.split(" ").splice(0, 3).join(" ")}
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold">
                {item.product_brand}
              </span>
              <div className="h-4 w-px bg-gray-200"></div>
              <span
                className={`text-sm ${
                  item.variant_stock > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {item.variant_stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="flex items-center space-x-1 p-[2px] rounded">
              {/* Color Selection */}
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.variant_color }}
              />
              {/* Size Selection */}
              <select title="size" className="border p-1 rounded text-xs">
                <option value={item.selectedSize}>{item.selectedSize}</option>
                {item.variant_sizes
                  ?.filter((size: string) => size !== item.selectedSize) // Filter out selected size
                  .map((size: string, index: number) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
              </select>
              {/* Quantity Controls */}
              <div className="flex items-center px-[2px] space-x-2 border rounded-sm">
                <button
                  type="button"
                  className=""
                  onClick={() =>
                    item.product_quantity > 1
                      ? handleCartQuanity(index, item.product_quantity - 1)
                      : hanldeDeleteCartItem(index)
                  }
                >
                  <HiMinus />
                </button>
                <span className="text-sm">{item.product_quantity}</span>
                <button
                  className="text-md"
                  onClick={() =>
                    handleCartQuanity(index, item.product_quantity + 1)
                  }
                >
                  <HiPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Price and Actions */}
          <div className="flex flex-col justify-between items-end ml-5 my-auto space-y-16">
            <span>
              ₹{Math.round(item.variant_price * item.product_quantity)}
            </span>
            <div className="flex items-center space-x-2">
              <div
                className="flex items-center space-x-1 text-gray-500 cursor-pointer text-sm"
                onClick={() => hanldeDeleteCartItem(index)}
              >
                <AiOutlineDelete />
                <span>Delete</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartProductItem;
