import { ArrowUpRight, Mail } from 'lucide-react';
import { awardIcon, contactNotes, profileLinks } from '../content/portfolio';

const AwardIcon = awardIcon;

export function ContactSection() {
  const hasGitHubLink = profileLinks.github.length > 0;
  const hasEmailLink = profileLinks.email.length > 0;

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">使いやすさまで考える開発に関わりたいです。</h2>
        {contactNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <div className="action-row" aria-label="連絡先リンク">
        {hasGitHubLink && (
          <a className="secondary-action dark" href={profileLinks.github} target="_blank" rel="noreferrer">
            <ArrowUpRight aria-hidden="true" />
            GitHub
          </a>
        )}
        {hasEmailLink && (
          <a className="primary-action dark" href={`mailto:${profileLinks.email}`}>
            <Mail aria-hidden="true" />
            Email
          </a>
        )}
        {!hasGitHubLink && !hasEmailLink && (
          <div className="contact-placeholder">
            <AwardIcon aria-hidden="true" />
            <span>Akihiro / HAL大阪 高度情報学科 WEB開発エンジニア専攻</span>
          </div>
        )}
      </div>
    </section>
  );
}
