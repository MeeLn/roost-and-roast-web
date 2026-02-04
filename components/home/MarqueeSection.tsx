"use client";

import { Flame } from "lucide-react";

const TEXT_CONTENT =
  "CHARCOAL CHICKEN • ROOST AND ROAST • FLAME KISSED CHICKEN • THE HEART OF THE HEAT • ";

export default function MarqueeSection() {
  const repeatedText = new Array(4).fill(TEXT_CONTENT);

  return (
    <section className="bg-primary border-y-4 border-black/10 overflow-hidden py-4 relative z-10 rotate-1 my-8 shadow-xl">
      <div
        className="flex whitespace-nowrap w-fit animate-[scroll_20s_linear_infinite]"
        style={{
          animationName: "scroll-left",
        }}
      >
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        {/* Render the text block twice (conceptually) to create the loop */}
        <div className="flex items-center gap-4 px-2">
          {repeatedText.map((text, i) => (
            <span key={`1-${i}`} className="flex items-center gap-4">
              <span className="text-3xl md:text-5xl font-modern font-black text-white tracking-tighter italic uppercase">
                {text.split("•")[0]}
              </span>
              <Flame
                className="text-yellow-400 fill-yellow-400 animate-pulse"
                size={32}
              />

              <span className="text-3xl md:text-5xl font-modern font-black text-zinc-900 tracking-tighter italic uppercase">
                {text.split("•")[1]}
              </span>
              <Flame
                className="text-yellow-400 fill-yellow-400 animate-pulse"
                size={32}
              />
              <span className="text-3xl md:text-5xl font-modern font-black text-white tracking-tighter italic uppercase">
                {text.split("•")[2]}
              </span>
              {/* Divider Icon */}
              <div className="w-4 h-4 rounded-full bg-white/20 mx-4" />

              <span className="text-3xl md:text-5xl font-modern font-black text-zinc-900 tracking-tighter italic uppercase">
                {text.split("•")[3]}
              </span>
              {/* Divider Icon */}
              <div className="w-4 h-4 rounded-full bg-white/20 mx-4" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
