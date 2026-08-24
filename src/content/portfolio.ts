import {
  BarChart3,
  Boxes,
  Code2,
  Database,
  FlaskConical,
  Headphones,
  MessageSquareHeart,
  Network,
  Trophy,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import hoppyOverviewImage from '../assets/hoppy-overview.png';
import vclExperienceImage from '../assets/vcl-experience-ui.png';

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectDetailSection = {
  eyebrow: string;
  title: string;
  body: string;
  points?: string[];
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  lead: string;
  facts: ProjectFact[];
  sections: ProjectDetailSection[];
};

export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  evidence: string[];
  stack: string[];
  image?: ProjectImage;
  gallery?: ProjectImage[];
  link?: {
    href: string;
    label: string;
  };
  detail: ProjectDetail;
  Icon: LucideIcon;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
  Icon: LucideIcon;
};

export type AwardItem = {
  date: string;
  contest: string;
  prize: string;
  project: string;
  note: string;
};

export const navigationItems = [
  { label: 'Works', href: '#works' },
  { label: 'Awards', href: '#awards' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Skills', href: '#skills' },
];

export const metrics = [
  { value: '金賞', label: 'VCL 学内コンテスト' },
  { value: '準優勝', label: '学生データ分析AWARD 2025' },
  { value: '1044h', label: 'Hoppy チーム合計開発時間' },
  { value: '1位', label: 'コールセンター日間ランキング' },
];

export const featuredProjects: Project[] = [
  {
    id: 'vcl',
    title: 'VCL / Virtual Chemistry Lab',
    eyebrow: '学内コンテスト 金賞',
    summary:
      'Joy-Con操作と3D表現を組み合わせ、化学実験を安全に体験できる学習システム。操作、反応、結果表示、解説を一つの流れとして設計しました。',
    role:
      '4人チームのリーダー兼フロントエンド・画面体験担当。企画整理、入力方式の検証、技術選定、役割分担、ドキュメント整理、Joy-Con入力と画面連携を担当。',
    evidence: ['Joy-Con入力', '3D実験表現', '進行処理', '学習進捗・トロフィー保存'],
    stack: ['Node.js', 'Socket.IO', 'Three.js', 'Joy-Con', 'Team Lead'],
    image: {
      src: vclExperienceImage,
      alt: 'VCLの実験体験UI。Joy-Con入力、化学実験の3D表現、進行状態の画面をまとめた資料',
      caption: 'Joy-Con入力、実験の3D表示、進行状態、学習進捗をまとめたVCLの画面資料',
    },
    gallery: [
      {
        src: vclExperienceImage,
        alt: 'VCLの実験体験UI。Joy-Con入力、化学実験の3D表現、進行状態の画面をまとめた資料',
        caption: 'Joy-Con入力、実験の3D表示、進行状態、学習進捗をまとめたVCLの画面資料',
      },
    ],
    detail: {
      lead:
        '化学実験の一連の流れを、実物の薬品を使わずにWeb上で体験できる学習システムです。操作して、反応を見て、結果と解説を確認するところまでを一つの体験として設計しました。',
      facts: [
        { label: '結果', value: 'HAL EVENT WEEK 金賞' },
        { label: '体制', value: '4人チーム / リーダー' },
        { label: '担当', value: '画面体験・フロントエンド' },
        { label: '入力', value: 'Joy-Con' },
      ],
      sections: [
        {
          eyebrow: 'Overview',
          title: '安全に実験の流れを体験する',
          body:
            '注ぐ、混ぜる、反応を見る、結果を確認するという化学実験の流れを、3D表現と画面遷移で再現しました。学習システムとして、ただ操作できるだけでなく、結果表示や解説まで自然につながることを重視しました。',
        },
        {
          eyebrow: 'Role',
          title: '画面体験とチーム進行を担当',
          body:
            '4人チームのリーダーとして、企画整理、役割分担、技術選定、ドキュメント整理を担当しました。実装面では、Joy-Con入力と画面上の実験進行がつながる部分を中心に制作しました。',
          points: ['企画整理', '入力方式の検証', 'Joy-Con入力と画面連携', '進行処理と学習進捗の整理'],
        },
        {
          eyebrow: 'Decision',
          title: '入力方式を検証してJoy-Conを採用',
          body:
            '最初からJoy-Conだけに決めていたわけではありません。画像認識、QRコード、RGB検出、マイコンとジャイロセンサーなどを比較し、操作感と実装の現実性を見ながらJoy-Conを採用しました。',
        },
        {
          eyebrow: 'Result',
          title: '学内発表で伝わる体験にまとめる',
          body:
            '操作、反応、結果表示、解説を一つの流れにまとめ、HAL EVENT WEEKで金賞を受賞しました。初期プロトタイプでも、化学実験の導線を動く形にしたことで銅賞を受賞しています。',
        },
      ],
    },
    Icon: FlaskConical,
  },
  {
    id: 'hoppy',
    title: 'Hoppy',
    eyebrow: 'Webシステム学内コンペ 銀賞',
    summary:
      'カメラ、アウトドア用品、楽器などを貸し借りできるWebサービス。商品レンタルに加え、コミュニティ、Q&A、フォロー、サポートを一つの体験として設計しました。',
    role:
      'コミュニティ機能とサポート機能を担当。投稿、画像投稿、いいね、コメント、Q&A、フォロー、お問い合わせ、FAQ、利用ガイドを実装しました。',
    evidence: ['開発期間7か月', '4人チーム', 'チーム合計1044時間', '52テーブル'],
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Database Design'],
    image: {
      src: hoppyOverviewImage,
      alt: 'Hoppyの概要資料。趣味道具レンタルサービスの画面と主要機能をまとめたスライド',
      caption: '趣味道具レンタル、コミュニティ、Q&A、サポート機能をまとめたHoppyの概要資料',
    },
    gallery: [
      {
        src: hoppyOverviewImage,
        alt: 'Hoppyの概要資料。趣味道具レンタルサービスの画面と主要機能をまとめたスライド',
        caption: '趣味道具レンタル、コミュニティ、Q&A、サポート機能をまとめたHoppyの概要資料',
      },
    ],
    detail: {
      lead:
        '趣味道具を貸し借りできるWebサービスです。商品レンタルだけでなく、投稿、Q&A、フォロー、問い合わせ、FAQ、利用ガイドまで含めて、趣味を始める前の不安を減らす体験を目指しました。',
      facts: [
        { label: '結果', value: 'Webシステム学内コンペ 銀賞' },
        { label: '体制', value: '4人チーム' },
        { label: '期間', value: '7か月' },
        { label: '開発時間', value: 'チーム合計1044時間' },
      ],
      sections: [
        {
          eyebrow: 'Overview',
          title: 'レンタル前後の不安まで扱う',
          body:
            'カメラ、アウトドア用品、楽器などを貸し借りできるサービスとして制作しました。レンタル機能だけではなく、利用前に質問したり、投稿から雰囲気を知ったり、困った時にサポートへ進める導線も含めています。',
        },
        {
          eyebrow: 'Role',
          title: 'コミュニティ機能とサポート機能を担当',
          body:
            '投稿、画像投稿、いいね、コメント、Q&A、フォロー、お問い合わせ、FAQ、利用ガイドを実装しました。機能数が多いため、画面ごとの責務とデータのつながりを整理しながら進めました。',
          points: ['投稿・画像投稿', 'いいね・コメント', 'Q&A・フォロー', 'お問い合わせ・FAQ・利用ガイド'],
        },
        {
          eyebrow: 'Design',
          title: '52テーブルを前提に機能を組み立てる',
          body:
            'コミュニティ、商品、ユーザー、問い合わせなど複数の領域を扱うため、テーブル構成と画面で使うデータの関係を意識しました。後から変更しにくい部分ほど、先に整理してから実装することを意識しました。',
        },
        {
          eyebrow: 'Result',
          title: 'チーム合計1044時間の制作としてまとめる',
          body:
            '4人チームで7か月制作し、チーム合計開発時間は1044時間です。Webシステム学内コンペで銀賞を受賞しました。',
        },
      ],
    },
    Icon: Boxes,
  },
  {
    id: 'data-award',
    title: '学生データ分析AWARD 2025',
    eyebrow: '2026年3月7日-8日 / 準優勝',
    summary:
      '東京・六本木での1泊2日合宿型コンテストに参加。初対面の3人チームで「豊島区の2040年問題」に取り組み、課題整理から提案発表まで短時間でまとめました。',
    role:
      '資料とオープンデータを読み込み、論点整理、解決策の方向性、発表ストーリーの組み立てに参加。限られた時間で分析結果を伝わる提案へ変換しました。',
    evidence: ['初対面チーム', '社会課題分析', '短期提案', '発表ストーリー'],
    stack: ['Data Analysis', 'Open Data', 'Presentation', 'Problem Framing'],
    link: {
      href: 'https://techplay.jp/column/2101',
      label: 'インタビュー記事を見る',
    },
    detail: {
      lead:
        '東京・六本木で行われた1泊2日の合宿型コンテストです。初対面の3人チームで豊島区の2040年問題に取り組み、短時間で課題整理、分析、提案発表まで進めました。',
      facts: [
        { label: '結果', value: '準優勝' },
        { label: '期間', value: '2026年3月7日-8日' },
        { label: '体制', value: '初対面の3人チーム' },
        { label: 'テーマ', value: '豊島区の2040年問題' },
      ],
      sections: [
        {
          eyebrow: 'Overview',
          title: '短時間で社会課題を提案に変える',
          body:
            '資料とオープンデータを読み込み、限られた時間の中で論点を整理しました。分析結果をそのまま並べるのではなく、提案として伝わる形にすることが重要でした。',
        },
        {
          eyebrow: 'Role',
          title: '論点整理と発表ストーリーに参加',
          body:
            '資料の読み込み、オープンデータの確認、解決策の方向性、発表ストーリーの組み立てに参加しました。初対面チームだったため、考えていることを短く共有しながら進める必要がありました。',
          points: ['資料・オープンデータの読み込み', '課題の論点整理', '解決策の方向性づけ', '発表ストーリーの組み立て'],
        },
        {
          eyebrow: 'Result',
          title: '準優勝として評価される',
          body:
            '豊島区の2040年問題に対して、分析から提案発表までを短時間でまとめ、学生データ分析AWARD 2025で準優勝しました。',
        },
      ],
    },
    Icon: BarChart3,
  },
];

export const awardItems: AwardItem[] = [
  {
    date: '2026.05.30-31',
    contest: 'テラッカソン10th / kakeruXテーマ',
    prize: '個人賞',
    project: 'Tea Bridge',
    note: 'チームの発表内容を伝えるWebサイトを制作。システム担当として、画面構成と実装を担いました。',
  },
  {
    date: '2026.05.30-31',
    contest: 'テラッカソン10th / kakeruXテーマ',
    prize: 'チーム賞',
    project: 'Tea Bridge / T3',
    note: 'T3の発表内容を伝えるWebサイトを制作。農家ストーリー、品質指標、サンプル依頼、商談・農園ツアーの画面を作りました。',
  },
  {
    date: '2026.03.16',
    contest: 'Webシステム学内コンペ',
    prize: '銀賞',
    project: 'Hoppy',
    note: '趣味道具レンタル型マーケットプレイスとして、コミュニティ、Q&A、サポートまで含めたWeb体験を制作。',
  },
  {
    date: '2026.03.10',
    contest: 'HAL EVENT WEEK',
    prize: '金賞',
    project: 'VCL / Virtual Chemistry Lab',
    note: 'Joy-Con操作と3D表現を組み合わせ、化学実験を安全に体験できる学習システムを制作。',
  },
  {
    date: '2026.03.07-08',
    contest: '学生データ分析AWARD 2025',
    prize: '準優勝',
    project: '豊島区の2040年問題',
    note: '1泊2日の合宿型コンテストで、初対面チームとして課題整理、オープンデータ分析、提案発表に取り組みました。',
  },
  {
    date: '2025.10.15',
    contest: 'プロトタイプ開発',
    prize: '銅賞',
    project: 'VCL プロトタイプ',
    note: 'VCLの初期プロトタイプとして、化学実験の流れを検証できる画面と導線を制作しました。',
  },
  {
    date: '2025.03.10',
    contest: 'HAL EVENT WEEK',
    prize: '技術力賞',
    project: 'Halter',
    note: 'Tinderのスワイプ体験を参考にした作品。選択の軽さと画面遷移を、Webの操作体験として検証しました。',
  },
  {
    date: '2024.10.07',
    contest: 'アーティストサイトデザイン学内コンペ',
    prize: '独創力賞',
    project: 'アーティストサイトデザイン',
    note: '好きなアーティストを題材に、世界観と導線を設計。公開版では権利配慮のため、本人写真や公式素材は使用しません。',
  },
];

export const strengths = [
  {
    title: '使う人の迷いから考える',
    body:
      'VCLでは、安全に実験を体験できること、Hoppyでは趣味を始める前の不安を減らすことを重視しました。技術名より先に、誰のどんな負担を下げるのかを整理します。',
    Icon: MessageSquareHeart,
  },
  {
    title: 'チームの動きを整える',
    body:
      'リーダーとして、役割分担や実装方針を一方的に決めず、困っている点や不安な点を確認しながら進めました。相談しやすい空気が、手戻りの少ない制作につながると考えています。',
    Icon: Users,
  },
  {
    title: '伝え方を成果に変える',
    body:
      'コールセンターでは、お客様ごとに状況や不安点を確認し、説明の順番と言葉を変えることで日間ランキング1位を獲得しました。相手に合わせて伝える力を、開発でも大切にしています。',
    Icon: Headphones,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: '画面体験、コンポーネント分割、操作の分かりやすさを重視します。',
    items: ['React', 'TypeScript', 'HTML', 'CSS', 'Responsive UI'],
    Icon: Code2,
  },
  {
    title: 'Backend / API',
    description: '機能ごとの責務分割と、画面から使いやすいAPI設計に関心があります。',
    items: ['Node.js', 'Socket.IO', 'Python', 'Flask', 'Form Handling'],
    Icon: Network,
  },
  {
    title: 'Database / Design',
    description: '後から変更しにくい土台ほど、先に整理してから実装します。',
    items: ['DB設計', 'JOIN', 'Docs', 'Test Plan'],
    Icon: Database,
  },
];

export const contactNotes = [
  '2028年卒のWeb開発エンジニア職を志望しています。',
  'React / TypeScript / Node.jsを中心に、設計・レビュー・テストまで考えられる開発力を伸ばしています。',
];

export const profileLinks = {
  github: 'https://github.com/indo40722',
  email: '',
};

export const awardIcon = Trophy;
