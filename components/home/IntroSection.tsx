"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";

const foodIcons = [
  { name: "Burger", emoji: "🍔" },
  { name: "Chicken", emoji: "🍗" },
  { name: "Fries", emoji: "🍟" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Hotdog", emoji: "🌭" },
  { name: "Salad", emoji: "🥗" },
  { name: "Taco", emoji: "🌮" },
  { name: "Sandwich", emoji: "🥪" },
];

export default function IntroSection() {
  // Duplicate icons for infinite scroll
  const scrollerIcons = [
    ...foodIcons,
    ...foodIcons,
    ...foodIcons,
    ...foodIcons,
  ];

  return (
    <section className="pt-20 pb-10 bg-[#FDF8F3] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl lg:text-[5rem] font-modern font-black text-secondary uppercase tracking-tighter leading-none mb-4">
          WELCOME TO <br />
          <span className="font-artistic text-primary font-bold normal-case text-6xl md:text-8xl lg:text-[9rem] inline-block rotate-[-1deg] my-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
            Roost & Roast
          </span>
        </h2>

        <h3 className="text-xl md:text-2xl lg:text-3xl font-modern font-bold text-secondary uppercase tracking-[0.2em] mb-12">
          YOUR CULINARY{" "}
          <span className="font-artistic text-primary normal-case text-4xl md:text-6xl inline-block -rotate-1">
            Escape
          </span>{" "}
          INTO THE HEART OF{" "}
          <span className="font-artistic text-primary normal-case text-4xl md:text-6xl inline-block rotate-1">
            Charcoal
          </span>{" "}
          CUISINE!
        </h3>

        <p className="text-text-muted max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-modern font-medium italic">
          "Dive into a{" "}
          <span className="font-artistic text-primary-light text-2xl md:text-3xl normal-case not-italic">
            World
          </span>{" "}
          where tradition meets modern flair, and every meal is a{" "}
          <span className="font-artistic text-primary-light text-2xl md:text-3xl normal-case not-italic">
            celebration
          </span>{" "}
          of flavour. At Roost & Roast, we&apos;re not just serving food;
          we&apos;re crafting{" "}
          <span className="font-artistic text-primary-light text-2xl md:text-3xl normal-case not-italic">
            Experiences
          </span>
          ."
        </p>
      </div>

      {/* Infinite Food Scroller */}
      <div className="relative py-12 border-y border-dashed border-primary/20 overflow-hidden">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {[...scrollerIcons, ...scrollerIcons].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 text-6xl opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={item.name}
            >
              <span className="filter drop-shadow-sm">{item.emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Strip from Image */}
      <Link
        href="https://www.instagram.com/roost_roast/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 py-3 px-8 rounded-full border border-primary/20 hover:border-primary/50 transition-colors group">
            <Instagram className="text-secondary w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="text-lg md:text-xl font-bold text-secondary uppercase tracking-widest font-modern">
              FOLLOW US @ROOSTANDROAST
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
