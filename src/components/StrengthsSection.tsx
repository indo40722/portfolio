import { strengths } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function StrengthsSection() {
  return (
    <section id="strengths" className="content-section" aria-labelledby="strengths-title">
      <SectionHeading headingId="strengths-title" eyebrow="プロフィール" title="大切にしていること" />
      <div className="content-grid">
        {strengths.map((strength) => (
          <article className="strength-item" key={strength.title}>
            <h3>{strength.title}</h3>
            <p>{strength.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
