"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Flame } from "lucide-react";
import { RollingText } from "@/components/animate-ui/primitives/texts/rolling";
import {
  TypingText,
  TypingTextCursor,
} from "@/components/animate-ui/primitives/texts/typing";

export default function Footer() {
  const ROTATING_TEXT = "ROOST AND ROAST • ROOST AND ROAST • ";

  // --- CONFIGURATION ---
  const TYPING_TEXT = "Flamed Kissed Chicken";
  const CHAR_DURATION = 80;
  const HOLD_DELAY = 2000;

  // --- STATE ---
  const [isFlameVisible, setIsFlameVisible] = useState(false);
  const [rollingKey, setRollingKey] = useState(0);

  // --- 1. SYNC FLAMES WITH TYPING ---
  useEffect(() => {
    const textLength = TYPING_TEXT.length;
    const typingDuration = textLength * CHAR_DURATION;
    const eraseDuration = textLength * CHAR_DURATION;
    const cycleTotal = typingDuration + HOLD_DELAY + eraseDuration + 500;

    const runCycle = () => {
      setIsFlameVisible(false);
      setTimeout(() => setIsFlameVisible(true), typingDuration);
      setTimeout(() => setIsFlameVisible(true), typingDuration + HOLD_DELAY);
      setTimeout(
        () => setIsFlameVisible(false),
        typingDuration + HOLD_DELAY + eraseDuration,
      );
    };

    runCycle();
    const interval = setInterval(runCycle, cycleTotal);
    return () => clearInterval(interval);
  }, []);

  // --- 2. INFINITE ROLLING TEXT LOOP ---
  useEffect(() => {
    const rollInterval = setInterval(() => {
      setRollingKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(rollInterval);
  }, []);

  const flameContainerVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const flameFlickerVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
      transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <footer
      className="bg-[#faf9f6] text-stone-600 pt-20 pb-10 border-t border-stone-200"
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-13 gap-12 mb-16">
          {/* --- Brand Column --- */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-6">
              {/* Logo Circle */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shrink-0">
                {/* Rotating Text Ring */}
                <motion.div
                  className="absolute inset-0 w-full h-full z-0 opacity-80"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    width="100%"
                    height="100%"
                    className="fill-red-500 font-artistic font-bold tracking-widest uppercase"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="11">
                      <textPath xlinkHref="#circlePath">
                        {ROTATING_TEXT}
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                {/* Center Image */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-stone-200 shadow-xl shadow-stone-200/50 z-10 bg-white">
                  <Image
                    src="/logos/logo-rounded.svg"
                    alt="Roost and Roast Logo"
                    fill
                    className="object-cover p-1"
                  />
                </div>
              </div>

              {/* Text Beside Logo */}
              <div className="flex flex-col items-center justify-center pt-2">
                <RollingText
                  key={rollingKey}
                  text="Charcoal Chicken"
                  className="font-modern text-xl md:text-2xl font-black uppercase text-gray-500 tracking-tighter"
                  transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                />

                {/* Typing Row */}
                <div className="flex items-center justify-center gap-2 mt-1 -ml-1 h-8">
                  <motion.div
                    variants={flameContainerVariants}
                    initial="hidden"
                    animate={isFlameVisible ? "visible" : "hidden"}
                  >
                    <motion.div
                      variants={flameFlickerVariants}
                      animate="animate"
                    >
                      <Flame size={14} className="text-primary fill-primary" />
                    </motion.div>
                  </motion.div>

                  <TypingText
                    text={TYPING_TEXT}
                    className="font-artistic text-primary text-xl md:text-2xl whitespace-nowrap"
                    duration={CHAR_DURATION}
                    holdDelay={HOLD_DELAY}
                    loop={true}
                  >
                    <TypingTextCursor className="bg-primary h-5 ml-0.5" />
                  </TypingText>

                  <motion.div
                    variants={flameContainerVariants}
                    initial="hidden"
                    animate={isFlameVisible ? "visible" : "hidden"}
                  >
                    <motion.div
                      variants={flameFlickerVariants}
                      animate="animate"
                    >
                      <Flame size={14} className="text-primary fill-primary" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            <p className="leading-relaxed text-stone-500 max-w-sm font-modern">
              Experience the authentic taste of charcoal-roasted perfection.
              Fresh ingredients, traditional recipes, and a passion for flavor
              in every bite.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/people/Roost-and-Roast/61586264004334/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/roost_roast/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="flex items-center gap-1 mb-6 uppercase tracking-wider select-none">
              <span className="font-modern text-xl text-stone-900 font-semibold">
                EXPLO
              </span>
              <span className="font-artistic text-primary normal-case text-4xl -translate-x-1 -translate-y-1 inline-block -rotate-3">
                re
              </span>
            </h3>
            <div className="flex flex-col gap-3 font-medium">
              {["Home", "Menu", "Our Catering", "About Us", "Contact Us"].map(
                (item, idx) => {
                  const href =
                    item === "Home"
                      ? "/"
                      : item === "Our Catering"
                        ? "/catering"
                        : `/${item.toLowerCase().replace(" ", "").replace("us", "").trim()}`;
                  return (
                    <Link
                      key={idx}
                      href={href}
                      className="text-stone-500 hover:text-primary hover:translate-x-1 transition-all duration-200"
                    >
                      {item}
                    </Link>
                  );
                },
              )}
            </div>
          </div>

          {/* --- Contact Info --- */}
          <div className="md:col-span-3">
            <h3 className="flex items-center gap-1 mb-6 uppercase tracking-wider select-none">
              <span className="font-modern text-xl text-stone-900 font-semibold">
                CONT
              </span>
              <span className="font-artistic text-primary normal-case text-4xl -translate-x-1 -translate-y-1 inline-block -rotate-3">
                act
              </span>
            </h3>
            <div className="flex flex-col gap-5">
              <div className="w-fit group cursor-pointer">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=West+Gosford+Shopping+Village"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-start gap-4 text-stone-600 group-hover:text-primary transition-colors">
                    <MapPin size={20} className="shrink-0 mt-1" />
                    <span className="font-modern leading-snug">
                      West Gosford Shopping village,
                      <br /> 23/299 Brisbane Water Drive
                      <br /> West Gosford NSW, 2250
                    </span>
                  </div>
                  {/* Location Preview Card */}
                  <div className="relative w-full h-24 mt-4 ml-1 rounded-xl overflow-hidden shadow-md border-2 border-white group-hover:shadow-lg transition-all duration-300">
                    <Image
                      src="/img/location.png"
                      alt="Location View"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                  </div>
                </a>
              </div>

              <a href="tel:+610243427887" className="group">
                <div className="flex items-center gap-4 text-stone-600 group-hover:text-primary transition-colors">
                  <Phone size={20} className="shrink-0" />
                  <span className="font-medium">+61 02 43427887</span>
                </div>
              </a>

              <a href="mailto:info@roostnroast.com.au" className="group">
                <div className="flex items-center gap-4 text-stone-600 group-hover:text-primary transition-colors">
                  <Mail size={20} className="shrink-0" />
                  <span className="font-medium">info@roostnroast.com.au</span>
                </div>
              </a>
            </div>
          </div>

          {/* --- Opening Hours --- */}
          <div className="md:col-span-3">
            <h3 className="flex items-center gap-1 mb-6 uppercase tracking-wider select-none">
              <span className="font-modern text-xl text-stone-900 font-semibold">
                OPEN
              </span>
              <span className="font-artistic text-primary normal-case text-4xl -translate-x-1 -translate-y-1 inline-block -rotate-3">
                ing
              </span>
              <span className="font-modern text-xl text-stone-900 -translate-x-1 font-semibold ml-1">
                HOURS
              </span>
            </h3>
            <div className="flex flex-col gap-3 text-stone-600 font-medium">
              <div className="flex justify-between border-b border-stone-200 border-dashed pb-3">
                <span>Mon - Sun</span>
                <span className="text-stone-900">9am – 8pm</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Trading Seven days</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="text-xs text-stone-400 italic mt-1">
                *Holiday hours may differ
              </div>
            </div>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="pt-8 border-t border-stone-200 text-sm text-stone-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left order-2 md:order-1 font-modern">
              © {new Date().getFullYear()} Roost and Roast. All rights reserved.
            </p>

            <div className="flex items-center gap-6 order-1 md:order-2">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-services"
                className="hover:text-primary transition-colors duration-200 font-medium"
              >
                Terms of Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
