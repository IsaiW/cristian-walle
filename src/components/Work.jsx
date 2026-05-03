/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const base = import.meta.env.BASE_URL;

const works = [
  {
    imgSrc: `${base}images/project-1.jpg`,
    title: 'Óptica Alfaro – full-stack e-commerce',
    tags: ['React', 'Full-stack', 'E-commerce'],
    projectLink: 'https://opticaalfaro.online/'
  },
  {
    imgSrc: `${base}images/project-2.jpg`,
    title: 'BIQCP – quality control planning app',
    tags: ['React', '.NET API', 'C#'],
    projectLink: ''
  },
  {
    imgSrc: `${base}images/project-3.jpg`,
    title: 'Academic management system',
    tags: ['ASP.NET MVC', 'SQL Server', 'C#'],
    projectLink: ''
  },
  {
    imgSrc: `${base}images/project-4.jpg`,
    title: 'ALIANCE CLL – corporate landing page',
    tags: ['Web design', 'Development'],
    projectLink: 'https://acllsolutions.com.mx/'
  },
  {
    imgSrc: `${base}images/project-5.jpg`,
    title: 'GEMA Consultores – corporate website',
    tags: ['Web design', 'Development'],
    projectLink: 'https://gemaconsultores.mx/inicio/'
  },
  {
    imgSrc: `${base}images/project-6.jpg`,
    title: 'Expressline – transport landing page',
    tags: ['Web design', 'HTML/CSS'],
    projectLink: 'https://isaiw.github.io/web-page-simple/'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
