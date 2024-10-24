import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="bg-[#fbfbfb] md:h-[90vh] h-auto">
      <div className="max-w-7xl mx-auto px-4 space-y-4 md:space-y-10 py-10 md:py-20">
        <div className="text-xl">Hello! I'm Laila.</div>
        <div className="text-6xl md:text-[112px] font-semibold">
          Bringing <span className="text-neutral-400"> ideas</span> to life with
          <span className="text-neutral-400"> code</span> and
          <span className="text-neutral-400"> creativity.</span>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between md:items-center gap-2 ">
          <div className="text-md md:w-[50%]">
            A passionate fullstack developer dedicated to crafting seamless and
            efficient web solutions. Whether it's front-end elegance or back-end
            robustness, I’m here to turn your vision into reality.
          </div>
          <Button className="flex rounded-full items-center md:justify-start justify-between gap-2">
            <p>Let's Talk</p>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
