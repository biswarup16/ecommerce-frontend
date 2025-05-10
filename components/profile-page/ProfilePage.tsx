import Link from "next/link";
import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ProfilePage() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8">
        <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center text-gray-700 text-5xl">
          <FaUserCircle />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
      </section>

      {/* Account Details */}
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Account Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-500" />
            <span className="text-gray-700">Email: johndoe@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-gray-500" />
            <span className="text-gray-700">Phone: +123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <span className="text-gray-700">Location: New York, USA</span>
          </div>
        </div>
      </section>

      {/* Order History */}
      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order History</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-4 flex justify-between items-center">
            <span className="text-gray-800">Order #12345</span>
            <span className="text-gray-500">Completed</span>
          </li>
          <li className="py-4 flex justify-between items-center">
            <span className="text-gray-800">Order #67890</span>
            <span className="text-gray-500">Pending</span>
          </li>
        </ul>
      </section>

      {/* Settings and Logout */}
      <section className="flex flex-col gap-4 items-center md:items-start md:flex-row md:justify-between mt-8">
        {/* Account Settings Accordion */}
        <Accordion type="single" collapsible className="w-[40%] md:w-1/2">
          <AccordionItem value="account-settings">
            <AccordionTrigger className="text-lg font-semibold">
              Account Settings
            </AccordionTrigger>
            <AccordionContent className="mt-2 space-y-4">
              <div>
                <h3 className="text-md font-medium">Account Details</h3>
                <p className="text-sm text-gray-600">
                  Manage your account details, such as email, phone number, and
                  password.
                </p>
              </div>
              <div>
                <h3 className="text-md font-medium">Manage Address</h3>
                <p className="text-sm text-gray-600">
                  Add, edit, or delete your addresses for faster checkouts.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Logout Button */}
        <button className="flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 bg-red-600 text-white rounded-lg hover:bg-red-700">
          <FaSignOutAlt />
          <Link href="/login">Logout</Link>
        </button>
      </section>
    </main>
  );
}

export default ProfilePage;
