import { awardItems } from '../content/portfolio';
import { SectionHeading } from './SectionHeading';

export function AwardsSection() {
  return (
    <section id="awards" className="content-section" aria-labelledby="awards-title">
      <SectionHeading eyebrow="Awards" title="制作と受賞の記録。" />
      <div className="award-list" aria-label="受賞歴">
        {awardItems.map((awardItem) => (
          <article
            className="award-row"
            key={`${awardItem.date}-${awardItem.contest}-${awardItem.prize}-${awardItem.project}`}
          >
            <time>{awardItem.date}</time>
            <div>
              <p>{awardItem.contest}</p>
              <h3>{awardItem.project}</h3>
            </div>
            <strong>{awardItem.prize}</strong>
            <p>{awardItem.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
