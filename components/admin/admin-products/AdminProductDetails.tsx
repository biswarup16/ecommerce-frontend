"use client";
import React, { useState } from "react";
import Image from "next/image";

function AdminProductDetails() {
  return (
    <main className="px-4 pt-4 h-[86vh] ">
      <section className=" h-full overflow-y-scroll scrollbar-hide">
        {/* Top Half */}
        <div className="h-[550px] flex justify-between space-x-6">
          {/* Left Section in Top Half */}
          <div className="w-[400px] p-4 shadow-md  shadow-cyan-200 bg-white rounded-lg">
            {/* Image */}
            <div className="mb-4">
              <Image
                src="/products-image/product1.avif" // replace with your image path
                alt="Product Image"
                width={300}
                height={200}
                className="obejct-cover  mx-auto rounded-lg"
                priority
              />
            </div>

            {/* Color Circles */}
            <div className="flex justify-center gap-2 mb-4">
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-red-500 hover:ring-2 ring-red-300"
              ></button>
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-blue-500 hover:ring-2 ring-blue-300"
              ></button>
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-green-500 hover:ring-2 ring-green-300"
              ></button>
            </div>

            {/* Sizes */}
            <div className="flex justify-between items-end mb-4">
              <div className="flex items-center space-x-3  my-4">
                <span className="text-lg font-semibold">Sizes: </span>
                <div className="flex space-x-1">
                  {["S", "M", "L", "XL"].map(
                    (size: string, index: number, array) => (
                      <div className="" key={index}>
                        {size}
                        {index < array.length - 1 && <span>,</span>}
                      </div>
                    )
                  )}
                </div>
              </div>
              {/* Stocks */}
              <div className="flex flex-col items-end">
                <div>
                  <span className="text-[#131151] font-semibold">
                    Stocks Available :{" "}
                  </span>
                  <span className="font-semibold text-[#0f092a]">3000</span>
                </div>
                <div>
                  <span className="text-[#b23630] font-semibold ">Sold : </span>
                  <span className="font-semibold text-[#0f092a]">2000</span>
                </div>
              </div>
            </div>
            {/* Horizontal Line */}
            <hr className="border-gray-300 mb-6" />

            {/* Buttons */}
            <div className="flex justify-center space-x-6 ">
              <button className="bg-[#ff7d21] font-semibold px-4 py-2 rounded-md border text-white hover:bg-[#ff8222da]">
                Update
              </button>
              <button className="bg-[#ff5050]  text-white px-4 py-2 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
          {/* Right Section in Top Half */}
          <div className="w-2/3 p-4 border-2 border-blue-900">
            <h2 className="text-center font-semibold">
              Right Section (Top Half)
            </h2>

            {/* Content for the right section */}
          </div>
        </div>

        {/* Bottom Half */}
        <div className="h-[350px] mt-3 flex space-x-6">
          {/* Left Section in Bottom Half */}
          <div className="w-[40%] p-4 border-2 border-gray-900">
            <h2 className="text-center font-semibold">
              Left Section (Bottom Half)
            </h2>
            {/* Content for the left section */}
          </div>
          {/* Right Section in Bottom Half */}
          <div className="w-[60%] p-4 border-2 border-blue-900">
            <h2 className="text-center font-semibold ">
              Right Section (Bottom Half)
            </h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              sed amet earum cumque delectus, iusto magni nesciunt aspernatur
              eos maiores sapiente error maxime, accusamus eveniet soluta sint
              cupiditate illum aut fuga harum quaerat impedit! In dolore sunt
              aspernatur aliquid, vel commodi. Exercitationem voluptatem
              praesentium eligendi porro, explicabo aperiam quam quidem?
            </div>
            {/* Content for the right section */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminProductDetails;
