import React from "react";
import {
  FaShoppingBag,
  FaUser,
  FaDollarSign,
  FaExclamationCircle,
} from "react-icons/fa";

function DashboardCards() {
  const cardData = [
    {
      type: "orders",
      icon: <FaShoppingBag className="w-12 h-10 text-[#FF6C2F]" />,
      heading: "Total Orders",
      number: 236598,
    },
    {
      type: "users",
      icon: <FaUser className="w-12 h-10 text-[#FF6C2F]" />,
      heading: "Total Users",
      number: 320,
    },
    {
      type: "sales",
      icon: <FaDollarSign className="w-12 h-10 text-[#FF6C2F]" />,
      heading: "Total Sales",
      number: "$12,500",
    },
    {
      type: "stock",
      icon: <FaExclamationCircle className="w-12 h-10 text-[#FF6C2F] " />,
      heading: "Empty Stocks",
      number: 5,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-10 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow shadow-emerald-200 rounded-lg p-4 w-[250px] h-[160px] flex flex-col justify-between border "
        >
          <div className="flex items-center justify-between">
            <div className="bg-[#FFDACB] h-16 w-16 flex  justify-center items-center rounded-full">
              {card.icon}
            </div>
            <h3 className="text-xl  text-wrap font-semibold text-gray-900">
              {card.heading}
            </h3>
          </div>
          <span className="text-2xl text-end font-bold text-gray-900">
            {card.number}
          </span>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
