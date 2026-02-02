import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Story from "@/components/Story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Roost and Roast",
  description:
    "Learn about our tradition of charcoal roasting and passion for flavor.",
};

export default function StoryPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />

      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
          Our Journey
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          From humble beginnings to your favorite local roast house.
        </p>
      </div>

      <Story />

      <div className="bg-surface py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h3 className="text-3xl font-serif font-bold mb-6">
            A Commitment to Quality
          </h3>
          <p className="text-lg text-text-muted leading-relaxed">
            We source only the finest free-range chickens and freshest local
            produce. Our chefs arrive early every morning to prepare our
            signature marinades and start the fires that will roast your lunch
            and dinner to perfection. It's not the easiest way to cook, but it
            is the right way.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
