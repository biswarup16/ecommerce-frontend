"use client";
import React from "react";
import ImageGallery from "./image-gallery/ImageGallery";
import ProductColor from "./product-color/ProductColor";
import ProductSize from "./product-sizes/ProductSize";
import AddtoCart from "./add-to-cart/AddToCart";
import Button from "../button/Button";

function ProductDetails() {
  return (
    <main className="container mx-auto flex flex-col lg:grid lg:grid-cols-3 h-screen p-4 w-full">
      {/* Left Section - Image Gallery */}

      <div className="lg:col-span-2">
        <ImageGallery />
      </div>

      {/* Right Section - Product Details */}
      <section className="lg:col-span-1 h-full flex-1 px-4 pb-8 pt-4 lg:pt-1 lg:pl-6 bg-white overflow-auto scrollbar-hide mx-[2px]">
        {/* Product Name and Price */}
        <div className="flex flex-col space-y-2 mb-6">
          <h1 className="text-3xl font-bold">
            Palermo Vintage Unisex Sneakers
          </h1>
          <div className="flex flex-col">
            <p className="text-lg font-semibold ">₹6,999</p>
            <span className="text-sm text-gray-600 ">Prices included GST</span>
          </div>
        </div>

        {/* Color details */}
        <div className="mb-6">
          <div className="flex flex-col mb-6">
            <span className="text-lg font-bold">Color</span>
            <span className="text-gray-600 text-sm">
              Hperlink Blue-Frosted Ivory
            </span>
          </div>
          {/* Color Image */}

          <div>
            <ProductColor />
          </div>
        </div>

        {/* Sizes Components */}
        <div className="flex flex-col space-y-3 justify-start mb-6 border-b-2 pb-6">
          <h1 className="font-semibold">Size</h1>
          <ProductSize />
        </div>

        {/* Quantity and Add to Cart Button */}
        <div className="mb-6 border-b-2 pb-8">
          <AddtoCart />
        </div>

        {/* PinCode Check */}

        <div className="border-b-2 mb-6 pb-8">
          <p className="text-sm text-gray-500 mb-6">
            Please enter PIN code to check delivery time
          </p>
          <span className="uppercase text-xs font-semibold">Pin code</span>
          <div className="flex gap-2">
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="PIN code"
              className="border border-black p-2 w-[74%] text-sm"
            />
            <Button text="check" className="px-[25px]" />
          </div>
        </div>
        {/* Description  of the Product*/}

        <div className="mb-6 border-b-2 pb-6">
          <p className="font-bold pb-3">Description</p>
          <p className="text-gray-800 text-sm pb-3">
            Straight from our archives, it's the PUMA Palermo. This classic
            terrace shoe debuted in the 80's and now, we've brought it back
          </p>
          <ul className="list-disc list-inside">
            <li className="">
              <span className="text-gray-700 text-sm">Style: 396851_01</span>
            </li>
            <li>
              <span className="text-gray-700 text-sm">
                Color: Hyperlink Blue-Frosted Ivory
              </span>
            </li>
          </ul>
        </div>

        {/* Shipping and Return */}
        <div>
          <p className="font-semibold mb-5">Shipping and Returns</p>
          <p className="mb-3 text-gray-700">
            Free return on all qualifying orders within 14 days of your order
            delivery date. Visit our Return Policy for more information.
          </p>
          <p className="mb-6 text-gray-700">
            For any queries, please contact Customer Service at 080-35353535 or
            via customercareindia@puma.com.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
