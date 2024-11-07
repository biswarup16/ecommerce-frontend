"use client";
import React, { useState } from "react";
import ProductCard from "../product-card/ProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductData } from "@/utils/ProductData.js";

function ProductList() {
  // Setting up the product data and filter options
  const [products] = useState(ProductData);
  const [subCategorySelected, setsubCategorySelected] = useState("");

  // Define options for filters
  const categories = ["Men", "Women", "Kids"];
  const subCategories = ["T-shirts", "Shirts", "Trouser", "Footwares"];
  const sortOptions = ["Price: Low to High", "Price: High to Low"];
  const SizeOption = [
    {
      type: "Clothing",
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      type: "Footwares",
      sizes: ["UK6", "UK7", "UK8", "UK9", "UK10"],
    },
  ];

  const colorOptions = [
    { name: "Blue" },
    { name: "Red" },
    { name: "Black" },
    { name: "White" },
    { name: "Green" },
    // Add more colors as needed
  ];

  // Conditional Sizes options
  function getSizeOption(): string[] {
    // If no sub-category is selected
    if (!subCategorySelected) {
      return SizeOption.flatMap((option) => option.sizes);
    }

    return subCategorySelected === "Footwares"
      ? // If footware selected
        SizeOption.find((option) => option.type === "Footwares")?.sizes || []
      : // If clothing selected
        SizeOption.find((option) => option.type === "Clothing")?.sizes || [];
  }

  const [categorySelected, setCategorySelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");
  const [sortSelected, setSortSelected] = useState("");
  const [sizeSelected, setSizeSelected] = useState("");

  // Filtering Logic
  function getFilterProduct() {
    return (
      products
        .filter((product) =>
          // Category
          categorySelected ? product.category === categorySelected : true
        )
        // Sub Category
        .filter((product) =>
          subCategorySelected
            ? product.sub_category === subCategorySelected
            : true
        )
        // color
        .filter((product) =>
          colorSelected
            ? product.variants.some((v) => v.color === colorSelected)
            : true
        )

        // Sizes
        .filter((product) =>
          sizeSelected
            ? product.variants.some((s) => s.sizes.includes(sizeSelected))
            : true
        )

        // // Sorting
        .sort((a, b) => {
          if (sortSelected === "Price: Low to High") {
            const priceA = a.variants.find((p) => p.price)?.price ?? 0;
            const priceB = b.variants.find((p) => p.price)?.price ?? 0;
            return priceA - priceB;
          }
          if (sortSelected === "Price: High to Low") {
            const priceA = a.variants.find((p) => p.price)?.price ?? 0;
            const priceB = b.variants.find((p) => p.price)?.price ?? 0;
            return priceB - priceA;
          }
          return 0;
        })
    );
  }

  return (
    <div className=" lg:max-w-[90rem] mx-auto text-black px-6 py-1">
      {/* Filters Section */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Filters</h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {/* Category Selector */}
          <Select
            onValueChange={(value) =>
              setCategorySelected(value === "none" ? "" : value)
            }
          >
            <SelectTrigger className="w-[180px] border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectItem value="none">Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Sub Category Selector */}
          <Select
            onValueChange={(value) =>
              setsubCategorySelected(value === "none" ? "" : value)
            }
          >
            <SelectTrigger className="w-[180px] border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Sub Category" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectItem value="none">Sub-Categories</SelectItem>
                {subCategories.map((sub) => (
                  <SelectItem key={sub} value={sub}>
                    {sub}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Sort Selector */}
          <Select
            onValueChange={(value) =>
              setSortSelected(value === "none" ? "" : value)
            }
          >
            <SelectTrigger className="w-[180px] border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectItem value="none">Sort Options</SelectItem>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Size Selector */}
          <Select
            onValueChange={(value) =>
              setSizeSelected(value === "none" ? "" : value)
            }
          >
            <SelectTrigger className="w-[180px] border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Sizes" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectItem value="none">Sizes</SelectItem>
                {getSizeOption().map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Color Selector */}
          <Select
            onValueChange={(value) =>
              setColorSelected(value === "none" ? "" : value)
            }
          >
            <SelectTrigger className="w-[180px] border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Select Color" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectGroup>
                <SelectItem value="none">Colors</SelectItem>
                {colorOptions.map((color) => (
                  <SelectItem key={color.name} value={color.name}>
                    <div className="flex items-center justify-between w-[100px]">
                      <span className="text-left">{color.name}</span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color.name.toLowerCase() }}
                      ></span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {getFilterProduct().map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
