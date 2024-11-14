import DashboardCards from "./DashboardCards";
import DashboardCharts from "./DashboardCharts";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
  return (
    <main className="h-[86vh]  overflow-y-scroll scrollbar-hide px-4">
      <section className="container mx-auto p-4 grid gap-4 grid-rows-4 grid-cols-2  ">
        {/* Card Section Top-Left */}
        <section className="row-span-2 col-span-1 flex items-center ">
          <div className="">
            <DashboardCards />
          </div>
        </section>

        {/* Bar Graph Top-Right */}
        <section className="pt-3 row-span-2 col-span-1">
          <DashboardCharts />
        </section>

        {/* Recent Orders Table */}
        <section className=" row-span-2 p-4 col-span-2">
          <DashboardTable />
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
