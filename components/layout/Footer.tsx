"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Import Variants type
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
    // Calculate timings based on text length
    const textLength = TYPING_TEXT.length;
    const typingDuration = textLength * CHAR_DURATION;
    const eraseDuration = textLength * CHAR_DURATION;
    const cycleTotal = typingDuration + HOLD_DELAY + eraseDuration + 500;

    // Function to run a single cycle of flame visibility
    const runCycle = () => {
      setIsFlameVisible(false);

      setTimeout(() => {
        setIsFlameVisible(true);
      }, typingDuration);

      setTimeout(() => {
        setIsFlameVisible(true);
      }, typingDuration + HOLD_DELAY);

      setTimeout(
        () => {
          setIsFlameVisible(false);
        },
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
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const flameFlickerVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.8, 1, 0.8],
      filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <footer className="bg-zinc-900 text-gray-300 pt-20 pb-10" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-13 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shrink-0">
                <motion.div
                  className="absolute inset-0 w-full h-full z-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    width="100%"
                    height="100%"
                    className="fill-white font-artistic font-semibold tracking-widest uppercase"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="11" fill="#ff4335ff">
                      <textPath xlinkHref="#circlePath">
                        {ROTATING_TEXT}
                      </textPath>
                    </text>
                  </svg>
                </motion.div>

                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-1 border-primary/80 shadow-lg shadow-black/50 z-10 bg-zinc-800">
                  <Image
                    src="/logos/logo-rounded.png"
                    alt="Roost and Roast Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Beside Logo */}
              <div className="flex flex-col items-center justify-center pt-2">
                {/* Rolling Text with Key for Infinite Loop */}
                <RollingText
                  key={rollingKey}
                  text="Charcoal Chicken"
                  className="font-modern text-xl md:text-2xl font-black uppercase text-white tracking-tighter"
                  transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                />

                {/* Centered Typing Row with Synced Flames */}
                <div className="flex items-center justify-center gap-2 mt-1 h-8">
                  {/* Left Flame */}
                  <motion.div
                    variants={flameContainerVariants}
                    initial="hidden"
                    animate={isFlameVisible ? "visible" : "hidden"}
                  >
                    <motion.div
                      variants={flameFlickerVariants}
                      animate="animate"
                    >
                      <Flame size={12} className="text-primary fill-primary" />
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

                  {/* Right Flame */}
                  <motion.div
                    variants={flameContainerVariants}
                    initial="hidden"
                    animate={isFlameVisible ? "visible" : "hidden"}
                  >
                    <motion.div
                      variants={flameFlickerVariants}
                      animate="animate"
                    >
                      <Flame size={12} className="text-primary fill-primary" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
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
