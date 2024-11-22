"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
interface Variant {
  variant_id: number;
  color: string;
  images: File[];
  stock: number;
  sizes: string[];
  price: number;
  sale_price: number;
}

interface Product {
  product_name: string;
  product_description: string;
  product_category: string;
  product_sub_category: string;
  variants: Variant[];
}

const AdminCreateProduct: React.FC = () => {
  const [files, setFiles] = useState<string[]>([]);

  // Save variants before creating products
  const [newVariant, setNewVariant] = useState<Variant>({
    variant_id: 1,
    color: "",
    images: [],
    stock: 0,
    sizes: [],
    price: 0,
    sale_price: 0,
  });
  const categoryOptions = ["T-Shirts", "Shirts", "Trousers"];
  const subCategoryOptions = ["Mens", "Womens", "Kids"];

  // Variant Section Opens
  const [toggleVariantSection, setToggleVariantSection] = useState(false);

  // Product Data
  const [product, setProduct] = useState<Product>({
    product_name: "",
    product_description: "",
    product_category: "",
    product_sub_category: "",
    variants: [],
  });

  // StoringProduct inputs

  function handleProductChange(e: any) {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Storing Variant events
  function handleVariantChange(e: any) {
    const { name, value, files } = e.target;
    setNewVariant((prev) => {
      if (name === "sizes") {
        const sizeArray = value.split(",").map((size: any) => size.trim());
        return {
          ...prev,
          [name]: sizeArray,
        };
      }
      if (name === "images" && files) {
        // Convert FileList to an array and store in images
        const fileArray = Array.from(files) as File[];
        return {
          ...prev,
          images: fileArray,
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function saveVariant() {
    setProduct((prev) => ({
      ...prev,
      variants: [...prev.variants, newVariant],
    }));
    setNewVariant({
      variant_id: newVariant.variant_id + 1,
      color: "",
      images: [],
      stock: 0,
      sizes: [],
      price: 0,
      sale_price: 0,
    });
    setToggleVariantSection(false);
  }

  // function SubmitProductData(e: any) {
  //   e.preventDefault();
  //   console.log("Product Details: ", product);
  // }
  const productApi = process.env.NEXT_PUBLIC_API_FOR_CREATE_PRODUCT || "";
  console.log("URL: ", productApi);

  async function SubmitProductData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch(productApi, {
        method: "POST",
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Product created successfully:", data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }

  const isProductFieldsFilled =
    product.product_name &&
    product.product_description &&
    product.product_category &&
    product.product_sub_category;

  const isVariantFieldsFilled =
    newVariant.color &&
    newVariant.images.length > 0 &&
    newVariant.price &&
    newVariant.sale_price &&
    newVariant.stock &&
    newVariant.sizes.length > 0;

  return (
    <div className="p-6 bg-gray-100 h-[86dvh] overflow-y-scroll scrollbar-hide">
      <form onSubmit={SubmitProductData}>
        {/* Product Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Create Product
          </h1>

          {/* Product Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g: Cotton T-shirt"
                className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                name="product_name"
                value={product.product_name}
                onChange={handleProductChange}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="product_category"
                value={product.product_category}
                onChange={handleProductChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
              >
                <option value="">Select Category</option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Sub-Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sub-Category <span className="text-red-500">*</span>
              </label>
              <select
                name="product_sub_category"
                value={product.product_sub_category}
                onChange={handleProductChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
              >
                <option value="">Select Sub-Category</option>
                {subCategoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g: Puma"
                className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                onChange={handleProductChange}
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="product_description"
              placeholder="Enter product description"
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
              value={product.product_description}
              onChange={handleProductChange}
            ></textarea>
          </div>

          {/* Add Variant Button */}
          <div className="mt-8">
            <Button
              className={`w-full py-3 text-white rounded-md shadow ${
                !isProductFieldsFilled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
              type="button"
              disabled={!isProductFieldsFilled}
              onClick={() => setToggleVariantSection(!toggleVariantSection)}
            >
              Add Variant
            </Button>
          </div>
        </div>

        {/* Variant Section */}
        {toggleVariantSection && isProductFieldsFilled && (
          <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Add Variant
            </h2>

            <div className="my-6">
              <label className="block text-sm font-medium text-gray-700">
                Images <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                multiple
                required
                placeholder="Upload up to 8 images"
                name="images"
                onChange={handleVariantChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <input
                  type="text"
                  placeholder="e.g: Blue"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                  name="color"
                  value={newVariant.color}
                  onChange={handleVariantChange}
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock
                </label>
                <input
                  type="number"
                  placeholder="e.g: 30"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                  name="stock"
                  value={newVariant.stock}
                  onChange={handleVariantChange}
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="e.g: 2990"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                  name="price"
                  value={newVariant.price}
                  onChange={handleVariantChange}
                />
              </div>

              {/* Sale Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sale Price
                </label>
                <input
                  type="number"
                  placeholder="e.g: 3500"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                  name="sale_price"
                  value={newVariant.sale_price}
                  onChange={handleVariantChange}
                />
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sizes
              </label>
              <input
                type="text"
                placeholder={`e.g: S, XS`}
                className="w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
                name="sizes"
                value={newVariant.sizes}
                onChange={handleVariantChange}
              />
            </div>

            {/* Save Changes Button */}
            <div className="mt-8">
              <Button
                className={`w-full py-3 text-white rounded-md shadow`}
                type="button"
                onClick={saveVariant}
                disabled={!isVariantFieldsFilled}
              >
                Save Changes
              </Button>
            </div>
          </div>
        )}

        {/* Submit Product */}
        {product.variants.length > 0 && (
          <div className="mt-10">
            <Button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md shadow">
              Create Product
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AdminCreateProduct;
