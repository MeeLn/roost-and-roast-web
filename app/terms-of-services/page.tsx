import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TermsContent from "@/components/legal/TermsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Roost and Roast",
  description:
    "The terms and conditions for ordering and using Roost and Roast services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <TermsContent />
      <Footer />
    </main>
  );
}
