import Image from "next/image";
import React from "react";

function AdminProductImage() {
  return (
    <main>
      <div className="h-[80%] p-4 shadow-md  shadow-gray-300 bg-white rounded-lg border">
        {/* Image */}
        <div className="mb-4">
          <Image
            src="/products-image/product1.avif" // replace with your image path
            alt="Product Image"
            width={300}
            height={200}
            className="object-cover  mx-auto rounded-lg"
            priority
          />
        </div>

        {/* Rest of the content */}

        <div className="flex flex-col justify-evenly h-[200px]">
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

          {/* Sizes  & Stocks*/}
          <div className="flex justify-between items-start mx-1 px-2 ">
            {/* Sizes */}
            <div className="flex space-x-3 items-center">
              <div className="text-lg font-semibold">Sizes: </div>
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
              <div className="">
                <span className="text-[#131151] font-semibold">Stocks : </span>
                <span className="font-semibold text-[#0f092a]">3000</span>
              </div>
              <div>
                <span className="text-[#b23630] font-semibold ">Sold : </span>
                <span className="font-semibold text-[#0f092a]">2000</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-6">
            <button className="bg-[#ff7d21] font-semibold px-4 py-2 rounded-md border text-white hover:bg-[#ff8222da]">
              Update
            </button>
            <button className="bg-[#ff5050] font-semibold  text-white px-4 py-2 rounded hover:bg-red-600">
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminProductImage;
