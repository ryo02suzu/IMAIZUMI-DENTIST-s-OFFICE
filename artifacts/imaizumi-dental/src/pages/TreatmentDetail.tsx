import { useParams } from "wouter"
import { motion } from "framer-motion"
import { ChevronRight, CheckCircle, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental"

type Treatment = {
  slug: string
  title: string
  subtitle: string
  tag: string
  color: string
  intro: string
  features: { title: string; body: string }[]
  steps: { num: string; title: string; body: string }[]
  price?: { label: string; amount?: string; note?: string; isHeader?: boolean }[]
  faq?: { q: string; a: string }[]
}

const treatments: Treatment[] = [
  {
    slug: "general",
    title: "一般歯科",
    subtitle: "むし歯の治療から歯の痛みまで幅広く対応",
    tag: "歯が痛い・しみる",
    color: "#7eb4d2",
    intro:
      "むし歯・歯周病・歯の痛みなど、歯にまつわるお悩みを幅広く診療します。症状が軽いうちに治療することで、歯を長く守ることができます。「ちょっと気になる」段階でもお気軽にご相談ください。",
    features: [
      { title: "丁寧な検査・説明", body: "レントゲンやデジタル機器を使った正確な診断を行い、治療内容をわかりやすくご説明します。" },
      { title: "痛みの少ない治療", body: "表面麻酔や細い針の注射など、できるだけ痛みを抑えた治療を心がけています。" },
      { title: "再発防止のサポート", body: "治療後もセルフケアの指導や定期検診で、むし歯の再発を予防します。" },
    ],
    steps: [
      { num: "01", title: "初診・検査", body: "お口の状態をレントゲンや視診でしっかり確認します。" },
      { num: "02", title: "診断・ご説明", body: "治療方針・期間・費用をわかりやすくご説明します。" },
      { num: "03", title: "治療開始", body: "麻酔を使いながら痛みを抑えた治療を行います。" },
      { num: "04", title: "定期メンテナンス", body: "治療後も3〜6ヶ月ごとに通院し、再発を防ぎます。" },
    ],
    faq: [
      { q: "保険で治療できますか？", a: "むし歯治療・抜歯・詰め物など多くの処置が保険適用です。自費治療の場合は事前にご説明します。" },
      { q: "歯が痛くなってからでも大丈夫ですか？", a: "もちろんです。急患も可能な限り対応いたします。お電話でご相談ください。" },
    ],
  },
  {
    slug: "pediatric",
    title: "小児歯科",
    subtitle: "お子さまのむし歯予防・治療を専門にサポート",
    tag: "子供の歯を守りたい",
    color: "#7eb4d2",
    intro:
      "乳歯のむし歯治療から永久歯への生え変わり、フッ素塗布やシーラントによる予防まで、お子さまのお口の健康を幅広くサポートします。歯医者が苦手なお子さまも、スタッフが笑顔でお迎えします。",
    features: [
      { title: "子ども向けのやさしい対応", body: "怖くない雰囲気づくりを大切にし、お子さまのペースで治療を進めます。" },
      { title: "フッ素塗布・シーラント", body: "むし歯になりやすい溝を塞いだり、フッ素でエナメル質を強化します。" },
      { title: "正しいブラッシング指導", body: "お子さまと保護者の方へ、年齢に合った歯みがきの方法をお伝えします。" },
    ],
    steps: [
      { num: "01", title: "慣れることから始める", body: "まずはチェアに座るだけでOK。少しずつ歯医者に慣れてもらいます。" },
      { num: "02", title: "検査・ブラッシング指導", body: "むし歯のチェックをしながら正しいケアを一緒に学びます。" },
      { num: "03", title: "治療・予防処置", body: "むし歯があれば治療し、フッ素塗布・シーラントで予防します。" },
      { num: "04", title: "定期検診", body: "3〜6ヶ月ごとに通院し、歯の成長を見守ります。" },
    ],
    faq: [
      { q: "何歳から連れて行けばよいですか？", a: "乳歯が生え始めたら（1歳前後〜）いつでも歓迎です。早めに慣れることが大切です。" },
      { q: "子どもが怖がって泣いてしまいます", a: "まずはお口を見せてもらうだけからスタートします。無理に治療はしませんのでご安心ください。" },
    ],
  },
  {
    slug: "preventive",
    title: "予防歯科",
    subtitle: "むし歯・歯周病にならない口腔環境づくり",
    tag: "虫歯予防したい",
    color: "#7eb4d2",
    intro:
      "「治療するより、ならないほうがいい」という考えのもと、予防歯科に力を入れています。定期的なクリーニングや歯石除去で、むし歯・歯周病を未然に防ぎましょう。",
    features: [
      { title: "プロフェッショナルクリーニング", body: "歯科衛生士による専門的なクリーニングで、日頃のブラッシングでは取れない汚れを除去します。" },
      { title: "歯周病のリスク管理", body: "歯石・歯垢をこまめに除去することで、歯周病の進行を予防します。" },
      { title: "セルフケア指導", body: "ご自宅でのブラッシング方法・フロスの使い方を丁寧にアドバイスします。" },
    ],
    steps: [
      { num: "01", title: "口腔内チェック", body: "むし歯・歯周病の状態を確認し、リスクを把握します。" },
      { num: "02", title: "歯石除去・クリーニング", body: "超音波スケーラーとハンドスケーラーで歯石を丁寧に取り除きます。" },
      { num: "03", title: "ポリッシング", body: "専用ペーストで歯の表面を磨き上げ、汚れが付きにくい状態にします。" },
      { num: "04", title: "定期メンテナンス", body: "3〜6ヶ月ごとに通院し、お口の健康を維持します。" },
    ],
    faq: [
      { q: "痛みはありますか？", a: "歯石除去は多少チクチクする感覚がありますが、強い痛みはほとんどありません。" },
      { q: "どのくらいの頻度で通えばよいですか？", a: "お口の状態により異なりますが、一般的に3〜6ヶ月に1回のペースをおすすめしています。" },
    ],
  },
  {
    slug: "denture",
    title: "入れ歯（義歯）",
    subtitle: "保険から自費まで、しっかり噛める入れ歯を",
    tag: "入れ歯が合わない",
    color: "#7eb4d2",
    intro:
      "「入れ歯が合わない」「食事中に外れそうで不安」といったお悩みにお応えします。保険の入れ歯から、より快適な自費の入れ歯まで、患者さんに合った最適な義歯をご提案します。",
    features: [
      { title: "精密な型取り・適合調整", body: "お口の形に合った精度の高い入れ歯を作製し、使い心地を丁寧に調整します。" },
      { title: "保険・自費どちらも対応", body: "費用・見た目・機能など、ご希望に応じて最適な入れ歯の種類をご提案します。" },
      { title: "アフターケアが充実", body: "入れ歯を長く快適に使えるよう、定期的な調整・修理に対応します。" },
    ],
    steps: [
      { num: "01", title: "診査・型取り", body: "お口の状態を確認し、精密な型取りを行います。" },
      { num: "02", title: "試適", body: "仮の入れ歯を装着し、かみ合わせや形を確認します。" },
      { num: "03", title: "完成・装着", body: "完成した入れ歯を装着し、細部を調整します。" },
      { num: "04", title: "調整・メンテナンス", body: "使用しながら気になる点があればいつでも調整します。" },
    ],
    price: [
      { label: "保険の入れ歯（部分）", amount: "保険適用", note: "窓口負担3割" },
      { label: "ノンクラスプデンチャー", amount: "応相談", note: "詳しくはノンクラスプデンチャーページへ" },
    ],
    faq: [
      { q: "今の入れ歯が合わなくなってきました", a: "お口の形は変化するため、定期的な調整や作り直しが必要です。お気軽にご相談ください。" },
      { q: "入れ歯の修理もできますか？", a: "はい、既存の入れ歯の修理・調整も承っております。" },
    ],
  },
  {
    slug: "aesthetic",
    title: "審美歯科",
    subtitle: "セラミック・ジルコニア・メタボンで、自然で美しい歯へ",
    tag: "銀歯を白くしたい",
    color: "#7eb4d2",
    intro:
      "審美歯科では、見た目と機能の両方にこだわった歯科治療を行います。銀歯を白くしたい・歯の色や形が気になる・金属アレルギーがある、といったお悩みにお応えします。素材はセラミック・ジルコニア・メタボンの3種類からご希望に合わせてご提案します。",
    features: [
      { title: "銀歯から白い歯へ", body: "保険の銀歯を白いセラミック系素材に替えることで、見た目が自然な口元に生まれ変わります。" },
      { title: "金属を使わない選択肢も", body: "オールセラミック・ジルコニアは金属不使用のため、金属アレルギーの方でも安心して使えます。" },
      { title: "ご希望に合わせて素材を選べる", body: "強度・審美性・費用のバランスでセラミック・ジルコニア・メタボンから最適な素材をご提案します。" },
    ],
    steps: [
      { num: "01", title: "カウンセリング・診査", body: "気になる部位・ご希望の仕上がりをうかがい、素材をご提案します。" },
      { num: "02", title: "歯の形成・型取り", body: "クラウン装着のために歯を整え、精密な型取りを行います。" },
      { num: "03", title: "仮歯の装着", body: "技工所で製作する間、仮歯をつけて過ごしていただきます（約1〜2週間）。" },
      { num: "04", title: "セラミック装着・完成", body: "完成したクラウンをお口に合わせて調整・装着します。" },
    ],
    price: [
      { label: "詰め物（インレー）", isHeader: true },
      { label: "ダイレクトボンディング", amount: "16,500円〜" },
      { label: "ハイブリッドセラミック", amount: "30,000円〜" },
      { label: "オールセラミック e.max（インレー）", amount: "40,000円〜" },
      { label: "ジルコニア（インレー）", amount: "40,000円〜" },
      { label: "被せ物（クラウン）", isHeader: true },
      { label: "フルジルコニア", amount: "40,000円〜" },
      { label: "オールセラミック e.max（クラウン）", amount: "50,000円〜" },
      { label: "メタルボンド", amount: "50,000円〜" },
      { label: "ラミネートベニア", amount: "100,000円〜" },
    ],
    faq: [
      { q: "銀歯をセラミックに替えられますか？", a: "はい、既存の銀歯をセラミック系素材に変えることができます。歯の状態を確認してからご提案します。" },
      { q: "セラミック・ジルコニア・メタボンの違いは？", a: "オールセラミックは透明感が高く前歯向き。ジルコニアは強度が高く奥歯にも対応。メタボンは金属土台にセラミックを焼き付けた素材で強度と審美性を兼ね備えます。" },
      { q: "どのくらい持ちますか？", a: "適切なケアと定期メンテナンスで10〜20年以上使用できる方も多くいます。" },
    ],
  },
  {
    slug: "oral-surgery",
    title: "口腔外科",
    subtitle: "親知らずの抜歯から外傷・口腔内のトラブルまで",
    tag: "親知らず・外科処置",
    color: "#7eb4d2",
    intro:
      "口腔外科では、親知らずの抜歯・嚢胞の摘出・口腔内の外傷処置など、外科的な治療を行います。「親知らずが痛い」「頬が腫れている」「口が開きにくい」といったお悩みはお気軽にご相談ください。",
    features: [
      { title: "親知らずの抜歯に対応", body: "難抜歯（横向き・埋まっている）も含め、安全に対応します。術後のケアもしっかりサポートします。" },
      { title: "口腔内の様々なトラブルに対処", body: "嚢胞・粘液嚢胞・口内炎など、口の中のあらゆる異常に対応します。" },
      { title: "外傷・緊急対応", body: "転倒などによる歯の脱臼・破折・口内の外傷にも対応いたします。" },
    ],
    steps: [
      { num: "01", title: "診査・レントゲン撮影", body: "状態をレントゲンで確認し、治療方針をご説明します。" },
      { num: "02", title: "術前準備・麻酔", body: "局所麻酔を行い、痛みを抑えた状態で処置に入ります。" },
      { num: "03", title: "外科処置", body: "抜歯・切除など必要な処置を丁寧に行います。" },
      { num: "04", title: "術後管理・抜糸", body: "処置後の経過を確認し、必要に応じて抜糸・消毒を行います。" },
    ],
    faq: [
      { q: "親知らずは必ず抜かないといけませんか？", a: "すべての親知らずが抜歯対象ではありません。位置・状態を確認してから最適な方針をご提案します。" },
      { q: "抜歯後の痛みはどのくらい続きますか？", a: "個人差がありますが、2〜3日程度が多いです。鎮痛剤を処方しますのでご安心ください。" },
    ],
  },
  {
    slug: "whitening",
    title: "ホワイトニング",
    subtitle: "歯を削らず、薬剤の力で歯を白く明るく",
    tag: "歯を白くしたい",
    color: "#7eb4d2",
    intro:
      "ホワイトニングは、歯を削らずに専用の薬剤を使って歯を白くする方法です。加齢や着色によるくすみを改善し、自然で明るい笑顔を取り戻すことができます。ホームホワイトニングとオフィスホワイトニングの2種類をご用意しています。",
    features: [
      { title: "歯を削らないやさしい方法", body: "エナメル質を傷つけず、薬剤の力だけで白くするため、歯への負担が少ないです。" },
      { title: "2種類から選べる", body: "ご自宅でゆっくり行うホームホワイトニングと、クリニックで短時間で効果を出すオフィスホワイトニングがあります。" },
      { title: "自然な白さ", body: "人工的に真っ白にするのではなく、自然な歯の白さを目指すホワイトニングを提供します。" },
    ],
    steps: [
      { num: "01", title: "カウンセリング・診査", body: "ご希望の白さや歯の状態を確認し、適切な方法をご提案します。" },
      { num: "02", title: "クリーニング", body: "ホワイトニング前に歯の表面の汚れを除去します。" },
      { num: "03", title: "ホワイトニング施術", body: "選んだ方法（ホーム or オフィス）に沿って施術を進めます。" },
      { num: "04", title: "効果確認・アフターケア", body: "仕上がりを確認し、色戻りを防ぐためのアドバイスをします。" },
    ],
    price: [
      { label: "オフィスホワイトニング（1回）", amount: "14,300円〜" },
      { label: "ホームホワイトニング（片顎）", amount: "16,500円〜", note: "マウスピース・薬剤セット含む" },
      { label: "ホームホワイトニング（上下）", amount: "20,000円〜", note: "マウスピース・薬剤セット含む" },
      { label: "ホーム＋オフィス完了コース", amount: "55,000円〜" },
    ],
    faq: [
      { q: "効果はどのくらい続きますか？", a: "個人差はありますが、ホームで半年〜1年程度、オフィスで3〜6ヶ月程度が目安です。定期的なメンテナンスで効果を維持できます。" },
      { q: "しみたり痛くなりますか？", a: "施術中や直後に一時的なしみを感じる場合がありますが、多くは数日で落ち着きます。" },
    ],
  },
  {
    slug: "home-visit",
    title: "訪問診療",
    subtitle: "ご自宅や施設へ、歯科医師がお伺いします",
    tag: "ご自宅で診療",
    color: "#7eb4d2",
    intro:
      "ご高齢・病気・障害などにより通院が困難な患者さまのご自宅や介護施設へ、歯科医師と歯科衛生士がお伺いして診療を行います。むし歯の治療・入れ歯の調整・口腔ケアなど、幅広い処置に対応しています。",
    features: [
      { title: "通院が難しい方も安心", body: "ご高齢・寝たきり・通院困難な患者さまが安心して歯科診療を受けられる環境を整えています。" },
      { title: "幅広い処置に対応", body: "むし歯治療・抜歯・入れ歯の調整・口腔ケアなど、外来と同様の診療を行います。" },
      { title: "介護スタッフとの連携", body: "ご家族や介護施設のスタッフと連携し、継続的なお口の健康管理をサポートします。" },
    ],
    steps: [
      { num: "01", title: "ご相談・事前確認", body: "まずはお電話でご相談ください。訪問エリアや対応内容を確認します。" },
      { num: "02", title: "初回訪問・診査", body: "担当の歯科医師・衛生士がご自宅や施設を訪問し、お口の状態を確認します。" },
      { num: "03", title: "治療・口腔ケア", body: "むし歯処置・入れ歯調整・クリーニングなど必要な処置を行います。" },
      { num: "04", title: "定期訪問", body: "継続的な定期訪問により、お口の健康を維持します。" },
    ],
    faq: [
      { q: "どのエリアまで訪問できますか？", a: "桐生市内およびその近郊を対象としています。詳しくはお電話でご確認ください。" },
      { q: "保険は使えますか？", a: "訪問歯科診療は保険適用となる場合があります。詳しくはご相談ください。" },
    ],
  },
]

export default function TreatmentDetail() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const t = treatments.find((x) => x.slug === slug)

  if (!t) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#7eb4d2] text-lg mb-4">ページが見つかりません</p>
            <a href="/#treatment" className="text-[#f5a623] underline">診療内容一覧へ戻る</a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />

      <main>
        {/* Breadcrumb */}
        <div className="bg-[#f0f8fb] py-3 border-b border-[#d1e8f0]">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-[#888]">
              <a href="/" className="hover:text-[#7eb4d2] transition-colors">ホーム</a>
              <ChevronRight className="h-3 w-3" />
              <a href="/#treatment" className="hover:text-[#7eb4d2] transition-colors">診療内容</a>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#7eb4d2]">{t.title}</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#e8f4f8] to-[#d1e8f0] py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-[#f5d56e] text-[#5a4a3a] text-xs px-3 py-1 rounded-full mb-4">
                {t.tag}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-[#7eb4d2] mb-4">{t.title}</h1>
              <p className="text-lg md:text-xl text-[#5a8ea8] font-medium">{t.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#4a4a4a] leading-loose text-base md:text-lg border-l-4 border-[#7eb4d2] pl-5"
            >
              {t.intro}
            </motion.p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-[#f8fbfc]">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-[#7eb4d2] text-sm tracking-widest mb-1">FEATURES</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#7eb4d2]">当院の{t.title}の特長</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-5">
              {t.features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-[#e0eff6]"
                >
                  <CheckCircle className="h-6 w-6 text-[#7eb4d2] mb-3" />
                  <p className="font-bold text-[#4a4a4a] mb-2">{f.title}</p>
                  <p className="text-sm text-[#666] leading-relaxed">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-[#7eb4d2] text-sm tracking-widest mb-1">FLOW</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#7eb4d2]">治療の流れ</h2>
            </motion.div>
            <div className="space-y-4">
              {t.steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5 items-start"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#7eb4d2] flex items-center justify-center text-white font-bold text-sm">
                    {s.num}
                  </div>
                  <div className="flex-1 bg-[#f8fbfc] rounded-xl p-4 border border-[#e0eff6]">
                    <p className="font-bold text-[#4a4a4a] mb-1">{s.title}</p>
                    <p className="text-sm text-[#666] leading-relaxed">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Price */}
        {t.price && (
          <section className="py-12 bg-[#f8fbfc]">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-[#7eb4d2] text-sm tracking-widest mb-1">PRICE</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#7eb4d2]">料金の目安</h2>
              </motion.div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-[#d1e8f0] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#7eb4d2] text-white">
                      <th className="py-3 px-5 text-left">治療内容</th>
                      <th className="py-3 px-5 text-right">料金</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.price.map((p, i) =>
                      p.isHeader ? (
                        <tr key={i} className="border-t border-[#e0eff6] bg-[#f0f8fb]">
                          <td colSpan={2} className="py-2 px-5 text-xs font-bold text-[#7eb4d2] tracking-widest uppercase">
                            {p.label}
                          </td>
                        </tr>
                      ) : (
                        <tr key={i} className="border-t border-[#e0eff6]">
                          <td className="py-4 px-5">
                            <p className="font-medium text-[#4a4a4a]">{p.label}</p>
                            {p.note && <p className="text-xs text-[#999] mt-1">{p.note}</p>}
                          </td>
                          <td className="py-4 px-5 text-right font-bold text-[#7eb4d2] whitespace-nowrap">{p.amount}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-[#999] mt-3">※料金はすべて税込です。状態によって異なる場合があります。</p>
            </div>
          </section>
        )}

        {/* FAQ */}
        {t.faq && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <p className="text-[#7eb4d2] text-sm tracking-widest mb-1">FAQ</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#7eb4d2]">よくある質問</h2>
              </motion.div>
              <div className="space-y-4">
                {t.faq.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-xl overflow-hidden border border-[#e0eff6]"
                  >
                    <div className="bg-[#7eb4d2]/10 px-5 py-4 flex gap-3 items-start">
                      <span className="text-[#7eb4d2] font-bold text-lg shrink-0">Q.</span>
                      <p className="text-[#4a4a4a] font-medium">{item.q}</p>
                    </div>
                    <div className="bg-white px-5 py-4 flex gap-3 items-start">
                      <span className="text-[#f5a623] font-bold text-lg shrink-0">A.</span>
                      <p className="text-[#666] leading-relaxed text-sm">{item.a}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-[#7eb4d2]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 text-center"
          >
            <p className="text-white/80 text-sm mb-2">ご不明な点はお気軽にご相談ください</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {t.title}についてご予約・お問い合わせ
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f5a623] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e09520] transition-colors shadow-lg"
              >
                WEB予約はこちら
              </a>
              <a
                href="/#treatment"
                className="bg-white text-[#7eb4d2] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#f0f8fb] transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-5 w-5" />
                診療内容一覧へ
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
