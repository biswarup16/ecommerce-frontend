import SideBar from "@/components/admin/sidebar/SideBar"

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
      <SideBar />
      {children}
      </section>
  }