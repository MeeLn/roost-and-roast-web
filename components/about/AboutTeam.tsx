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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6 shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white text-sm italic">{member.bio}</p>
                </div>
              </div>
              <h3 className="text-2xl font-modern font-bold text-secondary uppercase tracking-tight">
                {member.name}
              </h3>
              <p className="text-primary font-medium tracking-wide border-b border-primary/20 pb-2 mb-2 inline-block">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
