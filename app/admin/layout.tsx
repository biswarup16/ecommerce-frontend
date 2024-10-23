export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
      Sidebar
      {children}
      </section>
  }