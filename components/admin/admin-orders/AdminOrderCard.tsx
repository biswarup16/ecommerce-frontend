import React from "react";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaShippingFast,
  FaClipboardList,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";

const cardData = [
  { name: "All Time Orders", number: "500", icon: <FaShoppingCart /> },
  { name: "Order Delivered", number: "320", icon: <FaCheckCircle /> },
  { name: "In Progress", number: "150", icon: <FaClock /> },
  { name: "Order Shipped", number: "120", icon: <FaShippingFast /> },
  { name: "New Orders", number: "60", icon: <FaClipboardList /> },
  { name: "Order Cancel", number: "30", icon: <FaTimesCircle /> },
];
function AdminOrderCard() {
  return (
    <div className="flex flex-wrap gap-6 justify-center ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white border shadow-md rounded-lg flex items-center justify-between h-[142px] w-[370px] p-4"
        >
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <span className="text-lg font-semibold">{card.name}</span>
            <span className="text-2xl font-bold">{card.number}</span>
          </div>

          {/* Right Section - Icon */}
          <div className="text-[rgb(255,143,87)] text-4xl flex items-center justify-center">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminOrderCard;
