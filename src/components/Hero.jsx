/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src={`${base}images/avatar-1.jpg`} className="img-cover" width={40} height={40} alt="Cristian Walle"/>
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <p className="font-mono text-amber-400 text-sm tracking-widest mt-5 mb-2">
            &gt; init.portfolio()
          </p>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mb-8 lg:mb-10">
            Full-Stack Engineer & Data Systems Builder
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href={`${base}images/Curriculumvitae2025.pdf`}
              label="Download CV"
              icon="download"
            />
            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-amber-400 via-25% via-amber-400/40 to-65% rounded-[60px] overflow-hidden shadow-2xl shadow-amber-400/20">
            <img src={`${base}images/hero-banner.jpg`} alt="Cristian Walle" className="w-full" width={656} height={800} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
