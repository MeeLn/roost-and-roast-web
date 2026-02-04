"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      className="py-32 bg-surface-hover relative overflow-hidden"
      id="story"
    >
      {/* Tessellation pattern overlay */}
      <div
        className="absolute top-0 right-0 w-full h-full z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-text-muted) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-modern font-black text-primary mb-8 uppercase tracking-tighter">
            The Charcoal <br />
            <span className="font-artistic normal-case text-5xl md:text-8xl inline-block rotate-[-2deg] mt-2">
              Difference
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-text-main/90 mb-6">
            At Roost and Roast, we believe that great food starts with fire. Our
            signature charcoal chicken is marinated for 24 hours in our secret
            blend of spices, then slowly roasted over natural charcoal coals.
          </p>
          <p className="text-lg leading-relaxed text-text-main/90">
            This traditional method seals in the juices and infuses the meat
            with a smoky flavor that gas ovens simply cannot replicate.
            Accompanied by our fresh salads and gourmet sides, every meal is a
            celebration of honest, robust flavors.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-black/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full relative">
            <Image
              src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2072&auto=format&fit=crop"
              alt="Our Kitchen"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Image
                src="/logos/logo-rounded.png"
                width={150}
                height={150}
                alt="Badge"
                className="opacity-90 drop-shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
