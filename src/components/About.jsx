/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

const aboutItems = [
  { label: 'Projects delivered', number: 15 },
  { label: 'Years of experience', number: 4 },
  { label: 'Certifications', number: 3 },
];

const About = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-900 p-7 rounded-xl md:p-12 reveal-up ring-1 ring-zinc-800">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Data-focused full-stack engineer at Corning Optical Communications, building ETL pipelines, automating KPI reporting systems, and shipping internal tooling with React and .NET. Four years of freelance web development for clients in industrial and transport sectors across northern Mexico.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-amber-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img src={`${base}images/logo.svg`} alt="" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
