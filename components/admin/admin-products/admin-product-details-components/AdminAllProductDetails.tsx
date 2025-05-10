import React from "react";
import { AiFillStar } from "react-icons/ai";

function AdminAllProductDetails() {
  // Sample data for reviews
  const reviews = [
    { id: 1, username: "Alice", rating: 4, reviewText: "Great product!" },
    { id: 2, username: "Bob", rating: 5, reviewText: "Amazing quality!" },
    {
      id: 3,
      username: "Charlie",
      rating: 3,
      reviewText: "Good but could be better.",
    },
  ];
  return (
    <main className=" rounded-lg">
      <section className="shadow-md shadow-gray-300 bg-white rounded-lg h-full p-6 border ">
        {/* product details */}
        <section className="flex flex-col h-[60%] justify-evenly">
          {/* Product Name */}
          <h2 className="text-2xl font-semibold mb-2">Product Name</h2>

          {/* Star Rating and Reviews */}
          <div className="flex items-center justify-between w-1/3 mb-4">
            <div className="flex items-center space-x-4">
              {/* Stars */}
              <div className="flex space-x-1 text-gold-500">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className="text-yellow-500" />
                ))}
              </div>
              {/* Rating */}
              <span className=" text-gray-600">(55 reviews)</span>
            </div>
            <span className="text-gray-700 text-lg font-semibold">4.5</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">₹2,000</span>
              <span className="text-lg line-through text-red-600">₹2,500</span>
            </div>
          </div>

          {/* Category */}
          <div className="mb-2 flex space-x-4">
            <span className="font-semibold text-[#04022b]">Category:</span>
            <span className="ml-2 text-gray-950">T-shirt</span>
          </div>

          {/* Gender */}
          <div className="mb-2 flex space-x-8">
            <span className="font-semibold text-[#04022b]">Gender:</span>
            <span className="text-gray-950">Female</span>
          </div>

          {/* Item Added */}
          <div className="flex space-x-10">
            <span className="text-[#04022b] font-semibold">Added:</span>
            <span>24-05-2023</span>
          </div>
          {/* Description */}
          <div className="mt-4">
            <span className="text-[#04022b] font-semibold">Description:</span>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum orci id nunc convallis, ut accumsan lorem dignissim.
            </p>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-gray-300 my-6" />

        {/* Reviews */}
        <section className="">
          <div className="text-2xl font-semibold ">User Reviews</div>
          <div className="flex items-center space-x-5 justify-between mt-10">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="h-[130px] w-[230px] bg-white border shadow-md shadow-gray-400 rounded-lg p-2"
              >
                <div className="flex flex-col justify-evenly h-full">
                  <h4 className="text-xl font-semibold capitalize">
                    {review.username}
                  </h4>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(review.rating)].map((_, index) => (
                      <AiFillStar
                        key={index}
                        className="text-yellow-500 text-xs"
                      />
                    ))}
                  </div>
                  <p className="text-md text-[#0a0431]">{review.reviewText}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default AdminAllProductDetails;
