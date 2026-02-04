import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrivacyContent from "@/components/legal/PrivacyContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Roost and Roast",
  description:
    "Learn how Roost and Roast collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-36">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
