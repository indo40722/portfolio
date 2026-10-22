import { ArrowDown } from 'lucide-react';
import heroExperimentImage from '../assets/vcl-lab-free-mode.png';

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div id="hero-content">
        <p className="eyebrow">HAL大阪 ・ Web開発</p>
        <h1 id="hero-title">
          使う人が迷わない、
          <br />
          Webをつくる。
        </h1>
        <p id="hero-copy">
          大阪の専門学校でWebアプリを学びながら、VCLやHoppyなどのチーム制作に取り組んでいます。
        </p>
        <div className="action-row" aria-label="主要リンク">
          <a className="primary-action" href="#works">
            制作物を見る
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>

      <figure className="hero-visual">
        <img
          src={heroExperimentImage}
          alt="VCLのフリーモード。Joy-Conで操作しながら、試験管やフラスコを3D空間で動かす画面"
        />
        <figcaption>
          <span>VCL / Virtual Chemistry Lab</span>
          <span>化学実験の体験画面</span>
        </figcaption>
      </figure>
    </section>
  );
}
