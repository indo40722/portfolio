import { ArrowUpRight, Sparkles } from 'lucide-react';
import heroWorkbench from '../assets/hero-workbench.png';
import { metrics } from '../content/portfolio';

export function HeroSection() {
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
