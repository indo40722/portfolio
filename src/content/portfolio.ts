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

export type ProjectCategory = 'all' | 'web' | 'team' | 'data';

export type Project = {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  eyebrow: string;
  summary: string;
  role: string;
  evidence: string[];
  stack: string[];
  image?: {
    src: string;
    alt: string;
  };
  link?: {
    href: string;
    label: string;
  };
  accent: 'teal' | 'amber' | 'red';
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

export const profile = {
  name: 'Akihiro',
  romanName: 'Web Developer Student',
  school: 'HAL大阪 高度情報学科 WEB開発エンジニア専攻',
  graduation: '2028年3月 卒業見込み',
  headline: 'ユーザーの困りごとを、動く仕組みに変えるWebエンジニア志望。',
  headlineLines: ['ユーザーの困りごとを、', '動く仕組みに変える', 'Webエンジニア志望。'],
  introduction:
    'チーム開発では、使う人の迷いや不安を見つけ、画面体験・機能設計・進行管理へ落とし込むことを大切にしています。VCLでは体験型の学習システム、Hoppyでは趣味道具の貸し借りを支えるWebサービスを制作しました。',
};

export const navigationItems = [
  { label: 'Works', href: '#works' },
  { label: 'Awards', href: '#awards' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
];

export const metrics = [
  { value: '金賞', label: 'VCL 学内コンテスト' },
  { value: '準優勝', label: '学生データ分析AWARD 2025' },
  { value: '1044h', label: 'Hoppy チーム合計開発時間' },
  { value: '1位', label: 'コールセンター日間ランキング' },
];

export const projectFilters: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Team', value: 'team' },
  { label: 'Data', value: 'data' },
];

export const featuredProjects: Project[] = [
  {
    id: 'vcl',
    title: 'VCL / Virtual Chemistry Lab',
    category: 'team',
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
    },
    accent: 'teal',
    Icon: FlaskConical,
  },
  {
    id: 'hoppy',
    title: 'Hoppy',
    category: 'web',
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
    },
    accent: 'amber',
    Icon: Boxes,
  },
  {
    id: 'data-award',
    title: '学生データ分析AWARD 2025',
    category: 'data',
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
    accent: 'red',
    Icon: BarChart3,
  },
];

export const awardItems: AwardItem[] = [
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
    date: '2025.10.15',
    contest: 'プロトタイプ開発',
    prize: '銅賞',
    project: 'プロトタイプ制作',
    note: '短期間で検証できる画面と導線へ落とし込み、アイデアを動く形に近づける制作に取り組みました。',
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
    items: ['DB設計', 'Table Definition', 'JOIN', 'Docs', 'Test Plan'],
    Icon: Database,
  },
];

export const timelineItems = [
  {
    year: '2024',
    title: 'HAL大阪 入学',
    body: '高度情報学科 WEB開発エンジニア専攻で、Webアプリケーション開発を学び始めました。',
  },
  {
    year: '2025',
    title: 'HalterでHAL EVENT WEEK 技術力賞',
    body: 'Tinderのスワイプ体験を参考に、短時間で判断できるUIと画面遷移を試しました。',
  },
  {
    year: '2026',
    title: 'VCLでHAL EVENT WEEK 金賞',
    body: '4人チームの代表として、Joy-Conと3D表現を使った体験型学習システムを制作しました。',
  },
  {
    year: '2025-2026',
    title: 'Hoppyを7か月で制作',
    body: '趣味道具の貸し借りを支えるWebサービスで、コミュニティとサポート領域を担当しました。',
  },
  {
    year: '2026',
    title: '学生データ分析AWARD 準優勝',
    body: '初対面チームで社会課題を分析し、短時間で提案資料と発表へ落とし込みました。',
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
