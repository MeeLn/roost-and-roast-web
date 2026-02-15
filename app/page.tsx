import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Testimonials from "@/components/home/Testimonials";
import AboutStory from "@/components/about/AboutStory";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import GridMenuSection from "@/components/home/GridMenuSection";
import MarqueeSection from "@/components/home/MarqueeSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroSection />
      <FeaturedMenu />
      <GridMenuSection />
      <MarqueeSection />
      <AboutStory />
      {/* <Testimonials /> */}
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
