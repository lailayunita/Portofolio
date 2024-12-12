import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skill = () => {
  const skills = [
    "/next.svg",
    "/chakra.svg",
    "/express.svg",
    "/tailwind.svg",
    "/prisma.svg",
    "/typescript.svg",
    "/react.svg",
    "/sequelize.svg",
    "/material.svg",
  ];
  return (
    <section className="my-20 py-6 bg-purple-700/[0.3] w-full">
      <Marquee speed={50}>
        {skills.map((skill, index) => {
          return (
            <div className="relative overflow-hidden h-14 w-44" key={index}>
              <Image src={skill} alt="skills" fill className="object-contain" />
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};

export default Skill;
