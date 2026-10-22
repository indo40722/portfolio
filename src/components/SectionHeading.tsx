type SectionHeadingProps = {
  headingId: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ headingId, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
