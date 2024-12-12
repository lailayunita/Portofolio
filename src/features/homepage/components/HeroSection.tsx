"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { Fraunces } from "next/font/google";
import { handleScroll } from "@/lib/scroll";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const HeroSection = () => {
  return (
    <div className="h-auto max-w-6xl mx-auto px-5">
      <div className="space-y-6 md:space-y-8 py-10 md:pt-20">
        <div className={`text-xl ${fraunces.className}`}>Hello! I'm Laila.</div>
        <TextGenerateEffect
          words="Bringing ideas to life with code & creativity."
          className="text-[50px] md:text-[100px] font-semibold"
          duration={2}
          filter={false}
        />
        <div className="flex flex-col md:flex-row-reverse justify-between md:items-center gap-6 ">
          <div className="text-sm md:text-md md:w-[50%]">
            A passionate fullstack developer dedicated to crafting seamless and
            efficient web solutions. Whether it's front-end elegance or back-end
            robustness, I’m here to turn your vision into reality.
          </div>
          <div>
            <button
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
              onClick={() => {
                handleScroll("projects");
              }}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900/[0.5] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-8">
                <p>See My Work</p>
                <div className="rounded-full bg-purple-300/[0.3] p-2">
                  <FaArrowDown />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
