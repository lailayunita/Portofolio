"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
import { IoIosMenu } from "react-icons/io";
import { handleScroll } from "@/lib/scroll";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrolledUp(false);
      } else {
        // Scrolling up
        setIsScrolledUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [open, setOpen] = useState(false);

  const handleNavbarMobile = (section: string) => {
    handleScroll(section);
    setOpen(false);
  };

  return (
    <nav
      className={`${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      } sticky top-0 z-10 bg-[#010319]/[0.5] backdrop-blur-md text-white transition-transform duration-300`}
    >
      <div className="mx-auto max-w-6xl p-5 flex justify-between gap-4 items-center">
        <div className="flex gap-16 items-center">
          <Link
            href="/"
            className={`font-semibold md:text-2xl text-xl ${fraunces.className}`}
          >
            LY
          </Link>
          <div className="md:flex gap-8 hidden text-sm">
            <button
              onClick={() => {
                handleScroll("projects");
              }}
            >
              Projects
            </button>
            <button
              onClick={() => {
                handleScroll("about");
              }}
            >
              Experience
            </button>
            <button
              onClick={() => {
                handleScroll("about");
              }}
            >
              Education
            </button>

            <Link
              href="https://drive.google.com/file/d/1iQkGsIEnWKae82ruDOsYDWP9IaIAxa3M/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="md:flex gap-4 items-center hidden">
          <Link href="https://www.instagram.com/lailayunita_/" target="_blank">
            <FaInstagram size={22} />
          </Link>
          <Link href="https://github.com/lailayunita" target="_blank">
            <FaGithub size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lailayunita01/"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </Link>
        </div>

        <Sheet open={open}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              onClick={() => {
                setOpen(true);
              }}
            >
              <IoIosMenu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#010319] text-purple-200 border-none">
            <SheetClose asChild className="flex justify-end w-full ">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <IoClose size={20} />
              </button>
            </SheetClose>
            <div className="flex flex-col justify-center items-center gap-4 mt-40">
              <button
                className="text-xl"
                onClick={() => {
                  handleNavbarMobile("projects");
                }}
              >
                PROJECTS
              </button>
              <button
                className="text-xl"
                onClick={() => {
                  handleNavbarMobile("about");
                }}
              >
                EXPERIENCES
              </button>
              <button
                className="text-xl"
                onClick={() => {
                  handleNavbarMobile("about");
                }}
              >
                EDUCATION
              </button>
              <Link
                href="https://drive.google.com/file/d/1iQkGsIEnWKae82ruDOsYDWP9IaIAxa3M/view?usp=sharing"
                target="_blank"
                className="text-xl"
              >
                RESUME
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
