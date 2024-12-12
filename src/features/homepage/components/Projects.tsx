import { BentoGrid } from "@/components/ui/bento-grid";
import { MoveUpRight } from "lucide-react";
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
            <div className="overflow-hidden rounded-xl">
              <img src={src} />
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-2">
              <div className="font-sans  font-bold  ">{title}</div>
              <div className="font-sans text-sm font-normal line-clamp-3">
                {description}
              </div>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {icons.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white-100/[0.2] rounded-full bg-slate-900 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
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
      "A web-based e-commerce application designed to help users manage their laundry conveniently by enabling pick-up and delivery services without the need to visit the outlet. This project was developed as part of the final project for the Full Stack Development Bootcamp, showcasing the culmination of skills learned during the program.",
    src: "/freshnest.png",
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
      "A web-based event management platform designed to help event organizers create and promote events while enabling attendees to browse and register for those events.",
    src: "/tixify.png",
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
    description: "Discover the beauty of thoughtful and functional design.",
    src: "/builder.png",
    icons: ["/next2.svg", "/chakra2.svg", "/ts.svg", "/contentful.svg"],
    href: "https://company-profile-blond-two.vercel.app",
  },
];
