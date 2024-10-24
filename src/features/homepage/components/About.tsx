const About = () => {
  return (
    <div className="max-w-7xl mx-auto  px-4 py-10 flex md:flex-row flex-col gap-10 justify-between">
      <div className="space-y-6 flex-1">
        <h2 className="font-semibold text-2xl md:text-4xl">Experience</h2>
        <div className="space-y-1">
          <h3 className="font-semibold">Kompas Gramedia</h3>
          <p className="text-neutral-400">Sep - Dec 2022</p>
          <p>Front End Developer Intern</p>
        </div>
        {/* <div className="space-y-1">
          <h3 className="font-semibold">
            Purwadhika Digital Technology School
          </h3>
          <p className="text-neutral-400">May - June 2024</p>
          <p>Fullstack Web Development Bootcamp - Job Connector</p>
        </div> */}
      </div>

      <div className="space-y-6 flex-1">
        <h2 className="font-semibold text-2xl md:text-4xl">Education</h2>
        <div className="space-y-1">
          <h3 className="font-semibold">
            Purwadhika Digital Technology School
          </h3>
          <p className="text-neutral-400">May - June 2024</p>
          <p>Fullstack Web Development Bootcamp</p>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">
            Universitas Muhammadiyah Prof. Dr. Hamka
          </h3>
          <p className="text-neutral-400"> Sep 2019 - Aug 2023</p>
          <p>Informatics Engineering </p>
        </div>
      </div>
    </div>
  );
};

export default About;
