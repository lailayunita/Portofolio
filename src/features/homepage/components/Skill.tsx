import Image from "next/image";
import Marquee from "react-fast-marquee";

const Skill = () => {
  const skills = [
    "/next.png",
    "/chakra.png",
    "/express.png",
    "/tailwind.png",
    "/prisma.png",
    "/typescript.png",
    "/react.png",
  ];
  return (
    <div className="bg-[#f4f4f4] py-6">
      <Marquee>
        {skills.map((skill, index) => {
          return (
            <div
              className="relative overflow-hidden h-14 w-44 mx-5"
              key={index}
            >
              <Image src={skill} alt="skills" fill className="object-contain" />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Skill;
