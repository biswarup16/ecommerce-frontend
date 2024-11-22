"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaTh,
  FaBox,
  FaTags,
  FaShoppingCart,
  FaWarehouse,
  FaCog,
} from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div className="bg-black text-white w-full h-screen p-6">
        <h1 className="text-2xl font-bold mb-4">Ecom Express</h1>
        <hr className="border-gray-500 mb-6" />

        {/* Dashboard Link */}
        <Link href="/admin">
          <button
            onClick={() => setActiveSection("dashboard")}
            className={`flex items-center gap-2 w-full p-2 mb-2 text-left hover:underline ${
              activeSection === "dashboard"
                ? "bg-gray-700 rounded-md hover:no-underline"
                : ""
            }`}
          >
            <FaTh className="text-lg" /> Dashboard
          </button>
        </Link>

        {/* Accordion */}
        <Accordion type="single" collapsible className="pl-2">
          {/* Products Accordion */}
          <AccordionItem value="products">
            <AccordionTrigger>
              <div className="flex items-center space-x-2">
                <FaBox className="text-lg" />
                <span className="text-[16px]">Products</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link href="/admin/product/List?name=product list">
                <button
                  onClick={() => setActiveSection("product List")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "product List"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  List
                </button>
              </Link>
              <Link href="/admin/product/Create?name=product create">
                <button
                  onClick={() => setActiveSection("create Product")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "create Product"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  Create
                </button>
              </Link>
              <Link href="/admin/product/Edit?name=product edit">
                <button
                  onClick={() => setActiveSection("edit Product")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "edit Product"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  Edit
                </button>
              </Link>
              <Link href="/admin/product/Details?name=product details">
                <button
                  onClick={() => setActiveSection("product Details")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "product Details"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  Details
                </button>
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* Category Accordion */}
          <AccordionItem value="category">
            <AccordionTrigger className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <FaTags className="text-lg" />
                <span className="text-[16px]">Category</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link href="/admin/category/List?name=category list">
                <button
                  onClick={() => setActiveSection("category List")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "category List"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  List
                </button>
              </Link>
              <Link href="/admin/category/Create?name=category create">
                <button
                  onClick={() => setActiveSection("category Create")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "category Create"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  Create
                </button>
              </Link>
              <Link href="/admin/category/Edit?name=category edit">
                <button
                  onClick={() => setActiveSection("category Edit")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "category Edit"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  Edit
                </button>
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* Orders Accordion */}
          <AccordionItem value="orders">
            <AccordionTrigger className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <FaShoppingCart className="text-lg" />
                <span className="text-[16px]">Orders</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link href="/admin/orders/List?name=order list">
                <button
                  onClick={() => setActiveSection("order List")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "order List"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  List
                </button>
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* Inventory Accordion */}
          <AccordionItem value="inventory">
            <AccordionTrigger className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <FaWarehouse className="text-lg" />
                <span className="text-[16px]">Inventory</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link href="/admin/inventory/Inventory?name=warehouse inventory">
                <button
                  onClick={() => setActiveSection("warehouse Inventory")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "warehouse Inventory"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  Warehouse Inventory
                </button>
              </Link>
            </AccordionContent>
          </AccordionItem>

          {/* Settings Accordion */}
          <AccordionItem value="settings">
            <AccordionTrigger className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <FaCog className="text-lg" />
                <span className="text-[16px]">Settings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link href="/admin/settings/Homepage?name=homepage details">
                <button
                  onClick={() => setActiveSection("homepage Details")}
                  className={`block w-full p-2 hover:underline ${
                    activeSection === "homepage Details"
                      ? "bg-gray-700 rounded-md hover:no-underline"
                      : ""
                  }`}
                >
                  HomePage Details
                </button>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
