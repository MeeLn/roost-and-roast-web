"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    content:
      "The charcoal chicken here is absolutely unmatched. The smoky flavor coupled with their secret sauce is a game changer. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Local Guide",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    content:
      "Best roast dinner I've had in years. The portions are generous and the meat is tender and juicy. A true gem in the neighborhood.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Regular Customer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    content:
      "I order from here at least once a week. Consistently delicious and the staff are always friendly. The family platter is a lifesaver!",
    rating: 5,
  },
  {
    name: "David Kornfield",
    role: "Chef",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    content:
      "As a chef, I appreciate the attention to detail. The skin is perfectly crispy and the marinade is deep and complex. 10/10.",
    rating: 5,
  },
  {
    name: "Lisa Wong",
    role: "Foodie",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    content:
      "Honestly the best chips and gravy I've ever had. And the roast pork crackling? To die for. You have to try it.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Gym Owner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    content:
      "Perfect post-workout meal. High quality protein, fresh salads, and none of that greasy feeling you get elsewhere.",
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

              <div className="flex gap-1 text-primary mb-6">
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
                  <h4 className="font-bold text-text-main text-sm">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-text-muted uppercase tracking-wide">
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
