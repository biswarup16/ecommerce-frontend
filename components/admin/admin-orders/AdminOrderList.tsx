import React from "react";
import AdminOrderCard from "./AdminOrderCard";
import { EyeIcon } from "lucide-react";
function AdminOrderList() {
  const orders = [
    {
      id: "#583488/80",
      date: "Apr 23, 2024",
      customer: "Gail C. Anderson",
      priority: "Normal",
      total: "$1,230.00",
      paymentStatus: "Unpaid",
      items: 4,
      deliveryNumber: "-",
      orderStatus: "Draft",
    },
    {
      id: "#583488/81",
      date: "Apr 23, 2024",
      customer: "Gail C. Anderson",
      priority: "Normal",
      total: "$1,230.00",
      paymentStatus: "Unpaid",
      items: 4,
      deliveryNumber: "-",
      orderStatus: "Draft",
    },
    {
      id: "#583488/90",
      date: "Apr 23, 2024",
      customer: "Gail C. Anderson",
      priority: "Normal",
      total: "$1,230.00",
      paymentStatus: "Unpaid",
      items: 4,
      deliveryNumber: "-",
      orderStatus: "Draft",
    },
    {
      id: "#583488/91",
      date: "Apr 23, 2024",
      customer: "Gail C. Anderson",
      priority: "Normal",
      total: "$1,230.00",
      paymentStatus: "Unpaid",
      items: 4,
      deliveryNumber: "-",
      orderStatus: "Draft",
    },
  ];

  return (
    <main className="container w-full h-[86vh]">
      <section className="flex flex-col gap-5 p-4 max-h-full overflow-y-scroll scrollbar-hide ">
        {/* Card Section */}
        <section className="">
          <AdminOrderCard />
        </section>

        {/* Table Section */}

        <section className="">
          <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">All Order List</h2>
            <table className="w-full bg-white rounded-lg shadow-md overflow-x-hidden border border-gray-200">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Order ID
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Created at
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Customer
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Priority
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Total
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Payment Status
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Items
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Delivery Number
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Order Status
                  </th>
                  <th className="text-left p-4 font-semibold text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition duration-300 "
                  >
                    <td className="p-4 text-gray-800">{order.id}</td>
                    <td className="p-4 text-gray-800">{order.date}</td>
                    <td className="p-4 text-gray-800">{order.customer}</td>
                    <td className="p-4 text-gray-800">{order.priority}</td>
                    <td className="p-4 text-gray-800">{order.total}</td>
                    <td className="p-4 text-gray-800">{order.paymentStatus}</td>
                    <td className="p-4 text-gray-800">{order.items}</td>
                    <td className="p-4 text-gray-800">
                      {order.deliveryNumber}
                    </td>
                    <td className="p-4 text-gray-800">{order.orderStatus}</td>
                    <td className="p-4 cursor-pointer ">
                      <EyeIcon className="text-blue-900" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

export default AdminOrderList;
