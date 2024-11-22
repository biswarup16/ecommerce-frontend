"use client";
import React, { useState } from "react";
import Image from "next/image";
import AdminProductImage from "./admin-product-details-components/AdminProductImage";
import AdminAllProductDetails from "./admin-product-details-components/AdminAllProductDetails";

function AdminProductDetails() {
  return (
    <main className="h-[86vh] container">
      <section className="flex justify-between space-x-2 p-4 ">
        {/*Product Images Section*/}
        <div className="max-w-1/3">
          <AdminProductImage />
        </div>
        {/* Product Details Section */}
        <div className="max-w-2/3">
          <AdminAllProductDetails />
        </div>
      </section>
    </main>
  );
}

export default AdminProductDetails;
