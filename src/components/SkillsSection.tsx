import { skillGroups } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="content-section" aria-labelledby="skills-title">
      <SectionHeading headingId="skills-title" eyebrow="技術" title="使った技術" />
      <div className="content-grid">
        {skillGroups.map((skillGroup) => (
          <article className="skill-panel" key={skillGroup.title}>
            <h3>{skillGroup.title}</h3>
            <ul>
              {skillGroup.items.map((skillItem) => (
                <li key={skillItem}>{skillItem}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
