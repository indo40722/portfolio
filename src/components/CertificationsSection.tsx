import { certificationGroups, profileLinks } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function CertificationsSection() {
  return (
    <section id="certifications" className="content-section" aria-labelledby="certifications-title">
      <SectionHeading eyebrow="Certifications" title="資格・検定の記録。" />

      <div className="certification-grid">
        {certificationGroups.map((certificationGroup) => {
          const CertificationIcon = certificationGroup.Icon;

          return (
            <article className="certification-panel" key={certificationGroup.title}>
              <div className="certification-heading">
                <CertificationIcon aria-hidden="true" />
                <h3>{certificationGroup.title}</h3>
              </div>
              <p>{certificationGroup.description}</p>
              <ul className="certification-list">
                {certificationGroup.items.map((certificationItem) => (
                  <li key={certificationItem.name}>
                    <span>{certificationItem.name}</span>
                    <small>{certificationItem.status}</small>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="certification-source">
        <a className="project-link" href={profileLinks.note} target="_blank" rel="noreferrer">
          Noteで学習記録を見る
        </a>
      </div>
    </section>
  );
}
