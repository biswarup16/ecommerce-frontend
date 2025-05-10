import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { StateProvider } from "@/components/context-provider/ContextProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <StateProvider>
        <Navbar />
        <main className="my-10">{children}</main>
        <Footer />
      </StateProvider>
    </section>
  );
}
