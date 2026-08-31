import {
  BarChart3,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  FlaskConical,
  Handshake,
  Headphones,
  MessageSquareHeart,
  Network,
  Trophy,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import hoppyCommunityImage from '../assets/hoppy-community.png';
import hoppyListingConfirmImage from '../assets/hoppy-listing-confirm.png';
import hoppyOverviewImage from '../assets/hoppy-overview.png';
import hoppyQaThreadImage from '../assets/hoppy-qa-thread.png';
import hoppyUserProfileImage from '../assets/hoppy-user-profile.png';
import t3OperationsImage from '../assets/t3-operations.png';
import t3TeaBridgeImage from '../assets/t3-tea-bridge.png';
import vclApriltagControllerSpecImage from '../assets/vcl-apriltag-controller-spec.jpg';
import vclApriltagPrintedBackImage from '../assets/vcl-apriltag-printed-back.jpg';
import vclApriltagPrintedFrontImage from '../assets/vcl-apriltag-printed-front.jpg';
import vclConnectionGuideImage from '../assets/vcl-connection-guide.png';
import vclDashboardImage from '../assets/vcl-dashboard.png';
import vclExperienceImage from '../assets/vcl-experience-ui.png';
import vclHandposeColorControllerFrontImage from '../assets/vcl-handpose-color-controller-front.jpg';
import vclHandposeControllerGripImage from '../assets/vcl-handpose-controller-grip.jpg';
import vclHandposeGestureIterationImage from '../assets/vcl-handpose-gesture-iteration.jpg';
import vclLabFreeModeImage from '../assets/vcl-lab-free-mode.png';
import vclMarkerBandSpecImage from '../assets/vcl-marker-band-spec.jpg';
import vclMicrocontrollerPrototypeImage from '../assets/vcl-microcontroller-prototype.jpg';
import vclMultimarkerBandProposalImage from '../assets/vcl-multimarker-band-proposal.jpg';
import vclSelectModeImage from '../assets/vcl-select-mode.png';
import vclTrophyImage from '../assets/vcl-trophy.png';

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
  media?: ProjectImage[];
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

export type CertificationItem = {
  name: string;
  status: string;
};

export type CertificationGroup = {
  title: string;
  description: string;
  items: CertificationItem[];
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
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
];

export const metrics = [
  { value: '金賞', label: 'VCL 学内コンテスト' },
  { value: 'チーム1位', label: 'メディアリンク3daysインターン' },
  { value: '準優勝', label: '学生データ分析AWARD 2025' },
  { value: '1044h', label: 'Hoppy チーム合計開発時間' },
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
    evidence: ['入力方式の試作検証', 'Joy-Con入力', '3D実験表現', '展示投票150名弱'],
    stack: ['Node.js', 'Socket.IO', 'Three.js', 'Joy-Con', 'MediaPipe検証', 'AprilTag検証', 'Team Lead'],
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
      {
        src: vclDashboardImage,
        alt: 'VCLのモード選択画面。チュートリアル、フリーモード、セレクトモードを選べる',
        caption: '学習の入り口として、チュートリアル、フリーモード、セレクトモードを選ぶ画面',
      },
      {
        src: vclSelectModeImage,
        alt: 'VCLの実験ライブラリ。実験カードから行いたい化学実験を選ぶ画面',
        caption: '実験ライブラリから、難易度や学習内容を見て実験を選ぶ画面',
      },
      {
        src: vclLabFreeModeImage,
        alt: 'VCLの3D実験画面。試験管とフラスコを表示し、実験の動きを確認できる',
        caption: '試験管とフラスコを3Dで表示し、Joy-Con操作と実験進行をつなぐ画面',
      },
      {
        src: vclTrophyImage,
        alt: 'VCLのトロフィー画面。実験達成状況と学習進捗を一覧で確認できる',
        caption: '実験の達成状況を残し、学習の進み具合を確認できるトロフィー画面',
      },
      {
        src: vclConnectionGuideImage,
        alt: 'VCLのJoy-Con接続ガイド。ペアリング、PC接続、動作確認の手順を示す',
        caption: 'Joy-Conの接続、動作確認、操作開始までの不安を減らすガイド画面',
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
        { label: '展示', value: '150名弱が投票・評価' },
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
          title: 'MediaPipe、AprilTag、マイコン案まで試す',
          body:
            '最初からJoy-Conだけに決めていたわけではありません。HAL内にAI学科がある環境もあり、MediaPipeで手のランドマークを取る案、AprilTagやカラーマーカーを使う案、マイコンとジャイロセンサーを使う案を検討しました。AprilTagはAIで検討図を起こし、3Dプリントした試作物でも確認しました。認識の安定性、展示での説明しやすさ、制作期間を比べ、最終的にJoy-Conを採用しました。',
          points: ['MediaPipeによる手認識案の検討', 'AprilTagマーカーのAI検討図と3Dプリント試作', 'マイコン・センサー案の検討', '展示で説明しやすい入力方式の比較'],
          media: [
            {
              src: vclHandposeControllerGripImage,
              alt: '手のランドマークでコントローラーの握り方を認識する検討図',
              caption: 'MediaPipeで手のランドマークを取り、握り方や傾きを入力に使う案を検討',
            },
            {
              src: vclHandposeColorControllerFrontImage,
              alt: '手のランドマークと色マーカーでコントローラーを認識する検討図',
              caption: '手認識と色マーカーを組み合わせる入力方式の検討イメージ',
            },
            {
              src: vclHandposeGestureIterationImage,
              alt: '手のランドマークから握り動作を読み取る検討イメージ',
              caption: '握り動作をランドマークの角度から読む案も試しました',
            },
            {
              src: vclMarkerBandSpecImage,
              alt: '試験管に貼るマルチマーカーバンドの寸法検討図',
              caption: '試験管の曲面でも見えるように、複数IDを帯状に配置する検討図',
            },
            {
              src: vclMultimarkerBandProposalImage,
              alt: '試験管用マルチマーカーバンドの仕組みとメリットをまとめた検討図',
              caption: '回転や歪みに強い認識方式として、マルチマーカーバンドを検討',
            },
            {
              src: vclApriltagControllerSpecImage,
              alt: 'AprilTagコントローラーの構造と制作方法の検討図',
              caption: 'AprilTagを3Dプリント部品に組み込み、磁石固定する構造を検討',
            },
            {
              src: vclApriltagPrintedFrontImage,
              alt: '3DプリントしたAprilTag試作物の表面',
              caption: 'AIで起こした構造案をもとに、3DプリントしたAprilTag試作物',
            },
            {
              src: vclApriltagPrintedBackImage,
              alt: '3DプリントしたAprilTag試作物の裏面',
              caption: '裏面の番号や固定方法も含め、展示で使えるか確認しました',
            },
            {
              src: vclMicrocontrollerPrototypeImage,
              alt: 'マイコンと配線を使った入力方式の試作',
              caption: 'マイコンとセンサーを使う入力方式も検討し、実装コストを比較',
            },
          ],
        },
        {
          eyebrow: 'Exhibition',
          title: '名刺で展示への導線も試す',
          body:
            '学内展示では、作品を見に来てもらう導線として名刺も配りました。大きな効果までは期待していませんでしたが、実際に名刺を見て展示まで来てくれた人がいて、作品の伝え方まで試せたのは収穫でした。150名弱の人に投票・評価してもらい、学内コンテストで最も良い評価を受けました。',
          points: ['学内で作品名刺を配布', '名刺を見て展示に来た人を確認', '150名弱が投票・評価', '学内コンテストで金賞'],
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
      '企画立案、発表資料作成、発表、コミュニティ機能とサポート機能の実装を担当。投稿、画像投稿、いいね、コメント、Q&A、フォロー、お問い合わせ、FAQ、利用ガイドを実装しました。',
    evidence: ['企画立案・発表', '開発期間7か月', 'チーム合計1044時間', '52テーブル'],
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
      {
        src: hoppyCommunityImage,
        alt: 'Hoppyのコミュニティ投稿画面。体験共有、画像投稿、いいね、コメントを確認できる',
        caption: '趣味の体験共有、画像投稿、いいね、コメントまで扱うコミュニティ画面',
      },
      {
        src: hoppyQaThreadImage,
        alt: 'HoppyのQ&A画面。質問、回答、ベストアンサー、コメント投稿を確認できる',
        caption: 'レンタル前の不安を質問と回答で解消するQ&A詳細画面',
      },
      {
        src: hoppyListingConfirmImage,
        alt: 'Hoppyの出品確認画面。商品画像、レンタル価格、購入価格、タグ、説明を確認できる',
        caption: '商品画像、価格、タグ、説明を確認してから出品できる登録確認画面',
      },
      {
        src: hoppyUserProfileImage,
        alt: 'Hoppyのユーザープロフィール画面。公開商品と公開中のコミュニティ投稿を確認できる',
        caption: '公開中の商品とコミュニティ投稿をまとめて見られるユーザープロフィール画面',
      },
    ],
    detail: {
      lead:
        '趣味道具を貸し借りできるWebサービスです。発表資料では、趣味を始めたい人が「何を買えばいいか分からない」「いきなり出費するのが怖い」と感じる場面を課題に置きました。商品レンタルに加えて、投稿、Q&A、フォロー、問い合わせ、FAQ、利用ガイドまで含めて、最初の一歩を支える体験を目指しました。',
      facts: [
        { label: '結果', value: 'Webシステム学内コンペ 銀賞' },
        { label: '体制', value: '4人チーム' },
        { label: '期間', value: '7か月' },
        { label: '開発時間', value: 'チーム合計1044時間' },
        { label: '担当', value: '企画立案・資料作成・発表・実装' },
      ],
      sections: [
        {
          eyebrow: 'Overview',
          title: '趣味を始める前の不安まで扱う',
          body:
            'カメラ、アウトドア用品、楽器などを貸し借りできるサービスとして制作しました。レンタル機能だけではなく、利用前に質問したり、体験投稿から雰囲気を知ったり、困った時にサポートへ進める導線も含めています。',
        },
        {
          eyebrow: 'Role',
          title: '企画立案から発表、実装まで担当',
          body:
            '趣味を始めたい人が最初に迷う点を整理し、チームで企画立案しました。発表資料の作成と発表も担当し、実装では投稿、画像投稿、いいね、コメント、Q&A、フォロー、お問い合わせ、FAQ、利用ガイドを担当しました。',
          points: ['企画立案', '発表資料作成・発表', '投稿・画像投稿', 'Q&A・フォロー', 'お問い合わせ・FAQ・利用ガイド'],
        },
        {
          eyebrow: 'Design',
          title: '投稿とQ&Aを商品導線につなげる',
          body:
            '発表資料では、経験者の投稿やアドバイスによって初心者が安心して趣味を始められることをHoppyの特徴としていました。実装では、商品、ユーザー、投稿、質問、回答、問い合わせが別々に見えすぎないように、画面ごとの責務とデータのつながりを整理しました。',
        },
        {
          eyebrow: 'Decision',
          title: 'レンタル後購入と本人確認も検討',
          body:
            '企画立案では、レンタルして気に入った道具をそのまま購入できる選択肢や、ユーザー間取引の不安を減らす本人確認も検討しました。自分が担当したコミュニティ、Q&A、サポート機能も、レンタル前後の不安を減らす流れの中に位置づけています。',
        },
        {
          eyebrow: 'Result',
          title: 'チーム合計1044時間の制作としてまとめる',
          body:
            '4人チームで7か月制作し、チーム合計開発時間は1044時間です。Webシステム学内コンペで銀賞を受賞しました。',
        },
      ],
    },
    link: {
      href: 'documents/hoppy-presentation.pdf',
      label: '発表資料を見る',
    },
    Icon: Boxes,
  },
  {
    id: 't3-tea-bridge',
    title: 'Tea Bridge / T3',
    eyebrow: 'テラッカソン10th 個人賞・チーム賞',
    summary:
      '1日目の個人発表後、採択案へ合流して制作したWebプロトタイプ。日本茶農家と海外の買い手をつなぐサービス案に対して、調査、営業候補リサーチ、商談台帳型の画面制作に取り組みました。',
    role:
      '自分の個人案ではない企画にも当事者意識を持って参加。中間業者や輸出手続き、競合サービスを調べ、Google Places APIは候補抽出の検証に活用。営業先候補は公開情報で確認する前提で整理し、Codexも使いながら画面構成と実装を進めました。',
    evidence: ['採択案へ合流', '個人賞・チーム賞', '候補抽出・公開情報確認', 'Codex活用'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Google Places API', 'Codex'],
    image: {
      src: t3OperationsImage,
      alt: 'Tea Bridge / T3の運用画面。抹茶の調達を試飲、品質評価、サンプル依頼、商談まで整理する画面',
      caption: '抹茶の調達を、試飲、品質評価、サンプル依頼、商談まで整理する運用画面',
    },
    gallery: [
      {
        src: t3OperationsImage,
        alt: 'Tea Bridge / T3の運用画面。抹茶の調達を試飲、品質評価、サンプル依頼、商談まで整理する画面',
        caption: '抹茶の調達を、試飲、品質評価、サンプル依頼、商談まで整理する運用画面',
      },
      {
        src: t3TeaBridgeImage,
        alt: 'Tea Bridge / T3の理念ページ。茶畑の写真を背景に、日本茶農家と海外の買い手をつなぐコンセプトを伝えている',
        caption: '日本茶農家と海外の買い手をつなぐコンセプトを伝える理念ページ',
      },
    ],
    detail: {
      lead:
        '1日目の個人発表後、テーマ内で採択されたTea Bridge案へ合流して制作したWebプロトタイプです。日本茶農家と海外のカフェ・食品ブランドをつなぐ仕入れ相談所として、試飲、品質評価、輸出書類、サンプル依頼、商談までを同じ画面で進められる形を目指しました。',
      facts: [
        { label: '結果', value: 'テラッカソン10th 個人賞・チーム賞' },
        { label: '期間', value: '2026年4月-5月' },
        { label: '担当', value: '調査・候補整理・Webプロトタイプ' },
        { label: '参加経緯', value: '個人発表後、採択案へ合流' },
        { label: '対象', value: '日本茶農家と海外の買い手' },
      ],
      sections: [
        {
          eyebrow: 'Background',
          title: '採択案に合流して当事者として進める',
          body:
            '1日目は各自が発表し、2日目以降はテーマごとに選ばれた案へ合流して制作しました。Tea Bridgeは自分の個人案ではありませんでしたが、合流後は自分ごととして調査と画面制作に入りました。その姿勢も評価され、個人賞を受賞しました。',
        },
        {
          eyebrow: 'Overview',
          title: '通販ではなく、商談前に整える場を作る',
          body:
            '抹茶を買う前に、用途、品質、認証、サンプル条件、農園の背景を確認できる場として設計しました。海外の買い手が商品一覧を見るだけで終わらず、比較、試飲、問い合わせ、商談へ進める導線を意識しています。',
        },
        {
          eyebrow: 'Research',
          title: '流通と輸出支援の前提を調べる',
          body:
            'お茶の流通に中間業者が多い理由、農家単体で輸出する難しさ、FDA対応や残留農薬基準などの実務ハードルを調べました。競合調査では、買い切り型の輸出ではなく、農家を支援する形に近いサービスを比較しました。',
          points: ['中間業者・共同工場の役割調査', '輸出手続きと規制の整理', '競合サービスの比較', '事業モデルの検討'],
        },
        {
          eyebrow: 'Data',
          title: '営業先候補を洗い出す',
          body:
            'Google Places APIは候補抽出の検証に使い、宇治市、宇治田原町、和束町周辺の茶農家や、カナダの日本茶・抹茶カフェを探す起点にしました。営業先として扱う情報は公式サイトなどの公開情報で再確認する前提で、Webサイトや連絡先の有無を整理しています。',
          points: ['国内茶農家候補の抽出', '海外抹茶カフェ候補の抽出', '公開情報での確認観点整理', '営業候補リサーチ'],
        },
        {
          eyebrow: 'Prototype',
          title: '商談に進むための画面へ落とし込む',
          body:
            'Webプロトタイプでは、商品一覧、商品詳細、Tea Bridgeの理念ページ、農園ツアー、お問い合わせ、運用画面を制作しました。サンプル依頼、品質評価、用途別の提案、本人確認や事業者審査など、実際の商談前後に必要な情報を画面上で扱えるようにしました。',
          points: ['商品一覧・詳細画面', 'Tea Bridge理念ページ', 'サンプル依頼・品質評価UI', '農園ツアー・お問い合わせ導線'],
        },
        {
          eyebrow: 'AI',
          title: 'Codexで実装の初速を上げる',
          body:
            'Webプロトタイプ制作ではCodexを使い、Next.jsの画面構成やUI実装の初速を上げました。チームの発表内容をどう画面に落とすか、どの機能を見せると商談の流れが伝わるかは、確認しながら調整しました。',
          points: ['Codexを使ったUI実装補助', 'Next.js画面の作成', '商談台帳UIへの落とし込み', '表示内容の確認と調整'],
        },
        {
          eyebrow: 'Result',
          title: '発表内容を動く形で伝える',
          body:
            '合流したチーム案を、調査資料とWebプロトタイプの両方で伝えられる状態にしました。テラッカソン10thのkakeruXテーマで、チーム賞を受賞。個人賞では、自分の案ではないプロジェクトにも当事者意識を持って本気で取り組んだ姿勢を評価されました。',
        },
      ],
    },
    Icon: Handshake,
  },
  {
    id: 'data-award',
    title: '学生データ分析AWARD 2025',
    eyebrow: '2026年3月7日-8日 / 準優勝',
    summary:
      '初対面の3人チームで「豊島区の2040年問題」に取り組みました。ChatGPT、Claude Code、NotebookLMなどを活用して資料とオープンデータを読み込み、防災リスクの可視化と地域コミュニティ形成を軸に提案。準優勝を受賞しました。',
    role:
      '生成AIで資料理解と仮説出しの初速を上げ、数字の根拠や提案の筋はチームで確認。論点整理、解決策の方向性、発表ストーリーの組み立てに参加しました。',
    evidence: ['生成AI活用', 'オープンデータ読解', '社会課題分析', '発表ストーリー'],
    stack: ['ChatGPT', 'Claude Code', 'NotebookLM', 'Open Data', 'Presentation'],
    link: {
      href: 'https://techplay.jp/column/2101',
      label: 'インタビュー記事を見る',
    },
    detail: {
      lead:
        '東京・六本木で行われた1泊2日の合宿型コンテストです。初対面の3人チームで豊島区の2040年問題に取り組み、生成AIも使いながら配布資料、行政資料、オープンデータを読み込み、防災と定住の課題を提案へまとめました。',
      facts: [
        { label: '結果', value: '準優勝' },
        { label: '期間', value: '2026年3月7日-8日' },
        { label: '体制', value: '初対面の3人チーム' },
        { label: 'テーマ', value: '豊島区の2040年問題' },
      ],
      sections: [
        {
          eyebrow: 'Overview',
          title: '資料理解の初速を上げ、根拠を確認する',
          body:
            '当日発表されたテーマに対して、配布資料、行政資料、オープンデータを読み込みました。ChatGPT、Claude Code、NotebookLMなどで資料理解と仮説出しを進めつつ、数字の根拠や提案として通る筋はチームで確認しました。',
        },
        {
          eyebrow: 'Role',
          title: '論点整理と発表ストーリーに参加',
          body:
            '大量の情報がある中で、使えそうな情報を短く共有しながら進めました。資料の読み込み、オープンデータの確認、解決策の方向性、発表ストーリーの組み立てに参加しました。',
          points: ['生成AIを使った資料理解', '資料・オープンデータの読み込み', '課題の論点整理', '発表ストーリーの組み立て'],
        },
        {
          eyebrow: 'Approach',
          title: '防災を仕組みとして残す提案へ',
          body:
            'チームとして、建物を強くするだけではなく、住民の入れ替わりが激しい都市でも防災知識が残る仕組みを考えました。防災情報のオンボーディング、集合住宅のリスクスコア公開、地域コミュニティ形成などを軸に提案しました。',
        },
        {
          eyebrow: 'Result',
          title: '準優勝として評価される',
          body:
            '豊島区の2040年問題に対して、分析から提案発表までを短時間でまとめ、学生データ分析AWARD 2025で準優勝しました。取り組みはTECH PLAYのインタビュー記事でも紹介されています。',
        },
      ],
    },
    Icon: BarChart3,
  },
];

export const awardItems: AwardItem[] = [
  {
    date: '2026.08.26-28',
    contest: 'メディアリンク株式会社 3daysインターンシップ内ハッカソン',
    prize: 'チーム1位',
    project: 'Voice × AI 音声要約アプリ',
    note: '3日間のチーム開発で、音声認識とAI APIを用いた音声要約アプリの企画、実装、発表に取り組み、チームで1位を獲得しました。',
  },
  {
    date: '2026.05.30-31',
    contest: 'テラッカソン10th / kakeruXテーマ',
    prize: '個人賞',
    project: 'Tea Bridge',
    note: '個人発表後に採択案へ合流。自分の個人案ではない企画にも当事者意識を持って取り組んだ姿勢を評価されました。',
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
    note: 'ChatGPT、Claude Code、NotebookLMなども活用し、初対面チームとして課題整理、オープンデータ分析、提案発表に取り組みました。',
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
    items: ['React', 'TypeScript', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive UI'],
    Icon: Code2,
  },
  {
    title: 'Backend / API',
    description: '機能ごとの責務分割と、画面から使いやすいAPI設計に関心があります。',
    items: ['Node.js', 'Socket.IO', 'Python', 'Flask', 'Form Handling', 'Google Places API'],
    Icon: Network,
  },
  {
    title: 'Database / Design',
    description: '後から変更しにくい土台ほど、先に整理してから実装します。',
    items: ['DB設計', 'JOIN', 'Docs', 'Test Plan'],
    Icon: Database,
  },
];

export const certificationGroups: CertificationGroup[] = [
  {
    title: 'Cloud / AI',
    description: 'クラウドと生成AIを、サービス名だけでなく概念から理解するために受験しました。',
    items: [
      { name: 'AWS Certified AI Practitioner', status: '合格' },
      { name: 'Google Cloud Digital Leader', status: '合格' },
      { name: 'AZ-900: Microsoft Azure Fundamentals', status: '合格' },
    ],
    Icon: BrainCircuit,
  },
  {
    title: 'Web / Design',
    description: '画面制作、情報設計、Webデザインの基礎を制作経験とつなげて確認しています。',
    items: [
      { name: 'ウェブデザイン技能検定 3級', status: '合格' },
      { name: 'Webデザイナー検定 エキスパート', status: '合格' },
      { name: 'Webデザイナー検定 ベーシック', status: '合格' },
      { name: 'J検 情報デザイン試験 上級', status: '合格' },
      { name: 'CGエンジニア検定 ベーシック', status: '合格' },
      { name: 'マルチメディア検定 エキスパート / ベーシック', status: '合格' },
    ],
    Icon: BadgeCheck,
  },
  {
    title: 'IT / System',
    description: '情報処理、システム設計、プログラミング基礎の学習記録として整理しています。',
    items: [
      { name: '基本情報技術者試験 科目A免除試験', status: '合格' },
      { name: 'Python3エンジニア認定基礎試験', status: '合格' },
      { name: 'J検 情報システム試験 プログラミングスキル', status: '合格' },
      { name: 'J検 情報システム試験 基本スキル', status: '合格' },
      { name: 'J検 情報システム試験 システムデザインスキル', status: '合格' },
    ],
    Icon: Code2,
  },
  {
    title: 'Business / Other',
    description: '発表、ビジネス基礎、現場対応の学習として、IT以外の講習も一部記載しています。',
    items: [
      { name: 'ビジネス能力検定ジョブパス 2級', status: '合格' },
      { name: 'プレゼン検定 準2級', status: '合格' },
      { name: '食品衛生責任者', status: '修了' },
      { name: '上級救命講習', status: '修了' },
    ],
    Icon: BriefcaseBusiness,
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
