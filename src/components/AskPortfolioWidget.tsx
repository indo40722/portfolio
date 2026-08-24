import { useState } from 'react';
import { Check, CircleHelp, Clipboard, ExternalLink, X } from 'lucide-react';

type CopyStatus = 'idle' | 'copied' | 'failed';

export function AskPortfolioWidget() {
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
