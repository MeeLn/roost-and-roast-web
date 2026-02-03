import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Testimonials from "@/components/home/Testimonials";
import AboutStory from "@/components/about/AboutStory";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IntroSection />
      <FeaturedMenu />
      <AboutStory />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
