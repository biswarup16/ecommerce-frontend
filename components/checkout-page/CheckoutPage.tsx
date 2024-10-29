import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CartProductItem from "../cart-product/CartProductItem";

function CheckoutPage() {
  return (
    <main className="flex flex-col lg:flex-row w-full mx-4 lg:mx-0 py-4 px-4 gap-8 lg:gap-12">
      {/* Customer Details Section */}
      <section className="flex-1 lg:pr-6 border-b lg:border-b-0 lg:border-r border-gray-300 pb-6 lg:pb-0">
        <div className="px-6 lg:px-10 py-3">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 uppercase">
            Checkout
          </h2>

          {/* Signing Option */}
          <div className="flex flex-col w-full lg:w-[70%] space-y-3 mb-8">
            <span className="capitalize font-semibold">
              For a faster checkout experience
            </span>
            <Button className="uppercase py-6 !rounded-none">Sign in</Button>
          </div>

          {/* Shipping Form */}
          <form className="space-y-6">
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

            <Button className="text-center mx-auto py-6 w-[60%] lg:w-[50%] uppercase font-semibold mt-8">
              Proceed to Payment
            </Button>
          </form>
        </div>
      </section>

      {/* Cart Details Section */}
      <section className="flex-1 p-4 lg:pl-6 bg-white">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase mb-4">
          Cart Details
        </h2>

        {/* Product Cart Items */}
        <div className="max-h-[400px] mx-auto overflow-y-auto space-y-4 scrollbar-hide">
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />

          {/* Additional CartProductItems will be scrollable */}
        </div>

        {/* Promo Code and Subtotal Section */}
        <div className="mt-6 border-t border-gray-300 pt-4">
          <h3 className="uppercase text-sm font-semibold my-4 max-w-full mx-auto">
            Apply Promo Code
          </h3>
          <div className="flex space-x-2 my-6 items-center">
            <input
              type="text"
              placeholder="Enter Promo Code"
              className="flex-grow p-4 border border-black rounded"
            />
            <Button className="py-7 px-8 font-semibold rounded">Apply</Button>
          </div>
          {/* Divider Line */}
          <div className="mt-8 border-t  border-gray-300 my-6" />

          <div className="flex justify-between text-sm text-gray-700 uppercase">
            <span>Subtotal</span>
            <span>$100.00</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700 uppercase mt-2">
            <span>Shipping Cost</span>
            <span>$10.00</span>
          </div>

          <div className="border-t border-gray-300 my-4" />

          <div className="flex justify-between font-bold text-xl">
            <span>Grand Total</span>
            <span>$110.00</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CheckoutPage;
