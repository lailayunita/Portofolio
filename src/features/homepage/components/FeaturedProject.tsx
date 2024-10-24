"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";

const projects = [
  {
    id: 1,
    title: "FreshNest",
    image: "/freshnest.png",
    desc: "Developed a laundry web application called FreshNest as part of myfinal project for a full-stack development bootcamp.",
    tech: "Next.js - Typescript - Tailwind - Express.js - Prisma ORM - Next Auth - Formik - Tanstack Query",
  },
  {
    id: 2,
    title: "Tixify",
    image: "/tixify.png",
    desc: "Developed a laundry web application called FreshNest as part of myfinal project for a full-stack development bootcamp.",
    tech: "Next.js - Typescript - Tailwind - Express.js - Prisma ORM - Next Auth - Formik - Tanstack Query",
  },
  {
    id: 3,
    title: "Builders",
    image: "/builder.png",
    desc: "Developed a laundry web application called FreshNest as part of myfinal project for a full-stack development bootcamp.",
    tech: "Next.js - Typescript - Tailwind - Express.js - Prisma ORM - Next Auth - Formik - Tanstack Query",
  },
  // {
  //   id: 4,
  //   title: "Project 1",
  //   image: "/freshnest.png",
  //   desc: "Developed a laundry web application called FreshNest as part of myfinal project for a full-stack development bootcamp.",
  //   tech: "Next.js - Typescript - Tailwind - Express.js - Prisma ORM - Next Auth - Formik - Tanstack Query",
  // },
];

const FeaturedProject = () => {
  return (
    <div className="bg-[#fbfbfb] dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <div className="flex justify-between items-center">
          <div className="md:inline-flex gap-2 text-2xl md:text-4xl font-semibold">
            <div>
              Featured{" "}
              <span className="font-normal font-serif text-neutral-500 italic">
                Projects
              </span>
            </div>
          </div>
          {/* <div className="flex gap-2 items-center border-[1px] border-black px-3 py-2 rounded-full">
            <p className="text-sm">View All Projects</p>
            <FaArrowRight />
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div className="space-y-4" key={project.id}>
              <div className="relative flex items-center justify-center">
                <DirectionAwareHover imageUrl={project.image}>
                  <div className="space-y-2 text-sm w-[90%]">
                    <p className="font-bold text-xl">{project.title}</p>
                    <p className="font-normal">{project.desc}</p>
                    <div className="font-semibold">{project.tech}</div>
                  </div>
                </DirectionAwareHover>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold">{project.title}</div>
                <div className="flex gap-2">
                  <Link
                    href="https://jcwd041001.purwadhikabootcamp.com/"
                    target="_blank"
                    className="bg-neutral-200 rounded-full p-2 hover:bg-neutral-300"
                  >
                    <PiLinkSimpleBold />
                  </Link>
                </div>
              </div>
              <p className="font-normal">{project.desc}</p>
              <div className="font-semibold text-sm">{project.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
