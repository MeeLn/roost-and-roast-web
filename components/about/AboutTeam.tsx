"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Chef Marcus",
    role: "Head Pitmaster",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop",
    bio: "With over 15 years of experience in wood-fire cooking, Marcus brings the heat and the flavor to every bird.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
    bio: "Sarah ensures everything from sourcing to service runs like a well-oiled machine.",
  },
  {
    name: "Leo Rossi",
    role: "Executive Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop",
    bio: "The master behind our legendary desserts and gourmet side dishes.",
  },
];

export default function AboutTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-60 md:gap-y-72 pt-40 md:pt-60">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="relative flex flex-col bg-background rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all group mx-2 md:mx-0 bg-white"
            >
              <div className="absolute -top-40 md:-top-60 left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 z-10 translate-y-6 group-hover:translate-y-0 text-center transition-transform duration-500 ease-out">
                <motion.div
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                />
                <div className="relative w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-white transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="pt-24 pb-8 px-6 flex flex-col items-center flex-grow text-center gap-4 mt-8 md:mt-0">
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-modern text-2xl font-black text-secondary uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <p className="font-artistic text-xl text-primary -rotate-2">
                    {member.role}
                  </p>
                  <p className="font-serif italic text-base text-text-muted leading-relaxed line-clamp-3 mt-2">
                    "{member.bio}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
