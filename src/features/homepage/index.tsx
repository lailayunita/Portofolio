import About from "./components/About";
import HeroSection from "./components/HeroSection";
import { Projects } from "./components/Projects";
import Skill from "./components/Skill";

const Homepage = () => {
  return (
    <main className="relative bg-[#010319] text-white flex justify-center items-center flex-col overflow-hidden">
      <HeroSection />
      <Projects />
      <Skill />
      <About />
    </main>
  );
};

export default Homepage;
