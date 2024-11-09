"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../../ui/button";
import { useDropzone } from "react-dropzone";
function AddNewProduct() {
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [size, setSize] = useState("");

  function handleValueChange(value: string) {
    setCategory(value);
    setSubCategory("");
    setSize("");
  }

  // Images handling

  const onDrop = (acceptedFiles: File[]) => {
    setImages((prev) => [...prev, ...acceptedFiles]);
  };

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    accept: {
      "images/*": [".png", ".jpeg", ".jpg", ".webp", ".avif"],
    },
    maxFiles: 8,
    maxSize: 3 * 1048576, // 3MB in bytes
  });

  return (
    <main className="container ">
      <section>
        <p className="text-2xl font-bold mt-2">Add New Product</p>
        <hr className="border-gray-700 my-4" />
      </section>
      {/* Form Section */}
      <section className="p-1 flex justify-center ">
        <form action="" className="flex flex-col lg:space-y-5 w-full ">
          {/* Images using DropZone */}
          <div>
            <label className="block font-semibold mb-2 text-black">
              Product Images
            </label>
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-500 p-6 rounded-md cursor-pointer text-center"
            >
              <input {...getInputProps()} />
              <p className="text-gray-700">
                Drag and drop or click to upload images (multiple files allowed
                upto 8)
              </p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {images.map((file, index) => (
                <div key={index} className="text-sm text-gray-900">
                  {file.name}
                </div>
              ))}
            </div>
          </div>
          {/* Product Name And Description */}
          <div className="flex gap-3 w-full">
            {/* Product Name */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="product-name" className="text-sm font-bold">
                Product Name
              </label>
              <input
                name="product-name"
                type="text"
                className="w-full p-2 rounded-md text-gray-700 border border-gray-600 focus:outline-none focus:border-gray-400 text-sm"
                placeholder="Enter Product Name"
              />
            </div>
            {/* Product Description */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="product-description"
                className="text-sm font-bold"
              >
                Product Description
              </label>
              <input
                name="product-description"
                type="text"
                className="w-full p-2 rounded-md text-gray-700 border border-gray-600 focus:outline-none focus:border-gray-400 text-sm"
                placeholder="Enter Product Description"
              />
            </div>
          </div>

          {/* Product Brand and Color */}
          <div className="flex gap-3">
            {/* Product Brand */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="product-brand" className="text-sm font-bold">
                Product Brand
              </label>
              <input
                name="product-brand"
                type="text"
                className="w-full p-2 rounded-md text-gray-700 border border-gray-600 focus:outline-none focus:border-gray-400 text-sm"
                placeholder="Enter Product Brand"
              />
            </div>
            {/* Product Color */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="product-color" className="text-sm font-bold">
                Product Color
              </label>
              <input
                name="product-color"
                type="text"
                className="w-full p-2 rounded-md text-gray-700 border border-gray-600 focus:outline-none focus:border-gray-400 text-sm"
                placeholder="Enter Product Color"
              />
            </div>
          </div>
          {/* Product Price and Sale Price */}
          <div className="flex gap-3">
            {/* Product Brand */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="product-price" className="text-sm font-bold">
                Product Price
              </label>
              <input
                name="product-price"
                type="text"
                className="w-full p-2 rounded-md text-gray-700 border border-gray-600 focus:outline-none focus:border-gray-400 text-sm"
                placeholder="Enter Product Price"
              />
            </div>
            {/* Product sale_price */}
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="product-sale_price" className="text-sm font-bold">
                Product Sale Price
              </label>
              <input
                name="product-sale_price"
                type="text"
                className="w-full p-2 rounded-md text-gray-700 border border-gray-600 focus:outline-none focus:border-gray-400 text-sm"
                placeholder="Enter Product Sale Price"
              />
            </div>
          </div>

          {/* Category and Sizes */}

          {/* Category Select */}
          <div>
            <label className="block font-semibold mb-2 text-black">
              Category
            </label>
            <Select onValueChange={(value) => handleValueChange(value)}>
              <SelectTrigger className="w-full rounded-md  border border-gray-600">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Men">Men</SelectItem>
                <SelectItem value="Women">Women</SelectItem>
                <SelectItem value="Kids">Kids</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sub-Category and Size Select */}
          {category && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-2 text-black">
                  Sub-Category
                </label>
                <Select onValueChange={(value) => setSubCategory(value)}>
                  <SelectTrigger className="w-full rounded-md  border border-gray-600">
                    <SelectValue placeholder="Select Sub-Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="T-Shirts">T-Shirts</SelectItem>
                    <SelectItem value="Shirts">Shirts</SelectItem>
                    <SelectItem value="Trousers">Trousers</SelectItem>
                    <SelectItem value="Footwear">Footwear</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {subCategory && subCategory !== "Footwear" && (
                <div>
                  <label className="block font-semibold mb-2 text-black">
                    Size
                  </label>
                  <Select onValueChange={(value) => setSize(value)}>
                    <SelectTrigger className="w-full rounded-md  border border-gray-600">
                      <SelectValue placeholder="Select Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {subCategory === "Footwear" && (
                <div>
                  <label className="block font-semibold mb-2 text-black">
                    Shoe Size
                  </label>
                  <Select onValueChange={(value) => setSize(value)}>
                    <SelectTrigger className="w-full rounded-md  border border-gray-600">
                      <SelectValue placeholder="Select Shoe Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UK5">UK5</SelectItem>
                      <SelectItem value="UK6">UK6</SelectItem>
                      <SelectItem value="UK7">UK7</SelectItem>
                      <SelectItem value="UK8">UK8</SelectItem>
                      <SelectItem value="UK9">UK9</SelectItem>
                      <SelectItem value="UK10">UK10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}

          <Button>Add Product</Button>
        </form>
      </section>
    </main>
  );
}

export default AddNewProduct;
