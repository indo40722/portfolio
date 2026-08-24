import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  CircleHelp,
  Clipboard,
  ExternalLink,
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
  profileLinks,
  skillGroups,
  strengths,
  type Project,
} from './content/portfolio';

const AwardIcon = awardIcon;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(getProjectIdFromHash);
  const activeProject = featuredProjects.find((project) => project.id === activeProjectId);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleHashChange() {
      setActiveProjectId(getProjectIdFromHash());
      setIsMenuOpen(false);
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (activeProject) {
      window.scrollTo({ top: 0 });
    }
  }, [activeProject]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <header id="site-header">
        <a id="site-brand" href="#top" aria-label="トップへ戻る">
          <span>
            <strong>Akihiro</strong>
            <small>Web Developer Student</small>
          </span>
        </a>

        <button
          id="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav id="site-navigation" aria-label="主要ナビゲーション">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main-content">
        {activeProject ? (
          <ProjectDetailPage project={activeProject} />
        ) : (
          <>
            <HeroSection />
            <WorksSection />
            <AwardsSection />
            <StrengthsSection />
            <SkillsSection />
            <ContactSection />
          </>
        )}
      </main>
      <AskPortfolioWidget />
    </>
  );
}

function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <img
        src={heroWorkbench}
        alt="化学実験器具、コード、データ図表、設計ボードが並ぶ開発ワークベンチ"
      />
      <div id="hero-content">
        <p className="eyebrow">HAL大阪 高度情報学科 WEB開発エンジニア専攻</p>
        <h1 id="hero-title" aria-label="ユーザーの困りごとを、動く仕組みに変えるWebエンジニア志望。">
          <span className="hero-title-line" aria-hidden="true">
            ユーザーの困りごとを、
          </span>
          <span className="hero-title-line" aria-hidden="true">
            動く仕組みに変える
          </span>
          <span className="hero-title-line" aria-hidden="true">
            Webエンジニア志望。
          </span>
        </h1>
        <p id="hero-copy">
          チーム開発では、使う人の迷いや不安を見つけ、画面体験・機能設計・進行管理へ落とし込むことを大切にしています。VCLでは体験型の学習システム、Hoppyでは趣味道具の貸し借りを支えるWebサービスを制作しました。
        </p>
        <div className="action-row" aria-label="主要リンク">
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
    <section id="works" className="content-section" aria-labelledby="works-title">
      <SectionHeading
        eyebrow="Works"
        title="制作で担当したこと。"
      />

      <div className="content-grid">
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
    <article className="project-card">
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
      <a className="project-link" href={`#/works/${project.id}`}>
        <ArrowUpRight aria-hidden="true" />
        詳細を見る
      </a>
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

function ProjectDetailPage({ project }: { project: Project }) {
  const ProjectIcon = project.Icon;
  const galleryImages = project.gallery ?? (project.image ? [project.image] : []);

  return (
    <article className="detail-page">
      <section className="detail-hero" aria-labelledby="detail-title">
        <a className="back-link" href="#works">
          <ArrowLeft aria-hidden="true" />
          Works に戻る
        </a>
        <div className="detail-hero-grid">
          <div>
            <div className="detail-title-row">
              <span className="project-icon" aria-hidden="true">
                <ProjectIcon />
              </span>
              <p className="eyebrow">{project.eyebrow}</p>
            </div>
            <h1 id="detail-title">{project.title}</h1>
            <p className="detail-lead">{project.detail.lead}</p>
          </div>
          <dl className="detail-facts" aria-label={`${project.title} の概要`}>
            {project.detail.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className={galleryImages.length > 0 ? 'detail-body' : 'detail-body no-gallery'}
        aria-label={`${project.title} の詳細`}
      >
        {galleryImages.length > 0 && <ProjectGallery key={project.id} images={galleryImages} title={project.title} />}
        <div className="detail-copy">
          {project.detail.sections.map((section) => (
            <section className="detail-section" key={section.title}>
              <p className="eyebrow">{section.eyebrow}</p>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.points && (
                <ul className="detail-point-list">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="detail-section">
            <p className="eyebrow">Stack</p>
            <h2>制作で使った技術</h2>
            <ul className="tag-list detail-tags" aria-label={`${project.title} の技術`}>
              {project.stack.map((stackItem) => (
                <li key={stackItem}>{stackItem}</li>
              ))}
            </ul>
            {project.link && (
              <a className="project-link detail-external-link" href={project.link.href} target="_blank" rel="noreferrer">
                <ExternalLink aria-hidden="true" />
                {project.link.label}
              </a>
            )}
          </section>
        </div>
      </section>
    </article>
  );
}

function ProjectGallery({ images, title }: { images: NonNullable<Project['gallery']>; title: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = images[activeImageIndex];

  return (
    <aside className="detail-gallery" aria-label={`${title} の画像`}>
      <figure className="detail-main-image">
        <img src={activeImage.src} alt={activeImage.alt} />
        {activeImage.caption && <figcaption>{activeImage.caption}</figcaption>}
      </figure>
      {images.length > 1 && (
        <div className="detail-thumbnail-list" aria-label="画像を切り替える">
          {images.map((image, imageIndex) => (
            <button
              className="detail-thumbnail"
              type="button"
              key={`${image.alt}-${imageIndex}`}
              aria-label={`${imageIndex + 1}枚目の画像を表示`}
              aria-pressed={activeImageIndex === imageIndex}
              onClick={() => setActiveImageIndex(imageIndex)}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}

function AwardsSection() {
  return (
    <section id="awards" className="content-section" aria-labelledby="awards-title">
      <SectionHeading
        eyebrow="Awards"
        title="制作と受賞の記録。"
      />
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

function StrengthsSection() {
  return (
    <section id="strengths" className="content-section" aria-labelledby="strengths-title">
      <SectionHeading
        eyebrow="Strengths"
        title="状況を見て、動きを整える。"
      />
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

function SkillsSection() {
  return (
    <section id="skills" className="content-section" aria-labelledby="skills-title">
      <SectionHeading
        eyebrow="Skills"
        title="制作で使った技術。"
      />
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

function ContactSection() {
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

type CopyStatus = 'idle' | 'copied' | 'failed';

function AskPortfolioWidget() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const siteUrl = getSiteUrl();
  const markdownUrl = new URL('profile.md', siteUrl).href;
  const llmsUrl = new URL('llms.txt', siteUrl).href;
  const askPrompt = createAskPrompt(siteUrl, markdownUrl, llmsUrl);
  const encodedPrompt = encodeURIComponent(askPrompt);
  const aiLinks = [
    {
      label: 'ChatGPT',
      href: `https://chatgpt.com/?prompt=${encodedPrompt}`,
    },
    {
      label: 'Claude',
      href: 'https://claude.ai/new',
    },
    {
      label: 'Gemini',
      href: 'https://gemini.google.com/app',
    },
    {
      label: 'Perplexity',
      href: `https://www.perplexity.ai/search?q=${encodedPrompt}`,
    },
  ];

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(askPrompt);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }

    window.setTimeout(() => setCopyStatus('idle'), 2400);
  }

  function handleAiLinkClick() {
    void copyPrompt();
  }

  return (
    <aside id="ask-widget">
      {isPanelOpen && (
        <section id="ask-panel" aria-labelledby="ask-title">
          <div id="ask-panel-header">
            <div>
              <p className="eyebrow">Ask</p>
              <h2 id="ask-title">Akihiroについて聞く</h2>
            </div>
            <button
              id="ask-close"
              type="button"
              aria-label="相談パネルを閉じる"
              onClick={() => setIsPanelOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <p>ページURLとMarkdownを含むプロンプトを使います。</p>
          <div id="ask-link-grid" aria-label="相談先">
            {aiLinks.map((aiLink) => (
              <a
                className="ask-service-link"
                href={aiLink.href}
                key={aiLink.label}
                target="_blank"
                rel="noreferrer"
                onClick={handleAiLinkClick}
              >
                <span>{aiLink.label}</span>
                <ExternalLink aria-hidden="true" />
              </a>
            ))}
          </div>
          <div id="ask-panel-footer">
            <button id="ask-copy-button" type="button" onClick={() => void copyPrompt()}>
              {copyStatus === 'copied' ? <Check aria-hidden="true" /> : <Clipboard aria-hidden="true" />}
              {copyStatus === 'copied' ? 'コピー済み' : 'プロンプトをコピー'}
            </button>
            <a id="ask-markdown-link" href={markdownUrl} target="_blank" rel="noreferrer">
              Markdown
            </a>
          </div>
          {copyStatus === 'failed' && (
            <p id="ask-status" role="status">
              コピーできない場合はMarkdownのURLを渡してください。
            </p>
          )}
        </section>
      )}
      <button
        id="ask-toggle"
        type="button"
        title="Akihiroについて聞く"
        aria-label={isPanelOpen ? '相談パネルを閉じる' : 'Akihiroについて聞く'}
        aria-controls="ask-panel"
        aria-expanded={isPanelOpen}
        onClick={() => setIsPanelOpen((currentValue) => !currentValue)}
      >
        <CircleHelp aria-hidden="true" />
      </button>
    </aside>
  );
}

function getSiteUrl() {
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return new URL(baseUrl, window.location.origin).href;
}

function createAskPrompt(siteUrl: string, markdownUrl: string, llmsUrl: string) {
  return [
    'Akihiroのポートフォリオについて相談したいです。',
    '',
    `ページURL: ${siteUrl}`,
    `AI向けMarkdown: ${markdownUrl}`,
    `llms.txt: ${llmsUrl}`,
    '',
    'この内容を読んで、次の観点で答えてください。',
    '- どんな制作経験がある人か',
    '- VCL、Hoppy、学生データ分析AWARD、受賞歴で分かる強み',
    '- 作品詳細ページを踏まえて、深掘りできそうな実装・設計の話題',
    '- 本人が担当した範囲と、チーム全体の成果の違い',
    '- 面接やカジュアル面談で深掘りするとよさそうな質問',
  ].join('\n');
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  const headingId = `${eyebrow.toLowerCase()}-title`;

  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function getProjectIdFromHash() {
  const detailPrefix = '#/works/';

  if (!window.location.hash.startsWith(detailPrefix)) {
    return null;
  }

  return decodeURIComponent(window.location.hash.slice(detailPrefix.length));
}

export default App;
