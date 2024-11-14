"use client";
import React, { useState } from "react";
import { orders } from "@/utils/OrderData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DashboardTable() {
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const selectedOrders = orders.slice(startIndex, startIndex + rowsPerPage);

  return (
    <main className="">
      <section className="mb-4">
        <h1 className="text-xl font-semibold text-gray-700">Recent Orders</h1>
      </section>
      <section>
        <Table>
          <TableHeader className="">
            <TableRow className="bg-gray-200 h-[50px] rounded-lg">
              <TableHead className="text-black font-semibold text-center">
                Order ID
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Date
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Product
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Customer Name
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Email ID
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Phone No.
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Address
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Payment Type
              </TableHead>
              <TableHead className="text-black font-semibold text-center">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedOrders.map((order) => (
              <TableRow
                key={order.id}
                className="bg-gray-100 h-[45px] text-gray-950 "
              >
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      {/* Pagination Controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default DashboardTable;
