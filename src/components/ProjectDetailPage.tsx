import { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { Project } from '../content/portfolio';

export function ProjectDetailPage({ project }: { project: Project }) {
  const ProjectIcon = project.Icon;
  const galleryImages = project.gallery ?? (project.image ? [project.image] : []);

  return (
    <article className="detail-page">
      <section className="detail-hero" aria-labelledby="detail-title">
        <a className="back-link" href="#works">
          <ArrowLeft aria-hidden="true" />
          Works に戻る
        </a>
        <div className="detail-hero-grid">
          <div>
            <div className="detail-title-row">
              <span className="project-icon" aria-hidden="true">
                <ProjectIcon />
              </span>
              <p className="eyebrow">{project.eyebrow}</p>
            </div>
            <h1 id="detail-title">{project.title}</h1>
            <p className="detail-lead">{project.detail.lead}</p>
          </div>
          <dl className="detail-facts" aria-label={`${project.title} の概要`}>
            {project.detail.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className={galleryImages.length > 0 ? 'detail-body' : 'detail-body no-gallery'}
        aria-label={`${project.title} の詳細`}
      >
        {galleryImages.length > 0 && <ProjectGallery key={project.id} images={galleryImages} title={project.title} />}
        <div className="detail-copy">
          {project.detail.sections.map((section) => (
            <section className="detail-section" key={section.title}>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.points && (
                <ul className="detail-point-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="detail-section">
            <p className="eyebrow">Stack</p>
            <h2>制作で使った技術</h2>
            <ul className="tag-list detail-tags" aria-label={`${project.title} の技術`}>
              {project.stack.map((stackItem) => (
                <li key={stackItem}>{stackItem}</li>
              ))}
            </ul>
          </section>

          {project.link && (
            <section className="detail-section">
              <p className="eyebrow">Materials</p>
              <h2>関連資料</h2>
              <a className="project-link detail-external-link" href={project.link.href} target="_blank" rel="noreferrer">
                <ExternalLink aria-hidden="true" />
                {project.link.label}
              </a>
            </section>
          )}
        </div>
      </section>
    </article>
  );
}

function ProjectGallery({ images, title }: { images: NonNullable<Project['gallery']>; title: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = images[activeImageIndex];

  return (
    <aside className="detail-gallery" aria-label={`${title} の画像`}>
      <figure className="detail-main-image">
        <img src={activeImage.src} alt={activeImage.alt} />
        {activeImage.caption && <figcaption>{activeImage.caption}</figcaption>}
      </figure>
      {images.length > 1 && (
        <div className="detail-thumbnail-list" aria-label="画像を切り替える">
          {images.map((image, imageIndex) => (
            <button
              className="detail-thumbnail"
              type="button"
              key={`${image.alt}-${imageIndex}`}
              aria-label={`${imageIndex + 1}枚目の画像を表示`}
              aria-pressed={activeImageIndex === imageIndex}
              onClick={() => setActiveImageIndex(imageIndex)}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
