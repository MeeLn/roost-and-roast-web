import Link from "next/link";
import Logo from "./ui/Logo";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white/60 pt-16 pb-8 border-t border-white/5"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Logo variant="full" width={140} />
            <p className="leading-relaxed">
              Serving the best charcoal chicken and roasts in town. Fresh
              ingredients, authentic recipes, and a passion for flavor.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-white font-semibold">
              Explore
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="#menu"
                className="hover:text-primary transition-colors"
              >
                Our Favorites
              </Link>
              <Link
                href="#story"
                className="hover:text-primary transition-colors"
              >
                Our Story
              </Link>
              <Link
                href="#order"
                className="hover:text-primary transition-colors"
              >
                Order Online
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-white font-semibold">
              Visit Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-primary shrink-0" />
                <span>123 Roast Street, Foodville, NSW 2000</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-primary shrink-0" />
                <span>(02) 9999 9999</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-primary shrink-0" />
                <span>hello@roostandroast.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5 text-sm">
          <p>
            © {new Date().getFullYear()} Roost and Roast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
