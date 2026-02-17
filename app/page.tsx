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
import CateringForm from "@/components/catering/CateringForm";

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
      <div className="flex flex-col items-center justify-center container max-w-7xl mx-auto py-20">
        <div className="w-2/3">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter">
              Catering{" "}
              <span className="text-primary font-artistic normal-case text-5xl md:text-6xl inline-block -rotate-2">
                Order
              </span>
            </h3>
          </div>
          <CateringForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
