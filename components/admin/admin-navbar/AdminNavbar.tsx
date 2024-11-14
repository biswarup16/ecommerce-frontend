"use client";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
const AdminNavbar = () => {
  const [toggleModal, setToggleModal] = useState(false);

  function toggleCart() {
    setToggleModal((prev) => !prev);
  }

  const [pathname, setPathname] = useState("");
  const [urlName, setUrlName] = useState("");

  const currentPathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentUrlName = searchParams.get("name");

    setPathname(currentPathname);
    setUrlName(currentUrlName || "");
  }, [currentPathname, searchParams]);
  return (
    <div className="relative h-[100px]  bg-gray-200 flex items-center justify-between px-6">
      {/* Left Corner - Welcome Text */}
      <div className="text-2xl font-semibold capitalize ">
        {pathname === "/admin" ? "Welcome" : urlName}
      </div>

      {/* Right Corner - Searchbar and Profile Icon */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent"
          />
          <FaSearch className="text-gray-600 ml-2" />
        </div>

        {/* Profile Icon */}
        <FaUserCircle
          className="text-3xl text-gray-700 cursor-pointer"
          onClick={toggleCart}
        />
      </div>

      {/* Modal */}
      {toggleModal && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm flex items-start justify-end pt-[68px] pr-8 z-10"
          onClick={toggleCart} // Close modal when clicking outside the modal content
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80 z-20"
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
          >
            {/* Profile Image */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Profile"
                className="w-12 h-12 rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">Admin Name</h3>
              <p className="text-gray-500">admin@email.com</p>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Buttons */}
            <div className="flex justify-around">
              <button
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                onClick={toggleCart}
              >
                Close
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
