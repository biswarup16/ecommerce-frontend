import React from "react";
import Image from "next/image";

const productData = [
  {
    id: 1,
    name: "Product 1",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand A",
    stock: 10,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 2,
    name: "Product 2",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand B",
    stock: 8,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 3,
    name: "Product 3",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand C",
    stock: 12,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 4,
    name: "Product 4",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand D",
    stock: 5,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 5,
    name: "Product 5",
    description: "A great product.",
    price: "$55",
    salePrice: "$45",
    category: "Electronics",
    brand: "Brand E",
    stock: 15,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 6,
    name: "Product 6",
    description: "A great product.",
    price: "$60",
    salePrice: "$50",
    category: "Electronics",
    brand: "Brand F",
    stock: 7,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 7,
    name: "Product 7",
    description: "A great product.",
    price: "$45",
    salePrice: "$35",
    category: "Electronics",
    brand: "Brand G",
    stock: 11,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 8,
    name: "Product 8",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand H",
    stock: 9,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 9,
    name: "Product 9",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand I",
    stock: 13,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 10,
    name: "Product 10",
    description: "A great product.",
    price: "$65",
    salePrice: "$55",
    category: "Electronics",
    brand: "Brand J",
    stock: 6,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 11,
    name: "Product 11",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand K",
    stock: 8,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 12,
    name: "Product 12",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand L",
    stock: 14,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 13,
    name: "Product 13",
    description: "A great product.",
    price: "$60",
    salePrice: "$50",
    category: "Electronics",
    brand: "Brand M",
    stock: 3,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 14,
    name: "Product 14",
    description: "A great product.",
    price: "$70",
    salePrice: "$60",
    category: "Electronics",
    brand: "Brand N",
    stock: 2,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 15,
    name: "Product 15",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand O",
    stock: 18,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 16,
    name: "Product 16",
    description: "A great product.",
    price: "$75",
    salePrice: "$65",
    category: "Electronics",
    brand: "Brand P",
    stock: 9,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 17,
    name: "Product 17",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand Q",
    stock: 4,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 18,
    name: "Product 18",
    description: "A great product.",
    price: "$50",
    salePrice: "$40",
    category: "Electronics",
    brand: "Brand R",
    stock: 16,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 19,
    name: "Product 19",
    description: "A great product.",
    price: "$80",
    salePrice: "$70",
    category: "Electronics",
    brand: "Brand S",
    stock: 10,
    imageUrl: "/products-image/product1.avif",
  },
  {
    id: 20,
    name: "Product 20",
    description: "A great product.",
    price: "$55",
    salePrice: "$45",
    category: "Electronics",
    brand: "Brand T",
    stock: 5,
    imageUrl: "/products-image/product1.avif",
  },
];

const Dashboard = () => {
  return (
    <main className="container mx-auto p-6 h-screen overflow-hidden">
      {/* Title and Divider */}
      <section>
        <h1 className="text-2xl font-bold text-left">Dashboard</h1>
        <hr className="border-gray-500 my-4" />
      </section>

      {/* Product List */}
      <section className="grid gap-4 grid-cols-2 lg:grid-cols-4 overflow-y-auto h-[calc(100vh-100px)] lg:h-[calc(100vh-110px)] scrollbar-hide">
        {productData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col h-[250px] w-full sm:h-[280px] sm:w-[140px] md:w-[200px] md:h-[360px]  bg-white rounded-lg shadow-lg p-4 overflow-hidden "
          >
            <div className="relative h-1/2 w-full overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="mt-2 flex flex-col gap-1 text-black overflow-hidden">
              <h2 className="font-semibold text-sm sm:text-base">
                {product.name}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm truncate">
                {product.description}
              </p>
              <p className="text-gray-800 text-sm sm:text-base">
                <span className="line-through mr-2">{product.price}</span>
                <span className="text-red-500 font-bold">
                  {product.salePrice}
                </span>
              </p>
              <p className="text-xs text-gray-600">
                Category: {product.category}
              </p>
              <p className="text-xs text-gray-600">Brand: {product.brand}</p>
              <p className="text-xs text-gray-600">In Stock: {product.stock}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
