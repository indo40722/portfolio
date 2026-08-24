import { skillGroups } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="content-section" aria-labelledby="skills-title">
      <SectionHeading eyebrow="Skills" title="制作で使った技術。" />
      <div className="content-grid">
        {skillGroups.map((skillGroup) => {
          const SkillIcon = skillGroup.Icon;

          return (
            <article className="skill-panel" key={skillGroup.title}>
              <div className="skill-heading">
                <SkillIcon aria-hidden="true" />
                <h3>{skillGroup.title}</h3>
              </div>
              <p>{skillGroup.description}</p>
              <ul>
                {skillGroup.items.map((skillItem) => (
                  <li key={skillItem}>{skillItem}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
