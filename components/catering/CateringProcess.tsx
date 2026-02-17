"use client";

import { motion, Variants } from "framer-motion";
import { Toaster } from "react-hot-toast";
import CateringForm from "./CateringForm";

export default function CateringProcess() {
  // --- Original Steps Data ---
  const steps = [
    "Inquire online or give us a call with your event details.",
    "Consult with our catering manager for menu selection.",
    "Receive a personalized quote and confirm your booking.",
    "We arrive at your venue and deliver the charcoal magic!",
  ];

  const slideInContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const slideInItem: Variants = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        mass: 1,
      },
    },
  };

  const formAnimation: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div id="catering" className="py-20 md:py-28 bg-background">
      <Toaster />
      <div className="container mx-auto px-4 max-w-[1540px]">
        {/* Grid Layout: Left (Form) - Right (Process) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* --- LEFT COLUMN: Booking Form (Takes 7/12 columns) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={formAnimation}
            className="lg:col-span-7 order-2 lg:order-1"
            id="catering-form"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter">
                Start Your{" "}
                <span className="text-primary font-artistic normal-case text-5xl md:text-6xl inline-block -rotate-2">
                  Order
                </span>
              </h3>
              <p className="text-secondary/60 mt-4 font-medium max-w-xl mx-auto">
                Fill out the details below to request a quote. Our team will
                review your requirements and get back to you within 24 hours.
              </p>
            </div>

            <CateringForm />
          </motion.div>

          {/* --- RIGHT COLUMN: How It Works (Takes 5/12 columns) --- */}
          <div className="lg:col-span-5 order-1 lg:order-2 h-fit lg:self-center border-l border-secondary/20 pl-10 overflow-hidden py-4">
            <motion.div
              variants={slideInContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              <motion.h2
                variants={slideInItem}
                className="text-4xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter mb-10 leading-none"
              >
                How It{" "}
                <span className="font-artistic text-primary normal-case text-5xl md:text-6xl inline-block -rotate-2">
                  Works
                </span>
              </motion.h2>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={slideInItem}
                    className="flex items-start gap-5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-modern font-black text-lg shrink-0 shadow-lg shadow-primary/30 mt-1">
                      {i + 1}
                    </div>
                    <p className="text-base font-modern text-secondary font-medium leading-relaxed">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative note */}
              <motion.div
                variants={slideInItem}
                className="mt-10 p-6 bg-secondary/5 rounded-2xl border border-dashed border-secondary/20"
              >
                <p className="font-modern text-secondary/80 text-sm font-semibold italic">
                  "We handle the fire, you handle the fun. Our team arrives 2
                  hours prior to service to set up."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
