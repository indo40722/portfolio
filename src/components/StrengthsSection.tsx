import { strengths } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function StrengthsSection() {
  return (
    <section id="strengths" className="content-section" aria-labelledby="strengths-title">
      <SectionHeading eyebrow="Strengths" title="状況を見て、動きを整える。" />
      <div className="content-grid">
        {strengths.map((strength) => {
          const StrengthIcon = strength.Icon;

          return (
            <article className="strength-item" key={strength.title}>
              <span className="strength-icon" aria-hidden="true">
                <StrengthIcon />
              </span>
              <h3>{strength.title}</h3>
              <p>{strength.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
