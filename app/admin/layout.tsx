import Sidebar from "@/components/admin/sidebar/SideBar";
import AdminNavbar from "@/components/admin/admin-navbar/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <section className="w-[20%]">
        <Sidebar />
      </section>
      <section className="w-[80%]">
        <AdminNavbar />
        {children}
      </section>
    </main>
  );
}
