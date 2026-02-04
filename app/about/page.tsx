import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutStory from "@/components/about/AboutStory";
import AboutHero from "@/components/about/AboutHero";
import AboutCommitment from "@/components/about/AboutCommitment";
import AboutTeam from "@/components/about/AboutTeam";
import { Metadata } from "next";
import StoryDescription from "@/components/about/StoryDescription";

export const metadata: Metadata = {
  title: "About Us | Roost and Roast",
  description:
    "Learn about our tradition of charcoal roasting and passion for flavor.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <StoryDescription />
      <AboutTeam />
      <AboutCommitment />
      <Footer />
    </main>
  );
}
