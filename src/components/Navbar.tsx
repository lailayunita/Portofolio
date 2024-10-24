"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Button } from "./ui/button";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(true);
  };
  return (
    <nav className="bg-[#fbfbfb] sticky top-0 shadow z-10">
      <div className="mx-auto max-w-7xl p-4 flex justify-between gap-4 items-center">
        <div className="flex gap-16 items-center">
          <div className="font-playfair font-semibold text-2xl">LY</div>
          <div className="md:flex gap-8 hidden text-sm">
            <Link href="">Projects</Link>
            <Link href="">About</Link>
            <Link href="">Experiences</Link>
            <Link
              href="https://drive.google.com/file/d/1CzBukc1wsUCg6ehABjuXwhMi6PNpk53J/view?usp=drive_link"
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
        <div className="md:flex gap-4 items-center hidden">
          <Link href="https://www.instagram.com/lailayunita_/">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://github.com/lailayunita">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/lailayunita01/">
            <FaLinkedin size={24} />
          </Link>
        </div>
        <button onClick={toggleMenu} className=" md:hidden">
          <IoIosMenu size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
