import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CateringHero from "@/components/catering/CateringHero";
import CateringFeatures from "@/components/catering/CateringFeatures";
import CateringProcess from "@/components/catering/CateringProcess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Catering | Roost and Roast",
  description:
    "Professional charcoal catering services for events of all sizes.",
};

export default function CateringPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#FDF8F3]">
      <Navbar />
      <CateringHero />
      <CateringFeatures />
      <CateringProcess />
      <Footer />
    </main>
  );
}
