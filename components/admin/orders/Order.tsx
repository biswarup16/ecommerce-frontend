import { Button } from "@/components/ui/button";
import React, { useState } from "react";

// Types for Order and Product details
interface Order {
  id: number;
  orderNo: string;
  status: string;
  product: Product;
}

interface Product {
  id: number;
  name: string;
  description: string;
  color: string;
  brand: string;
  price: number;
  imageUrl: string;
}

// Sample orders data
const ordersData: Order[] = [
  {
    id: 1,
    orderNo: "ORD123",
    status: "Shipped",
    product: {
      id: 101,
      name: "Product Name",
      description: "Product Description",
      color: "Red",
      brand: "Brand Name",
      price: 100,
      imageUrl: "/path/to/image1.jpg",
    },
  },
  {
    id: 2,
    orderNo: "ORD1234",
    status: "Rejected",
    product: {
      id: 102,
      name: "Product Name 2",
      description: "Product Description 2",
      color: "Blue",
      brand: "Brand Name 2",
      price: 105,
      imageUrl: "/path/to/image2.jpg",
    },
  },
  {
    id: 3,
    orderNo: "ORD567",
    status: "Delivered",
    product: {
      id: 103,
      name: "Product Name 3",
      description: "Product Description 3",
      color: "Green",
      brand: "Brand Name 3",
      price: 110,
      imageUrl: "/path/to/image3.jpg",
    },
  },
  {
    id: 4,
    orderNo: "ORD890",
    status: "Processing",
    product: {
      id: 104,
      name: "Product Name 4",
      description: "Product Description 4",
      color: "Yellow",
      brand: "Brand Name 4",
      price: 120,
      imageUrl: "/path/to/image4.jpg",
    },
  },
];

const Order: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Function to open the modal with selected order details
  const handleOrderDetails = (order: Order) => {
    setSelectedOrder(order);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedOrder(null);
  };

  // Function to determine the status background color
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500 text-white";
      case "Shipped":
        return "bg-blue-500 text-white";
      case "Placed":
        return "bg-pink-500 text-white";
      case "Processing":
        return "bg-orange-300 text-black";
      case "Rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };

  return (
    <div className="p-6">
      {/* Title Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Order History</h2>
        <hr className="border-gray-700 mt-2" />
      </div>

      {/* Orders List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ordersData.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg shadow-md p-4 bg-white flex flex-col"
          >
            <div className="flex justify-between mb-2">
              <span className="font-bold">Order ID:</span>
              <span>{order.id}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Order No:</span>
              <span>{order.orderNo}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold">Status:</span>
              <span className={`p-1.5 rounded ${getStatusClass(order.status)}`}>
                {order.status}
              </span>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={() => handleOrderDetails(order)}
                className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
              >
                Order Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-3/4 max-w-lg p-6 rounded-md shadow-lg">
            <div className="flex flex-col items-center">
              <img
                src={selectedOrder.product.imageUrl}
                alt={selectedOrder.product.name}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">
                {selectedOrder.product.name}
              </h3>
              <p className="text-gray-700">
                {selectedOrder.product.description}
              </p>
              <p className="text-gray-500">
                Color: {selectedOrder.product.color} | Brand:{" "}
                {selectedOrder.product.brand}
              </p>
              <p className="text-gray-700 mt-2">
                Price: ₹{selectedOrder.product.price}
              </p>

              {/* Invoice Section */}
              <div className="mt-4 w-full">
                <h4 className="font-bold mb-2">Invoice Details:</h4>
                <p className="text-gray-700">
                  Order ID: {selectedOrder.orderNo}
                </p>
                <p className="text-gray-700">Order Date: 2024-11-02</p>{" "}
                {/* Placeholder date */}
                <p className="text-gray-700">
                  Delivery Address: 123 Street, City
                </p>{" "}
                {/* Placeholder address */}
                <p className="text-gray-700">Payment Status: Paid</p>{" "}
                {/* Placeholder payment status */}
              </div>

              {/* Close Button */}
              <Button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
