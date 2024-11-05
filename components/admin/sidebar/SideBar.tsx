"use client";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Dashboard from "../dashboard/Dashboard";
import Order from "../orders/Order";
import Reviews from "../reviews/Reviews";
import AddNewProduct from "@/components/add-new-product/AddNewProduct";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const toggleModal = () => setShowModal(!showModal);

  const renderContent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <Order />;
      case "Reviews":
        return <Reviews />;
      case "New_Product":
        return <AddNewProduct />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="md:flex w-full lg:h-screen">
      {/* Sidebar - Left Aligned */}
      <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 bg-black text-white ">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col items-center p-4 h-full">
          <h1 className="text-xl lg:text-2xl font-bold mb-6">Ecom Express</h1>
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-500 w-24 h-24"></div>
            <h2 className="mt-2 font-semibold">Admin Name</h2>
            <p className="text-gray-400">admin@example.com</p>
          </div>
          <hr className="border-gray-500 w-full my-4" />
          <nav className="flex flex-col space-y-4 w-full">
            <button
              className={`py-2 px-4 w-full text-left ${
                activeComponent === "Dashboard" ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => setActiveComponent("Dashboard")}
            >
              Dashboard
            </button>

            <button
              className="py-2 px-4 w-full text-left"
              onClick={() => setActiveComponent("Orders")}
            >
              Orders
            </button>
            <button
              className="py-2 px-4 w-full text-left"
              onClick={() => setActiveComponent("Reviews")}
            >
              Reviews
            </button>
            <button
              className="py-2 px-4 w-full text-left"
              onClick={() => setActiveComponent("New_Product")}
            >
              Add New Product
            </button>
          </nav>
          <button className="mt-auto py-2 px-4 w-full text-left">Logout</button>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex justify-between items-center w-full p-4">
          <h1 className="text-sm font-bold">Ecom Express</h1>
          <div className="text-xs flex items-center space-x-4">
            <button
              className={`py-2 px-4 w-full text-left ${
                activeComponent === "Dashboard" ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => setActiveComponent("Dashboard")}
            >
              Dashboard
            </button>

            <button onClick={() => setActiveComponent("Orders")}>Orders</button>
            <button onClick={() => setActiveComponent("Reviews")}>
              Reviews
            </button>
            <button onClick={() => setActiveComponent("New_Product")}>
              Add New Products
            </button>
            <FaUserCircle
              onClick={toggleModal}
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Modal for Mobile Profile */}
        {showModal && (
          <div className="absolute top-0 right-0 w-2/3 bg-white text-black shadow-lg p-4 rounded-md z-10">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-500 w-16 h-16 mb-2"></div>
              <h2 className="font-semibold">Admin Name</h2>
              <p className="text-gray-600">admin@example.com</p>
              <button className="mt-4 text-red-500" onClick={toggleModal}>
                Close
              </button>
              <button className="text-red-700">Logout</button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area - Right Aligned */}
      <div className="p-2 lg:p-6 w-full bg-gray-100">{renderContent()}</div>
    </div>
  );
};

export default Sidebar;
