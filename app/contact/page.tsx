import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ContactLocation from "@/components/contact/ContactLocation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Order | Roost and Roast",
  description: "Visit us in Foodville or order online for pickup and delivery.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <ContactHero />
      <ContactLocation />
      <ContactSection />
      <Footer />
    </main>
  );
}
