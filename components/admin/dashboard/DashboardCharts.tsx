"use client";
import React, { useState } from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

function DashboardCharts() {
  const [filter, setFilter] = useState("All");

  const chartConfig = {
    orders: {
      label: "Orders",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  const dataSets: any = {
    All: [
      { month: "January", orders: 186 },
      { month: "February", orders: 305 },
      { month: "March", orders: 237 },
      { month: "April", orders: 73 },
      { month: "May", orders: 209 },
      { month: "June", orders: 214 },
      { month: "July", orders: 180 },
      { month: "August", orders: 210 },
      { month: "September", orders: 220 },
      { month: "October", orders: 190 },
      { month: "November", orders: 230 },
      { month: "December", orders: 200 },
    ],
    "1M": [
      { month: "Week 1", orders: 45 },
      { month: "Week 2", orders: 55 },
      { month: "Week 3", orders: 65 },
      { month: "Week 4", orders: 75 },
    ],
    "6M": [
      { month: "January", orders: 100 },
      { month: "February", orders: 120 },
      { month: "March", orders: 110 },
      { month: "April", orders: 130 },
      { month: "May", orders: 140 },
      { month: "June", orders: 150 },
    ],
    "1Y": [
      { month: "January", orders: 80 },
      { month: "February", orders: 85 },
      { month: "March", orders: 90 },
      { month: "April", orders: 95 },
      { month: "May", orders: 100 },
      { month: "June", orders: 110 },
      { month: "July", orders: 120 },
      { month: "August", orders: 130 },
      { month: "September", orders: 140 },
      { month: "October", orders: 145 },
      { month: "November", orders: 150 },
      { month: "December", orders: 160 },
    ],
  };

  const chartData = dataSets[filter];

  return (
    <div className="w-full">
      <div className="flex items-start justify-between w-full">
        <div className="ml-10">
          <h1 className="text-xl text-gray-900 font-semibold"> Performance</h1>
        </div>
        <div className="flex justify-end space-x-2 mb-4">
          {["All", "1M", "6M", "1Y"].map((timeFrame) => (
            <button
              key={timeFrame}
              onClick={() => setFilter(timeFrame)}
              className="h-10 w-10 bg-white border rounded-md hover:bg-gray-300"
            >
              {timeFrame}
            </button>
          ))}
        </div>
      </div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" label={{ position: "insideBottom", dy: 10 }} />
          <YAxis
            label={{
              value: "Orders",
              angle: -90,
              position: "insideLeft",
              dy: -5,
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="orders" fill="#faa85e" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

export default DashboardCharts;
