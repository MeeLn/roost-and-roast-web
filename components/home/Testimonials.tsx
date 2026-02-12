"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Anjali Shrestha",
    role: "Regular Customer",
    image: "/testimonials/anjali.png",
    content:
      "The charcoal chicken here is absolutely unmatched. The smoky flavor coupled with their secret sauce is a game changer. Highly recommend!",
    rating: 5,
  },
  {
    name: "Bikram Gurung",
    role: "Local Guide",
    image: "/testimonials/bikram.png",
    content:
      "Best roast dinner I've had in years. The portions are generous and the meat is tender and juicy. A true gem in the neighborhood.",
    rating: 5,
  },
  {
    name: "Nisha Karki",
    role: "Regular Customer",
    image: "/testimonials/nisha.png",
    content:
      "I order from here at least once a week. Consistently delicious and the staff are always friendly. The family platter is a lifesaver!",
    rating: 5,
  },
];

export default function Testimonials() {
  const marqueeList = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-12">
        <div className="text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-modern font-bold text-text-main mb-6">
            What They Say
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Moving Track */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {marqueeList.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface rounded-3xl p-8 shadow-sm border border-border/50 relative group w-[350px] md:w-[400px] flex-shrink-0"
            >
              <Quote
                className="absolute top-8 right-8 text-primary/10 rotate-180"
                size={64}
              />

              <div className="flex gap-1 text-primary-light mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-text-muted text-lg leading-relaxed mb-8 relative z-10 line-clamp-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-text-main uppercase text-md">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-text-muted tracking-wide">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
