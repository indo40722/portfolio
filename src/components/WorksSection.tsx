import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, type Project } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function WorksSection() {
  return (
    <section id="works" className="content-section" aria-labelledby="works-title">
      <SectionHeading headingId="works-title" eyebrow="制作" title="つくったもの" />

      <ol className="project-list">
        {featuredProjects.map((project) => (
          <li className="project-row" key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {project.image && (
        <figure className="project-media">
          <img src={project.image.src} alt={project.image.alt} loading="lazy" />
        </figure>
      )}

      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-role">
          <strong>担当</strong>
          <span>{project.role}</span>
        </p>
      </div>

      <div className="project-actions">
        <a className="project-link" href={'#/works/' + project.id}>
          制作内容を見る
          <ArrowUpRight aria-hidden="true" />
        </a>
        {project.link && (
          <a className="project-material-link" href={project.link.href} target="_blank" rel="noreferrer">
            {project.link.label}
            <ArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
