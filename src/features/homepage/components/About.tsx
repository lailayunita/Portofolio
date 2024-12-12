const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-8 md:py-20 w-full" id="about">
      <div className="flex md:flex-row flex-col justify-between gap-20">
        <div className="flex-1 space-y-10">
          <h2 className="md:text-4xl text-3xl font-medium mb-10">
            My <span className="text-purple-300">Work Experiences</span>{" "}
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#464ab5] to-[#E2CBFF] relative inline-flex w-full overflow-hidden rounded-md p-[1px]">
              <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] border-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="space-y-1 flex-1 bg-slate-900/[0.4] p-4 ">
                <h3 className="font-semibold">
                  Purwadhika Digital Technology School
                </h3>
                <p className="text-neutral-400">Oct 2024 - Present</p>
                <p>Full Stack Developer Intern</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#464ab5] to-[#E2CBFF] relative inline-flex w-full overflow-hidden rounded-md p-[1px]">
              <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] border-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="space-y-1 flex-1 bg-slate-900/[0.4] p-4 ">
                <h3 className="font-semibold">Kompas Gramedia</h3>
                <p className="text-neutral-400">Sep - Dec 2022</p>
                <p>Front End Developer Intern</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10 flex-1">
          <h2 className="md:text-4xl text-3xl font-medium">
            My <span className="text-purple-300">Education</span>{" "}
          </h2>
          <div className="space-y-6 ">
            <div className="bg-gradient-to-r from-[#464ab5] to-[#E2CBFF] relative inline-flex w-full overflow-hidden rounded-md p-[1px]">
              <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] border-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="space-y-1 flex-1 bg-slate-900/[0.4] p-4 ">
                <h3 className="font-semibold">
                  Purwadhika Digital Technology School
                </h3>
                <p className="text-neutral-400">May - Oct 2024</p>
                <p>Fullstack Web Development Bootcamp</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#464ab5] to-[#E2CBFF] relative inline-flex w-full overflow-hidden rounded-md p-[1px]">
              <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] border-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="space-y-1 flex-1 bg-slate-900/[0.4] p-4 ">
                <h3 className="font-semibold">
                  Universitas Muhammadiyah Prof. Dr. Hamka
                </h3>
                <p className="text-neutral-400"> Sep 2019 - Aug 2023</p>
                <p>Informatics Engineering </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
