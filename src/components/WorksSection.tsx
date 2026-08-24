import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, type Project } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function WorksSection() {
  return (
    <section id="works" className="content-section" aria-labelledby="works-title">
      <SectionHeading eyebrow="Works" title="制作で担当したこと。" />

      <div className="content-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ProjectIcon = project.Icon;

  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-icon" aria-hidden="true">
          <ProjectIcon />
        </span>
        <div>
          <p className="project-eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
        </div>
      </div>
      {project.image && (
        <figure className="project-media">
          <img src={project.image.src} alt={project.image.alt} loading="lazy" />
        </figure>
      )}
      <p className="project-summary">{project.summary}</p>
      <p className="project-role">{project.role}</p>
      <ul className="evidence-list" aria-label={`${project.title} の実績`}>
        {project.evidence.map((evidenceItem) => (
          <li key={evidenceItem}>{evidenceItem}</li>
        ))}
      </ul>
      <a className="project-link" href={`#/works/${project.id}`}>
        <ArrowUpRight aria-hidden="true" />
        詳細を見る
      </a>
      {project.link && (
        <a className="project-link" href={project.link.href} target="_blank" rel="noreferrer">
          <ArrowUpRight aria-hidden="true" />
          {project.link.label}
        </a>
      )}
      <ul className="tag-list" aria-label={`${project.title} の技術`}>
        {project.stack.map((stackItem) => (
          <li key={stackItem}>{stackItem}</li>
        ))}
      </ul>
    </article>
  );
}
