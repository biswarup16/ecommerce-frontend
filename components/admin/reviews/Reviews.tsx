import React from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

// Sample review data
const reviewsData: Review[] = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing product! Quality is top-notch and worth every penny.",
    date: "2024-10-12",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great product, but the delivery was a bit delayed.",
    date: "2024-10-15",
  },
  {
    id: 3,
    name: "Emily Johnson",
    rating: 3,
    comment: "Product is okay, but I expected better packaging.",
    date: "2024-10-20",
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="p-6">
      {/* Title Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <hr className="border-gray-700 mt-2" />
      </div>

      {/* Reviews List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="border rounded-lg shadow-md p-4 bg-white flex flex-col"
          >
            {/* Customer Info */}
            <div className="mb-2">
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-gray-500 text-sm">{review.date}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="font-bold text-yellow-500 mr-2">
                {"★".repeat(review.rating)}
              </span>
              <span className="text-gray-500">{review.rating} / 5</span>
            </div>

            {/* Comment */}
            <p className="text-gray-700 mb-4">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
