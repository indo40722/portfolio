import { ArrowUpRight } from 'lucide-react';
import { contactNotes, profileLinks } from '../content/portfolio';

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">連絡先</p>
        <h2 id="contact-title">Web開発の仕事を志望しています。</h2>
        {contactNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <div className="action-row" aria-label="連絡先リンク">
        <a className="primary-action" href={profileLinks.github} target="_blank" rel="noreferrer">
          GitHubで制作を見る
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
