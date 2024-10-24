import About from "./components/About";
import FeaturedProject from "./components/FeaturedProject";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProject />
      <Skill />
      <About />
    </>
  );
};

export default Homepage;
