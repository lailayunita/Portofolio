import { BentoGrid } from "@/components/ui/bento-grid";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section
      id="projects"
      className="space-y-10 max-w-6xl mx-auto px-5 pb-10 pt-10 md:pt-40 md:pb-20"
    >
      <h2 className="md:text-4xl text-3xl font-medium">
        My <span className="text-purple-300">Recent Projects</span>{" "}
      </h2>
      <BentoGrid className="max-w-7xl mx-auto">
        {items.map(({ src, title, description, icons, href }, i) => (
          <div
            key={i}
            className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  shadow-[0_8px_16px_rgb(255_255_255/0.4) border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 justify-between flex flex-col space-y-4"
          >
            <div className="overflow-hidden rounded-xl relative">
              <Image
                src={src}
                alt="project"
                width={1000}
                height={0}
                objectFit="cover"
              />
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-2">
              <div className="font-sans  font-bold  ">{title}</div>
              <div className="font-sans text-sm font-normal">{description}</div>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {icons.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white-100/[0.2] rounded-full bg-slate-900 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width="full"
                        height="full"
                      />
                    </div>
                  ))}
                </div>
                {href && (
                  <Link
                    href={href}
                    target="_blank"
                    className="text-purple-300 flex gap-1 text-sm items-center"
                  >
                    <span className="">Live site</span>
                    <MoveUpRight size="18px" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "FreshNest - Laundry Web App",
    description:
      "This project was developed as part of the final project for the Full Stack Development Bootcamp, designed to help users manage their laundry conveniently by enabling pick-up and delivery services without the need to visit the outlet.",
    src: "/freshnest.webp",
    icons: [
      "/next2.svg",
      "/tail.svg",
      "/ts.svg",
      "/express2.svg",
      "/prisma2.svg",
    ],
    href: "https://freshnest.my.id",
  },
  {
    title: "Tixify - Event Management Platform",
    description:
      "This project was developed as part of the mini project for the Full Stack Development Bootcamp, designed to help event organizers create and promote events while enabling attendees to browse and register for those events.",
    src: "/tixify.webp",
    icons: [
      "/next2.svg",
      "/tail.svg",
      "/ts.svg",
      "/express2.svg",
      "/prisma2.svg",
    ],
  },
  {
    title: "Builders - Company Profile",
    description:
      "This project was developed as part of a code challenge for the Full Stack Development Bootcamp, where I created a company profile for a construction company. Inspired by designs on Behance, I aimed to showcase my ability to build visually appealing and interactive web pages.",
    src: "/builder.webp",
    icons: ["/next2.svg", "/chakra2.svg", "/ts.svg", "/contentful.svg"],
    href: "https://company-profile-blond-two.vercel.app",
  },
];
