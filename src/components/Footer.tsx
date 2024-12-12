import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#010319] text-white py-10 text-sm">
      <div className="max-w-6xl mx-auto px-5 flex flex-col-reverse md:flex-row gap-4">
        <div className="w-[100%] md:w-[50%] flex flex-col gap-8">
          <div className="md:hidden flex gap-4 items-center">
            <Link
              href="https://www.instagram.com/lailayunita_/"
              target="_blank"
            >
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
          <div className="">© 2024 Laila Yunita. All rights reserved.</div>
        </div>
        <div className="w-[100%] md:w-[50%]">
          Loosely coded in Visual Studio Code by yours truly. Built with Next.js
          and Tailwind CSS, deployed with Vercel.
        </div>
      </div>
    </div>
  );
};

export default Footer;
