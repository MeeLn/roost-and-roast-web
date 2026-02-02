import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Order | Roost and Roast",
  description: "Visit us in Foodville or order online for pickup and delivery.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />

      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
          Visit Us
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Order online, book a table, or drop by for a takeaway.
        </p>
      </div>

      <Contact />

      <Footer />
    </main>
  );
}
