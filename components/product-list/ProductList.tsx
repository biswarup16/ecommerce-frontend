import ProductCard from "../product-card/ProductCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ProductList() {
  const categories = ["All", "Shoes", "Casual", "T-shirt", "Pants"];
  const sortOptions = ["Relevance", "Price: Low to High", "Price: High to Low"];
  const SizeOption = ["All", "XS", "S", "M", "L", "XL"];
  const colorOptions = [
    { name: "Red", code: "#FF0000" },
    { name: "Green", code: "#00FF00" },
    { name: "Blue", code: "#0000FF" },
    { name: "Yellow", code: "#FFFF00" },
    { name: "Purple", code: "#800080" },
  ];
  // Placeholder product data
  const products = [
    { id: 1, name: "Product 1", price: "99.99" },
    { id: 2, name: "Product 2", price: "149.99" },
    { id: 3, name: "Product 3", price: "79.99" },
    { id: 4, name: "Product 4", price: "79.99" },
    { id: 5, name: "Product 5", price: "79.99" },
    { id: 6, name: "Product 6", price: "79.99" },
    { id: 7, name: "Product 7", price: "79.99" },
    { id: 8, name: "Product 8", price: "79.99" },
    { id: 9, name: "Product 5", price: "79.99" },
    { id: 10, name: "Product 6", price: "79.99" },
    { id: 11, name: "Product 7", price: "79.99" },
    { id: 12, name: "Product 8", price: "79.99" },
  ];

  return (
    <div className="min-h-screen text-black px-6 py-1">
      {/* Filters Section */}
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Filters</h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {/* Category Selector */}
          <Select>
            <SelectTrigger className="w-[180px]  border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectLabel className="text-gray-300">Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Sort Selector */}
          <Select>
            <SelectTrigger className="w-[180px]  border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectLabel className="text-gray-300">
                  Sort Options
                </SelectLabel>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Size Selector */}
          <Select>
            <SelectTrigger className="w-[180px]  border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Sizes" />
            </SelectTrigger>
            <SelectContent className="bg-black text-white">
              <SelectGroup>
                <SelectLabel className="text-gray-300">Sizes</SelectLabel>
                {SizeOption.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* Color Selector */}
          <Select>
            <SelectTrigger className="w-[180px] border border-black/60 text-black rounded p-4">
              <SelectValue placeholder="Select Color" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
              <SelectGroup>
                <SelectLabel className="text-gray-500">Colors</SelectLabel>
                {colorOptions.map((color) => (
                  <SelectItem key={color.name} value={color.name}>
                    <div className="flex items-center justify-between w-[100px]">
                      <span className="text-left">{color.name}</span>
                      {/* Left-align name */}
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color.code }}
                      ></span>
                      {/* Right-align color dot */}
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
