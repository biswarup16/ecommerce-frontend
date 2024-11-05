import React from "react";
import Link from "next/link"; // Importing Next.js Link for internal navigation

function Footer() {
  return (
    <>
      <footer className="bg-black w-full text-white mt-auto ">
        <div className="w-full lg:max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <Link
                className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
                Ecom Express
              </Link>
            </div>
            {/* Product Links */}
            <div className="col-span-1">
              <h4 className="font-semibold">Product</h4>
              <div className="mt-3 grid space-y-3">
                <Link
                  href="#"
                  className="hover:text-gray-200 focus:outline-none"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-200 focus:outline-none"
                >
                  Changelog
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-200 focus:outline-none"
                >
                  Docs
                </Link>
              </div>
            </div>
            {/* Company Links */}
            <div className="col-span-1">
              <h4 className="font-semibold">Company</h4>
              <div className="mt-3 grid space-y-3">
                <Link
                  href="#"
                  className="hover:text-gray-200 focus:outline-none"
                >
                  About us
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-200 focus:outline-none"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-200 focus:outline-none"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="hover:text-gray-200 focus:outline-none"
                >
                  Customers
                </Link>
              </div>
            </div>
            {/* Subscribe Form */}
            <div className="col-span-2">
              <h4 className="font-semibold">Stay up to date</h4>
              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white text-black rounded-lg p-2">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Subscribe
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 w-full rounded-lg text-sm focus:ring-black focus:border-black"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto p-3 inline-flex justify-center items-center text-sm font-medium rounded-lg bg-black text-white hover:bg-gray-800 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  New UI kits or big discounts. Never spam.
                </p>
              </form>
            </div>
          </div>
          {/* Bottom Row */}
          <div className="mt-5 sm:mt-12 flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ecom Express.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              <Link href="#" className="p-2 rounded-full hover:bg-gray-800">
                {/* Social SVGs here */}
              </Link>
              {/* Additional social media icons as needed */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
