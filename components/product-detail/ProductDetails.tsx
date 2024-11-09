"use client";
import React, { useState, useEffect } from "react";
import ImageGallery from "./image-gallery/ImageGallery";
import ProductColor from "./product-color/ProductColor";
import ProductSize from "./product-sizes/ProductSize";
import { ProductData } from "@/utils/ProductData";
import { Button } from "../ui/button";
import { useCart } from "../context-provider/ContextProvider";

function ProductDetails() {
  const { addToCart, cartItems } = useCart();
  // Pincode
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [product, setProduct] = useState<any>();
  const [variant, setVariant] = useState<any>();
  const [quantity, setQuantity] = useState<any | null>(1); // State for quantity
  const [selectedSize, setSelectedSize] = useState<string | null>();
  const [variantImages, setVariantImages] = useState<any[]>([]); // Store images for the selected variant

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("product_id"));
    const variantId = Number(params.get("variant_id"));

    // Find the product and variant in ProductData
    const foundProduct = ProductData.find((p) => p.product_id === productId);
    if (foundProduct) {
      const foundVariant = foundProduct.variants.find(
        (v) => v.variant_id === variantId
      );

      if (foundVariant) {
        setProduct(foundProduct);
        setVariant(foundVariant);
        setVariantImages(foundVariant.images); // Set images of the initial variant
        setSelectedSize(foundVariant.sizes[0]); //Default Size
      }
    }
  }, []);

  if (!product || !variant) {
    return <p>Loading product details...</p>; // Handle loading or no product found
  }

  // PinCode Checker
  const validPincodes = ["793101", "560001", "400001"]; // Example valid PIN codes

  const handleCheck = () => {
    if (validPincodes.includes(pincode)) {
      setMessage("Pincode is available for Delivery!!");
    } else {
      setMessage("Out of Reach");
    }
  };

  // Add To cart

  const handleAddToCart = (index: number) => {
    const productData = {
      cartItem_id: index,
      product_id: product.product_id,
      product_name: product.product_name,
      product_brand: product.product_brand,
      product_category: product.category,
      variant_id: variant.variant_id,
      variant_price: variant.price,
      variant_stock: variant.stock,
      variant_color: variant.color,
      variant_sizes: variant.sizes,
      selectedSize: selectedSize,
      variant_image: variant.images,
      product_quantity: quantity,
    };

    addToCart(productData); // Add product to the cart
  };

  // Handle Variant Changes
  const handleVariantChange = (variantId: number) => {
    const selectedVariant = product.variants.find(
      (v: any) => v.variant_id === variantId
    );
    if (selectedVariant) {
      setVariant(selectedVariant);
      setVariantImages(selectedVariant.images);
    }
  };

  return (
    <main className="container mx-auto flex flex-col lg:grid lg:grid-cols-3 h-screen p-4 w-full">
      {/* Left Section - Image Gallery for varaints */}
      <div className="lg:col-span-2">
        <ImageGallery
          setVariantListProps={variantImages.map((src, index) => ({
            src,
            alt: `${product.product_name} Image ${index + 1}`,
          }))}
        />
      </div>

      {/* Right Section - Product Details */}
      <section className="lg:col-span-1 h-full flex-1 px-4 pb-8 pt-4 lg:pt-1 lg:pl-6 bg-white overflow-auto scrollbar-hide mx-[2px]">
        {/* Product Name and Price */}
        <div className="flex flex-col space-y-2 mb-6">
          <h1 className="text-3xl font-bold">{product.product_name}</h1>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">₹{variant.sale_price}</p>
            <span className="text-sm text-gray-600">Prices include GST</span>
          </div>
        </div>

        {/* Color details */}
        <div className="mb-6">
          <div className="flex flex-col mb-6">
            <span className="text-lg font-bold">Color</span>
            <span className="text-gray-600 text-sm">{variant.color}</span>
          </div>
          <ProductColor
            imageListProps={product.variants.map((v: any) => ({
              src: v.images[0], // Use first image of each variant for color selection
              alt: `${product.product_name} Color ${v.color}`,
              id: v.variant_id,
            }))}
            handleimageColorChangeCallback={handleVariantChange} // Update variant images on color change
          />
        </div>

        {/* Sizes Component */}
        <div className="flex flex-col space-y-3 justify-start mb-6 border-b-2 pb-6">
          <h1 className="font-semibold">Size</h1>
          <ProductSize
            selecetedSize={(size: string) => setSelectedSize(size)}
            availableSizes={variant.sizes}
          />
        </div>

        {/* Quantity and Add to Cart Button */}
        <div className="mb-6 border-b-2 pb-8">
          <div className="flex gap-2 items-start">
            {/* Quantity Dropdown */}
            <div className="">
              <select
                title="quantity"
                id="quantity"
                name="quantity"
                className="border border-gray-300 py-3 px-2 text-sm"
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/*  Buttons */}
            <div className="flex flex-col gap-1 w-full mx-1">
              <Button
                className="text-sm font-semibold py-[22px] w-full !rounded-none"
                onClick={(e) => handleAddToCart(cartItems.length)}
              >
                Add to Cart
              </Button>
            </div>
          </div>
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
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="border border-black p-2 w-[74%] text-sm"
            />
            <Button
              onClick={handleCheck}
              className="px-[26px] py-[22px] !rounded-none"
            >
              Check
            </Button>
          </div>
          {message && (
            <span
              className={`mt-2 text-sm ${
                message === "Out of Reach" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </span>
          )}
        </div>

        {/* Description of the Product */}
        <div className="mb-6 border-b-2 pb-6">
          <p className="font-bold pb-3">Description</p>
          <p className="text-gray-800 text-sm pb-3">
            {product.product_description}
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="text-gray-700 text-sm">
                Style: {variant.variant_id}
              </span>
            </li>
            <li>
              <span className="text-gray-700 text-sm">
                Color: {variant.color}
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
