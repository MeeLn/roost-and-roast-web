"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Our Catering", path: "/catering" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-[1600px] z-50 transition-all duration-300 rounded-4xl border border-white/20 shadow-lg backdrop-blur-md ${
        isScrolled ? "py-1 bg-white/90" : "py-1.5 bg-white/80"
      }`}
    >
      <div className="px-6 md:px-8">
        <nav className="flex items-center justify-between">
          <div className="transition-all duration-300">
            <Logo variant="full" width={60} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative font-bold text-sm uppercase tracking-wider transition-all hover:text-primary focus:text-primary focus:outline-none group ${
                    isActive ? "text-primary" : "text-text-main"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="#order"
              className="bg-primary text-white px-6 py-2.5 font-semibold rounded-[18px] uppercase tracking-wider transition-all hover:bg-primary-light hover:-translate-y-0.5 shadow-md"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="block md:hidden z-[60] relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-primary" />
            ) : (
              <Menu size={28} className="text-text-main transition-colors" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute top-full left-0 mt-2 w-full bg-white/95 backdrop-blur-md rounded-3xl shadow-xl flex flex-col justify-center items-center gap-6 py-8 border border-white/20 origin-top"
          >
            {navItems.map((item, i) => {
              const isActive = pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.path}
                    className={`text-xl font-bold font-serif hover:text-primary focus:text-primary focus:outline-none transition-colors ${
                      isActive ? "text-primary" : "text-text-main"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="#order"
                className="bg-primary text-white px-8 py-3 font-semibold rounded-full uppercase tracking-wider shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
