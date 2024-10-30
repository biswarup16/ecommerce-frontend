"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import CartSidebar from "../cart-sidebar/CartSidebar";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sidebar for Cart
  function onOpenSideBar() {
    setIsSideBarOpen(!isSideBarOpen);
  }
  function handleCloseSidebar() {
    setIsSideBarOpen(false);
  }

  // Menu For Mobile
  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      {/* HEADER */}
      <header className="bg-black h-20 flex items-center w-full z-30">
        <nav className="max-w-[90%]  w-full mx-2 lg:mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            className="font-semibold text-xl text-white"
            href="/"
            aria-label="Brand"
          >
            Ecom Express
          </Link>

          {/* Links (Desktop Only) */}
          <div className="hidden lg:flex gap-4 items-center">
            <Link
              className="text-white hover:text-gray-400 transition-colors"
              href="/products"
            >
              Products
            </Link>
            <Link
              className="text-white hover:text-gray-400 transition-colors"
              href="/sale"
            >
              Sale
            </Link>
            <Link
              className="text-white hover:text-gray-400 transition-colors"
              href="#heroBanner"
            >
              Most Demanded
            </Link>

            <Link
              className="text-white hover:text-gray-400 transition-colors"
              href="#category"
            >
              Category
            </Link>

            {/* Vertical Line and Log in */}
            <div className="flex items-center">
              <span className="border-l border-gray-600 h-6 mx-2"></span>
              <Link
                className="text-white hover:text-gray-400 transition-colors"
                href="/login"
              >
                Log in
              </Link>
            </div>

            {/* Cart Icon Button */}
            <button
              className="text-white hover:text-gray-400 transition-colors"
              onClick={onOpenSideBar}
              aria-label="Open Cart Sidebar"
            >
              <FiShoppingCart />
            </button>
            {/* Profile Icon Button */}
            <Link
              href="/profile"
              className="text-white hover:text-gray-400 transition-colors h-7 w-7"
              aria-label="Open Profile Page"
            >
              <CgProfile className="w-7 h-7" />
            </Link>
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="flex items-center space-x-4 lg:hidden ">
            <button
              className=" text-white text-2xl"
              onClick={toggleMobileMenu}
              aria-label="Open Mobile Menu"
            >
              <FiMenu />
            </button>
            <button
              className="text-white hover:text-gray-400 transition-colors "
              onClick={onOpenSideBar}
              aria-label="Open Cart Sidebar"
            >
              <FiShoppingCart />
            </button>
            {/* Profile Icon Button */}
            <Link
              href="/profile"
              className="text-white hover:text-gray-400 transition-colors h-7 w-7 lg:hidden"
              aria-label="Open Profile Page"
            >
              <CgProfile className="w-7 h-7" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div
            className={`fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40`}
            onClick={closeMobileMenu}
          />
          <div
            className={`fixed right-0 top-0 h-full w-full max-w-[300px] bg-black text-white z-50 p-6 transform transition-transform duration-700 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeMobileMenu}
              aria-label="Close Mobile Menu"
            >
              <IoClose />
            </button>

            {/* Logo */}
            <Link
              className="font-semibold text-2xl mb-8"
              href="/"
              aria-label="Brand"
              onClick={closeMobileMenu}
            >
              Ecom Express
            </Link>

            {/* Links */}
            <div className="flex flex-col gap-6 mt-8">
              <Link
                className="hover:text-gray-400 transition-colors"
                href="/products"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
              <Link
                className="hover:text-gray-400 transition-colors"
                href="/sale"
                onClick={closeMobileMenu}
              >
                Sale
              </Link>
              <Link
                className="hover:text-gray-400 transition-colors"
                href="/most-demanded"
                onClick={closeMobileMenu}
              >
                Most Demanded
              </Link>
              <Link
                className="hover:text-gray-400 transition-colors"
                href="/catalogue"
                onClick={closeMobileMenu}
              >
                Catalogue
              </Link>
              <Link
                className="hover:text-gray-400 transition-colors border-t pt-4 mt-4 border-gray-600"
                href="/login"
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Cart Sidebar */}
      <div className="relative z-30">
        {isSideBarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm"
            onClick={handleCloseSidebar}
          />
        )}
        <div
          className={`fixed right-0 top-0 h-full max-w-[500px] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isSideBarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <CartSidebar onClose={handleCloseSidebar} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
