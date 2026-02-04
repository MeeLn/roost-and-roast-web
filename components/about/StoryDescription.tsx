"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, Award, Star } from "lucide-react";

export default function StoryDescription() {
  return (
    <section className="py-16 md:py-24 bg-[#faf9f6] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* IMAGE SIDE - Maintaining your signature curve */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[300px] rounded-tl-[300px] overflow-hidden border-2 border-gray-200/85 shadow-2xl">
              <Image
                src="/about/Phat-chicken-happen-team.png"
                alt="Roost and Roast Team"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-0 -right-16 w-32 h-32 bg-primary rounded-full flex items-center justify-center p-2 hidden md:flex"
            >
              <div className="text-white text-center font-modern font-black text-[10px] leading-tight uppercase tracking-tighter">
                <Star size={16} className="mx-auto mb-1 fill-white" />
                Local's Favorite <br /> Since Day One
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT SIDE */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <UtensilsCrossed size={20} className="text-primary-light" />
                <span className="font-modern font-bold text-primary-light uppercase tracking-[0.2em] text-sm">
                  Our Legacy
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-modern font-black text-zinc-900 leading-[0.9] uppercase mb-6">
                The Best Gourmet <br />
                <span className="text-primary font-artistic normal-case text-5xl md:text-7xl block mt-2 -rotate-1">
                  Roost & Roast
                </span>
              </h2>

              <div className="space-y-4 text-zinc-600 font-medium leading-relaxed max-w-xl">
                <p>
                  Roost & Roast is more than just a takeaway; it&apos;s a
                  celebration of flavor. Specializing in succulent free-range
                  BBQ chickens, roast pork, and lamb, we&apos;ve built our name
                  on one simple promise:{" "}
                  <span className="text-zinc-900 font-bold italic">
                    freshness without compromise.
                  </span>
                </p>
                <p>
                  From our gourmet salads to our homemade curries and
                  casseroles, every dish is prepared daily by our passionate
                  team. Whether you&apos;re feeding the family or hosting a
                  corporate conference, we bring the same level of care to every
                  plate.
                </p>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Award className="text-primary-light" />
                </div>
                <div>
                  <h4 className="font-modern font-bold text-zinc-900 uppercase text-sm">
                    Super Quality Food
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Served with pride by our friendly, efficient team.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Star className="text-primary-light fill-primary-light" />
                </div>
                <div>
                  <h4 className="font-modern font-bold text-zinc-900 uppercase text-sm">
                    Qualified Chefs
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Mastering the art of fresh, traditional roasting.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Signature */}
            <div className="mt-4">
              <p className="font-artistic text-primary-light text-2xl opacity-80">
                &ldquo;Fresh, Quality, & Local&apos;s Favorite.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
