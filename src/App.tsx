import { useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import heroWorkbench from './assets/hero-workbench.png';
import {
  awardItems,
  awardIcon,
  contactNotes,
  featuredProjects,
  metrics,
  navigationItems,
  profile,
  profileLinks,
  skillGroups,
  strengths,
  type Project,
} from './content/portfolio';

const AwardIcon = awardIcon;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="トップへ戻る">
          <span className="brand-symbol">A</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.romanName}</small>
          </span>
        </a>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className={isMenuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="主要ナビゲーション">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <HeroSection />
        <WorksSection />
        <AwardsSection />
        <StrengthsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={heroWorkbench}
        alt="化学実験器具、コード、データ図表、設計ボードが並ぶ開発ワークベンチ"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow">{profile.school}</p>
        <h1 id="hero-title" aria-label={profile.headline}>
          {profile.headlineLines.map((headlineLine) => (
            <span className="hero-title-line" key={headlineLine} aria-hidden="true">
              {headlineLine}
            </span>
          ))}
        </h1>
        <p className="hero-copy">{profile.introduction}</p>
        <div className="hero-actions" aria-label="主要リンク">
          <a className="primary-action" href="#works">
            <Sparkles aria-hidden="true" />
            作品を見る
          </a>
          <a className="secondary-action" href="#skills">
            <ArrowUpRight aria-hidden="true" />
            技術を見る
          </a>
        </div>
      </div>
      <MetricStrip />
    </section>
  );
}

function MetricStrip() {
  return (
    <dl className="metric-strip" aria-label="実績サマリー">
      {metrics.map((metric) => (
        <div className="metric-item" key={metric.label}>
          <dt>{metric.label}</dt>
          <dd>{metric.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function WorksSection() {
  return (
    <section className="section works-section" id="works" aria-labelledby="works-title">
      <SectionHeading
        eyebrow="Works"
        title="作ったものから、考え方まで見えるようにする。"
        description="制作物は完成物だけでなく、担当範囲、判断、数字で残った成果まで並べます。"
      />

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ProjectIcon = project.Icon;

  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-card-header">
        <span className="project-icon" aria-hidden="true">
          <ProjectIcon />
        </span>
        <div>
          <p className="project-eyebrow">{project.eyebrow}</p>
          <h3>{project.title}</h3>
        </div>
      </div>
      {project.image && (
        <figure className="project-media">
          <img src={project.image.src} alt={project.image.alt} loading="lazy" />
        </figure>
      )}
      <p className="project-summary">{project.summary}</p>
      <p className="project-role">{project.role}</p>
      <ul className="evidence-list" aria-label={`${project.title} の実績`}>
        {project.evidence.map((evidenceItem) => (
          <li key={evidenceItem}>{evidenceItem}</li>
        ))}
      </ul>
      {project.link && (
        <a className="project-link" href={project.link.href} target="_blank" rel="noreferrer">
          <ArrowUpRight aria-hidden="true" />
          {project.link.label}
        </a>
      )}
      <ul className="tag-list" aria-label={`${project.title} の技術`}>
        {project.stack.map((stackItem) => (
          <li key={stackItem}>{stackItem}</li>
        ))}
      </ul>
    </article>
  );
}

function AwardsSection() {
  return (
    <section className="section awards-section" id="awards" aria-labelledby="awards-title">
      <SectionHeading
        eyebrow="Awards"
        title="作る回数を、受賞歴として積み上げてきた。"
        description="代表作以外の制作も、テーマ、結果、公開時の配慮が分かる形でまとめます。"
      />
      <div className="award-list" aria-label="受賞歴">
        {awardItems.map((awardItem) => (
          <article className="award-row" key={`${awardItem.date}-${awardItem.contest}`}>
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

function StrengthsSection() {
  return (
    <section className="section strengths-section" id="strengths" aria-labelledby="strengths-title">
      <SectionHeading
        eyebrow="Strengths"
        title="強みは、相手の状況に合わせて動きを変えられること。"
        description="開発でも接客でも、最初に見るのは相手がどこで迷っているかです。"
      />
      <div className="strength-grid">
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

function SkillsSection() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills"
        title="Reactだけで終わらせず、設計と運用まで伸ばす。"
        description="いまの重点はTypeScript、React、Node.js、DB設計、レビュー観点です。"
      />
      <div className="skill-grid">
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

function ContactSection() {
  const hasGitHubLink = profileLinks.github.length > 0;
  const hasEmailLink = profileLinks.email.length > 0;

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">使いやすさまで考える開発に関わりたいです。</h2>
        {contactNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <div className="contact-actions" aria-label="連絡先リンク">
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
            <span>{profile.name} / {profile.school}</span>
          </div>
        )}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const headingId = `${eyebrow.toLowerCase()}-title`;

  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;
