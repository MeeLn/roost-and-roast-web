"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Chef Marcus",
    role: "Head Pitmaster",
    image: "/about/team/owner-1.png",
    bio: "With over 15 years of experience in wood-fire cooking, Marcus brings the heat and the flavor to every bird.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    image: "/about/team/owner-2.png",
    bio: "Sarah ensures everything from sourcing to service runs like a well-oiled machine.",
  },
];

const TeamMemberCard = ({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileActive(entry.isIntersecting);
      },
      {
        // Relaxed margin: Active when in the middle 40% of screen (easier to hit)
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative flex flex-col group mx-2 md:mx-0"
    >
      {/* --- 1. FLOATING IMAGE SECTION --- */}
      <div
        className={`absolute top-[-10rem] left-1/2 -translate-x-1/2 w-54 h-54 z-20 transition-transform duration-500 ease-out ${
          isMobileActive
            ? "-translate-y-6"
            : "-translate-y-0 group-hover:-translate-y-6"
        }`}
      >
        {/* Rotating Dashed Ring */}
        <motion.div
          className={`absolute -inset-3 rounded-full border-2 border-dashed border-primary transition-opacity duration-500 ${
            isMobileActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />

        {/* Image Container */}
        <div
          className={`relative w-full h-full rounded-full border border-gray-200/5 shadow-xl overflow-hidden bg-white transition-transform duration-500 ${
            isMobileActive ? "scale-105" : "scale-100 group-hover:scale-105"
          }`}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={`object-cover transition-transform duration-700 ${
              isMobileActive ? "scale-110" : "scale-100 group-hover:scale-110"
            }`}
          />
        </div>
      </div>

      {/* --- 2. CARD BODY --- */}
      <div className="relative bg-white border border-gray-100 rounded-[18px] shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col min-h-[280px]">
        {/* RED BACKGROUND SWEEP (Overlay) */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[62%] bg-primary z-0 transition-transform duration-500 ease-out ${
            isMobileActive
              ? "translate-y-0"
              : "translate-y-[101%] group-hover:translate-y-0"
          }`}
          style={{
            clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center flex-grow pt-20 px-6">
          <h3
            className={`font-modern text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 transition-colors duration-300 ${
              isMobileActive
                ? "text-white"
                : "text-secondary group-hover:text-white"
            }`}
          >
            {member.name}
          </h3>

          <p
            className={`font-artistic text-2xl -rotate-2 transition-colors duration-300 ${
              isMobileActive
                ? "text-white"
                : "text-primary group-hover:text-white"
            }`}
          >
            {member.role}
          </p>

          <div className="mt-4">
            <p
              className={`font-serif italic text-base leading-relaxed transition-colors duration-300 ${
                isMobileActive
                  ? "text-white/90"
                  : "text-text-muted group-hover:text-white/90"
              }`}
            >
              "{member.bio}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileActive(entry.isIntersecting);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col group max-w-5xl mx-auto pt-20"
    >
      {/* --- 1. FLOATING IMAGE SECTION --- */}
      <div
        className={`absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[95%] md:w-[800px] h-80 md:h-[450px] z-20 transition-transform duration-500 ease-out sm:top-[-12rem] ${
          isMobileActive
            ? "-translate-y-6"
            : "-translate-y-0 group-hover:-translate-y-6"
        }`}
      >
        {/* Moving Dashed Border */}
        <div
          className={`absolute -inset-4 rounded-[48px] pointer-events-none transition-opacity duration-500 ${
            isMobileActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <svg className="w-full h-full overflow-visible">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="48"
              fill="none"
              stroke="#E31837"
              strokeWidth="3"
              strokeDasharray="15 10"
              animate={{ strokeDashoffset: [0, -48] }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* Image Container */}
        <div
          className={`relative w-full h-full rounded-[40px] border border-gray-200/5 shadow-2xl overflow-hidden bg-white transition-transform duration-500 ${
            isMobileActive ? "scale-102" : "scale-100 group-hover:scale-102"
          }`}
        >
          <Image
            src="/about/team-picture.png"
            alt="Roost and Roast Team"
            fill
            className={`object-cover transition-transform duration-700 ${
              isMobileActive ? "scale-102" : "scale-100 group-hover:scale-102"
            }`}
          />
        </div>
      </div>

      {/* --- 2. CARD BODY --- */}
      <div className="relative bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col min-h-[360px]">
        {/* RED BACKGROUND SWEEP (Overlay) */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[65%] md:h-[60%] bg-primary z-0 transition-transform duration-500 ease-out ${
            isMobileActive
              ? "translate-y-0"
              : "translate-y-[101%] group-hover:translate-y-0"
          }`}
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center flex-grow pt-32 md:pt-58 pb-10 px-6 md:px-12">
          <h3
            className={`font-modern text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 transition-colors duration-300 ${
              isMobileActive
                ? "text-white"
                : "text-secondary group-hover:text-white"
            }`}
          >
            OUR ENTIRE TEAM
          </h3>

          <p
            className={`font-artistic text-3xl md:text-4xl -rotate-1 transition-colors duration-300 ${
              isMobileActive
                ? "text-white"
                : "text-primary group-hover:text-white"
            }`}
          >
            The Heart of Roost and Roast
          </p>

          <div className="mt-6 max-w-3xl">
            <p
              className={`font-serif italic text-lg leading-relaxed transition-colors duration-300 ${
                isMobileActive
                  ? "text-white/90"
                  : "text-text-muted group-hover:text-white/90"
              }`}
            >
              "Beyond the pits and pins, we are a family dedicated to bringing
              you the best charcoal chicken experience in the Central Coast.
              Every member plays a vital role in our smoky journey."
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutTeam() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter mb-4">
            Meet the{" "}
            <span className="text-primary italic font-artistic normal-case text-6xl">
              Team
            </span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            The passionate individuals behind the smoke and fire.
          </p>
        </div>

        {/* Team Card (Whole Team) */}
        <div className="pt-48">
          <TeamCard />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-x-8 md:gap-x-24 gap-y-56 pt-32">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div> */}
      </div>
    </section>
  );
}
