import { awardItems } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function AwardsSection() {
  return (
    <section id="awards" className="content-section" aria-labelledby="awards-title">
      <SectionHeading headingId="awards-title" eyebrow="受賞" title="受賞歴" />
      <ol className="award-list" aria-label="受賞歴">
        {awardItems.map((awardItem) => (
          <li
            className="award-row"
            key={awardItem.date + awardItem.contest + awardItem.prize + awardItem.project}
          >
            <time>{awardItem.date}</time>
            <div>
              <p>{awardItem.contest}</p>
              <h3>{awardItem.project}</h3>
            </div>
            <strong>{awardItem.prize}</strong>
          </li>
        ))}
      </ol>
    </section>
  );
}
