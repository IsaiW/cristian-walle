/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiDotnet,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiPython,
} from 'react-icons/si';
import { TbDatabase, TbChartBar } from 'react-icons/tb';
import SkillCard from "./SkillCard.jsx";

const skillItem = [
  { icon: <SiJavascript size={28} color="#F7DF1E" />, label: 'JavaScript', desc: 'Language' },
  { icon: <SiReact size={28} color="#61DAFB" />, label: 'React', desc: 'Frontend Framework' },
  { icon: <SiTailwindcss size={28} color="#06B6D4" />, label: 'TailwindCSS', desc: 'CSS Framework' },
  { icon: <SiFigma size={28} color="#F24E1E" />, label: 'Figma', desc: 'Design & Prototyping' },
  { icon: <SiDotnet size={28} color="#512BD4" />, label: '.NET / C#', desc: 'Backend Framework' },
  { icon: <SiNodedotjs size={28} color="#5FA04E" />, label: 'Node.js', desc: 'Backend Runtime' },
  { icon: <TbDatabase size={28} color="#CC2927" />, label: 'SQL Server', desc: 'Database' },
  { icon: <SiMysql size={28} color="#4479A1" />, label: 'MySQL', desc: 'Database' },
  { icon: <SiMongodb size={28} color="#47A248" />, label: 'MongoDB', desc: 'NoSQL Database' },
  { icon: <TbChartBar size={28} color="#F2C811" />, label: 'Power BI', desc: 'Data Analytics' },
  { icon: <SiPython size={28} color="#3776AB" />, label: 'Python', desc: 'Data Engineering' },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Essential Tools I Use
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          From ETL pipelines and KPI dashboards to full-stack web applications — the tools I rely on daily.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ icon, label, desc }, key) => (
            <SkillCard
              key={key}
              icon={icon}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
