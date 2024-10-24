const Footer = () => {
  return (
    <div className="bg-black text-white py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row gap-4">
        <div className="w-[100%] md:w-[50%]">
          © 2024 Laila Yunita. All rights reserved.
        </div>
        <div className="w-[100%] md:w-[50%]">
          Loosely coded in Visual Studio Code by yours truly. Built with Next.js
          and Tailwind CSS, deployed with Vercel. All text is set in the Inter
          typeface.
        </div>
      </div>
    </div>
  );
};

export default Footer;
