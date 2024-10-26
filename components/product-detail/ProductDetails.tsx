"use client";
import Image from "next/image";
import React from "react";

function ProductDetails() {
  return (
    <main className="container mx-auto flex flex-col lg:grid lg:grid-cols-3 h-screen p-4">
      {/* Left Section - Image Gallery */}
      <section className="col-span-2 flex-1 grid grid-cols-2  gap-2 overflow-auto scrollbar-hide">
        <div className="relative w-full h-[500px]">
          <Image
            src="/Product-details-list/p1.avif"
            alt="Product Image 1"
            layout="fill"
            quality={100}
            objectFit="contain"
            className=""
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src="/Product-details-list/p2.avif"
            alt="Product Image 2"
            layout="fill"
            quality={100}
            objectFit="contain"
            className=""
          />
        </div>
        <div className="relative w-full h-[450px]">
          <Image
            src="/Product-details-list/p3.avif"
            alt="Product Image 3"
            layout="fill"
            quality={100}
            objectFit="contain"
            className=""
          />
        </div>
        <div className="relative w-full h-[450px]">
          <Image
            src="/Product-details-list/p4.avif"
            alt="Product Image 3"
            layout="fill"
            quality={100}
            objectFit="contain"
            className=""
          />
        </div>
        <div className="relative w-full h-[450px]">
          <Image
            src="/Product-details-list/p5.avif"
            alt="Product Image 3"
            layout="fill"
            quality={100}
            objectFit="contain"
            className=""
          />
        </div>
        <div className="relative w-full h-[450px]">
          <Image
            src="/Product-details-list/p6.avif"
            alt="Product Image 3"
            layout="fill"
            quality={100}
            objectFit="contain"
            className=""
          />
        </div>
        <div className="relative w-full h-[450px]">
          <Image
            src="/Product-details-list/p8.avif"
            alt="Product Image 3"
            layout="fill"
            quality={100}
            objectFit="cover"
            className=""
          />
        </div>
        <div className="relative w-full h-[450px]">
          <Image
            src="/Product-details-list/p9.avif"
            alt="Product Image 3"
            layout="fill"
            quality={100}
            objectFit="cover"
            className=""
          />
        </div>
        {/* Add more images as needed */}
      </section>

      {/* Right Section - Product Details */}
      <section className="col-span-1 flex-1 p-6 bg-white rounded-lg shadow-lg overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Product Title</h1>
        <p className="text-lg mb-4">Description of the product goes here.</p>
        <p className="text-3xl font-semibold text-green-600 mb-4">$199.99</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
        {/* Additional product details */}
      </section>
    </main>
  );
}

export default ProductDetails;
