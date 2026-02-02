import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuFilters from "@/components/ui/MenuFilters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Roost and Roast",
  description:
    "Explore our full menu of charcoal chicken, roasts, and gourmet sides.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <Navbar />

      {/* Page Header */}
      <div className="container mx-auto px-4 mb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
          Our Menu
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          From our signature charcoal chicken to fresh salads and homemade
          sauces, explore authentic flavors made with passion.
        </p>
      </div>

      <MenuFilters />

      <Footer />
    </main>
  );
}
