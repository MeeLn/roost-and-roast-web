import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MenuHero from "@/components/menu/MenuHero";
import MenuFilters from "@/components/menu/MenuFilters";
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
      <MenuHero />
      <MenuFilters />
      <Footer />
    </main>
  );
}
