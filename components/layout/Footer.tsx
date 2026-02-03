import Link from "next/link";
import Logo from "../ui/Logo";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-20 pb-10" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-13 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="brightness-0 invert opacity-90">
              <Logo variant="full" width={160} />
            </div>
            <p className="leading-relaxed text-gray-400 max-w-sm">
              Experience the authentic taste of charcoal-roasted perfection.
              Fresh ingredients, traditional recipes, and a passion for flavor
              in every bite.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/people/Roost-and-Roast/61586264004334/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/roost_roast/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="flex items-center gap-1 mb-6 uppercase tracking-wider">
              <span className="font-modern text-xl text-white font-semibold">
                EXPLO
              </span>
              <span className="font-artistic text-primary normal-case text-4xl -translate-x-1 -translate-y-1 inline-block -rotate-3">
                re
              </span>
            </h3>
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/menu"
                className="hover:text-primary transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/catering"
                className="hover:text-primary transition-colors"
              >
                Our Catering
              </Link>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="flex items-center gap-1 mb-6 uppercase tracking-wider">
              <span className="font-modern text-xl text-white font-semibold">
                CONT
              </span>
              <span className="font-artistic text-primary normal-case text-4xl -translate-x-1 -translate-y-1 inline-block -rotate-3">
                act
              </span>
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span>
                  123 Roast Street, Foodville
                  <br />
                  NSW 2000, Australia
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <span>(02) 9999 9999</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-primary shrink-0" />
                <span>hello@roostandroast.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="md:col-span-3">
            <h3 className="flex items-center gap-1 mb-6 uppercase tracking-wider">
              <span className="font-modern text-xl text-white font-semibold">
                OPEN
              </span>
              <span className="font-artistic text-primary normal-case text-4xl -translate-x-1 -translate-y-1 inline-block -rotate-3">
                ing
              </span>
              <span className="font-modern text-xl text-white -translate-x-1 font-semibold ml-1">
                HOURS
              </span>
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">
                  11:00 AM - 9:00 PM
                </span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-white font-medium">
                  10:00 AM - 10:00 PM
                </span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-white font-medium">
                  10:00 AM - 9:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Roost and Roast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
