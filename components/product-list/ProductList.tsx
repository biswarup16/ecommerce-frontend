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
  const categories = ["All", "Electronics", "Fashion", "Home", "Beauty"];
  const sortOptions = ["Relevance", "Price: Low to High", "Price: High to Low"];

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
  ];

  return (
    <div className="min-h-screen text-black px-6 py-8">
      {/* Filters Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap gap-4">
          {/* Category Selector */}
          <Select>
            <SelectTrigger className="w-[180px] bg-black/70 border border-white text-white rounded p-4">
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
            <SelectTrigger className="w-[180px] bg-black/70 border border-white text-white rounded p-4">
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
        </div>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
