"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import CartProductItem from "../cart-product/CartProductItem";
import { useCart } from "../context-provider/ContextProvider";
function CheckoutPage() {
  const { totalValue, isAuthenticated, promptSignIn } = useCart();
  const router = useRouter();
  // Shipping cost
  function shipingCost() {
    return totalValue < 500 ? 50 : 0;
  }

  // Billing adding shipping cost
  function grandTotal() {
    const ShippingValue = shipingCost();
    const GrandTotal = Math.round(ShippingValue + totalValue);
    return GrandTotal;
  }

  // Checking if user is signin or not
  function handlecheckout() {
    if (!isAuthenticated) {
      promptSignIn();
    } else {
      console.log("Checkout Done");
    }
  }

  return (
    <main className="container flex flex-col lg:flex-row w-full mx-4 lg:mx-0 px-4 gap-8 lg:gap-12">
      {/* Customer Details Section */}
      <section className="flex-1 lg:pr-6 border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0">
        <div className="px-6 lg:px-10 py-3">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 uppercase">
            Checkout
          </h2>

          {/* Signing Option */}
          {!isAuthenticated && (
            <div className="flex flex-col w-full lg:w-[70%] space-y-3 mb-8">
              <span className="capitalize font-semibold">
                For a faster checkout experience
              </span>

              <Button
                onClick={() => router.push("/login")}
                className="uppercase py-6 !rounded-none"
              >
                Sign in
              </Button>
            </div>
          )}
          {/* Shipping Form */}
          <form className="space-y-6 ">
            {/* First Name and Last Name Fields */}
            <div className="flex flex-col lg:flex-row w-full gap-4">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="first_name">
                  First Name<span className="text-red-500"> *</span>
                </Label>
                <Input
                  id="first_name"
                  placeholder="Enter your first name"
                  type="text"
                  required
                  className="py-6"
                />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="last_name">
                  Last Name<span className="text-red-500"> *</span>
                </Label>
                <Input
                  id="last_name"
                  placeholder="Enter your last name"
                  type="text"
                  required
                  className="py-6"
                />
              </div>
            </div>

            {/* Email and Phone Number Fields */}
            <div className="flex flex-col lg:flex-row w-full gap-4">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="customer_email">
                  Email<span className="text-red-500"> *</span>
                </Label>
                <Input
                  id="customer_email"
                  placeholder="Enter your email"
                  type="email"
                  required
                  className="py-6"
                />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="phone_number">
                  Phone Number<span className="text-red-500"> *</span>
                </Label>
                <Input
                  id="phone_number"
                  placeholder="Enter your phone number"
                  type="tel"
                  required
                  className="py-6"
                />
              </div>
            </div>

            {/* Country and State Fields */}
            <div className="flex flex-col lg:flex-row w-full gap-4">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="country">
                  Country<span className="text-red-500"> *</span>
                </Label>
                <Input
                  id="country"
                  placeholder="Enter your country"
                  type="text"
                  required
                  className="py-6"
                />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="state">
                  State<span className="text-red-500"> *</span>
                </Label>
                <Input
                  id="state"
                  placeholder="Enter your state"
                  type="text"
                  required
                  className="py-6"
                />
              </div>
            </div>

            {/* City, Street, and Pincode Fields */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="city">
                City<span className="text-red-500"> *</span>
              </Label>
              <Input
                id="city"
                placeholder="Enter your city"
                type="text"
                required
                className="py-6"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="street">
                Street/Landmark<span className="text-red-500"> *</span>
              </Label>
              <Input
                id="street"
                placeholder="Enter your street or landmark"
                type="text"
                required
                className="py-6"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pincode">
                Pincode<span className="text-red-500"> *</span>
              </Label>
              <Input
                id="pincode"
                placeholder="Enter your pincode"
                type="text"
                required
                className="py-6"
              />
            </div>

            {isAuthenticated && (
              <div className="grid place-content-center">
                <Button
                  className="px-20 py-7 rounded-none uppercase font-semibold"
                  onClick={handlecheckout}
                >
                  Proceed to Payment
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Cart Details Section */}
      <section className="flex-1 p-4 lg:pl-6 bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase mb-4 pb-4 border-b">
          Cart Details
        </h2>

        {/* Product Cart Items */}
        <div className="max-h-[500px] overflow-y-auto scrollbar-hide -mt-4 ">
          <CartProductItem />
        </div>

        {/* Subtotal Section */}
        <div className="border-t border-gray-300 ">
          <div className=" my-6" />

          <div className="flex justify-between text-sm text-gray-700 uppercase">
            <span>Subtotal</span>
            <span>₹{totalValue}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700  mt-2">
            <div className="flex flex-col">
              <span className="uppercase">Shipping Cost</span>
              <span className="text-xs text-red-500 ">
                Shippin free on order more than ₹500
              </span>
            </div>
            <span>{shipingCost() ? "₹50" : ""}</span>
          </div>

          <div className="border-t border-gray-300 my-4" />

          <div className="flex justify-between font-bold text-xl">
            <span>Grand Total</span>
            <span>₹{grandTotal()}</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CheckoutPage;
