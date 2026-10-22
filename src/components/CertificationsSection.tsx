import { certificationGroups } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

const certificationCount = certificationGroups.reduce(
  (count, group) => count + group.items.length,
  0,
);

export function CertificationsSection() {
  return (
    <section id="certifications" className="content-section" aria-labelledby="certifications-title">
      <SectionHeading headingId="certifications-title" eyebrow="学習" title="資格・検定" />

      <details className="certification-disclosure">
        <summary>
          <span>一覧を見る</span>
          <span className="certification-count">{certificationCount}件</span>
        </summary>
        <div className="certification-grid">
          {certificationGroups.map((certificationGroup) => (
            <article className="certification-panel" key={certificationGroup.title}>
              <h3>{certificationGroup.title}</h3>
              <ul className="certification-list">
                {certificationGroup.items.map((certificationItem) => (
                  <li key={certificationItem.name}>
                    <span>{certificationItem.name}</span>
                    <small>{certificationItem.status}</small>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
