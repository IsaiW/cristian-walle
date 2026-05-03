/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/IsaiW' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristian-isai-walle-guzman-958476225/' },
  { label: 'Twitter X', href: 'https://x.com/salsa_eater3?s=11' },
  { label: 'Instagram', href: 'https://www.instagram.com/isaiwalle/' },
  { label: 'CodePen', href: 'https://codepen.io/isaiuwu' }
];

const Footer = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary href="mailto:cristianisai.wg@gmail.com" label="Start a project" icon="chevron_right" classes="reveal-up"/>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 text-zinc-400 text-sm reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-zinc-400 text-sm reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src={`${base}images/logo.svg`} width={40} height={40} alt="Logo"/>
          </a>
          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2026 <span className="text-zinc-200">Cristian Walle</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
