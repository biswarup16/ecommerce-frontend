import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
      <Navbar />
      <main className="my-10">
      {children}
      </main>
      <Footer />
      </section>
  }

