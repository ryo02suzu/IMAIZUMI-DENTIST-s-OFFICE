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
  price?: { label: string; amount: string; note?: string }[]
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
    slug: "implant",
    title: "インプラント",
    subtitle: "自分の歯に近い感覚で噛める、失った歯の再建",
    tag: "ご自身の歯のように",
    color: "#7eb4d2",
    intro:
      "インプラントは、顎の骨に人工歯根を埋め込み、その上に人工の歯を装着する治療です。入れ歯のようにずれたり外れたりせず、自分の歯に近い感覚で噛めるのが最大の特長です。",
    features: [
      { title: "天然歯に近い噛み心地", body: "骨に固定されるため、硬いものでも自分の歯と同じようにしっかり噛めます。" },
      { title: "隣の歯を削らない", body: "ブリッジと違い、隣の健康な歯に負担をかけません。" },
      { title: "見た目が自然", body: "セラミックの人工歯を使用するため、周りの歯と馴染んだ美しい仕上がりになります。" },
    ],
    steps: [
      { num: "01", title: "精密検査・診断", body: "レントゲンやCT撮影で骨の状態を確認し、治療計画を立てます。" },
      { num: "02", title: "インプラント埋入手術", body: "局所麻酔下で顎骨に人工歯根を埋め込みます（約1〜2時間）。" },
      { num: "03", title: "骨との結合期間", body: "インプラントが骨と結合するまで2〜6ヶ月程度待機します。" },
      { num: "04", title: "人工歯の装着", body: "結合確認後、上部構造（人工歯）を装着して完成です。" },
    ],
    price: [
      { label: "インプラント（1本）", amount: "300,000円〜", note: "検査費・手術費・上部構造費を含む。詳しくはご相談ください。" },
    ],
    faq: [
      { q: "手術は怖くないですか？", a: "局所麻酔を使用するため、治療中の痛みはほとんどありません。術後の痛みも鎮痛剤でコントロールできます。" },
      { q: "インプラントは何年持ちますか？", a: "適切なケアと定期メンテナンスを続けることで、10〜20年以上使用できる方も多くいます。" },
    ],
  },
  {
    slug: "non-clasp",
    title: "ノンクラスプデンチャー",
    subtitle: "金属バネなし、見た目も装着感も自然な入れ歯",
    tag: "部分入れ歯",
    color: "#7eb4d2",
    intro:
      "ノンクラスプデンチャーは、従来の入れ歯の「金属のバネ（クラスプ）」をなくした入れ歯です。目立たず、弾力性のある素材で作られているため、見た目が自然で着け心地も快適です。",
    features: [
      { title: "金属バネが見えない", body: "笑ったときにバネが見えないため、見た目が気になる方に最適です。" },
      { title: "やさしい装着感", body: "柔軟性のある素材がお口の粘膜にフィットし、違和感が少ないです。" },
      { title: "金属アレルギーの方にも安心", body: "金属を使用していないため、金属アレルギーのある方でも安心して使えます。" },
    ],
    steps: [
      { num: "01", title: "型取り・診断", body: "お口の状態に合わせた型取りを行い、最適な入れ歯を設計します。" },
      { num: "02", title: "試適・調整", body: "仮の入れ歯を装着して、噛み合わせや装着感を確認します。" },
      { num: "03", title: "完成・装着", body: "完成したノンクラスプデンチャーをお口に装着します。" },
      { num: "04", title: "アフターケア", body: "使用感に合わせて細部を調整し、快適に使い続けられるようサポートします。" },
    ],
    price: [
      { label: "ノンクラスプデンチャー", amount: "応相談", note: "部位・歯数により異なります。詳しくはご相談ください。" },
    ],
    faq: [
      { q: "保険は使えますか？", a: "ノンクラスプデンチャーは自費診療になります。" },
      { q: "普通の入れ歯との違いは？", a: "金属バネがなく見た目が自然なこと、弾力性があり装着感が良いことが主な違いです。" },
    ],
  },
  {
    slug: "zirconia",
    title: "ジルコニア",
    subtitle: "人工ダイヤモンドの強度と天然歯のような白さ",
    tag: "人工ダイヤモンド",
    color: "#7eb4d2",
    intro:
      "ジルコニアは、人工ダイヤモンドとも呼ばれる非常に硬いセラミック素材を使った歯科材料です。強度が高く割れにくいため、銀歯の代わりとして人気があります。金属を使わないため、歯茎が黒ずむこともありません。",
    features: [
      { title: "優れた強度・耐久性", body: "金属並みの強度を持ち、奥歯など噛む力がかかる部位にも使用できます。" },
      { title: "白くて自然な見た目", body: "天然歯に近い色で、見た目が自然です。銀歯のように口を開けたときに目立ちません。" },
      { title: "金属アレルギー対応", body: "金属を一切使用しないため、アレルギーの心配がありません。" },
    ],
    steps: [
      { num: "01", title: "歯の形成・型取り", body: "セラミックを装着するために歯を少し削り、型を取ります。" },
      { num: "02", title: "仮歯の装着", body: "技工所で製作する間、仮歯をつけて過ごしていただきます。" },
      { num: "03", title: "ジルコニア装着", body: "完成したジルコニアをお口に合わせて調整・装着します。" },
      { num: "04", title: "定期メンテナンス", body: "定期的な検診でジルコニアの状態を確認します。" },
    ],
    price: [
      { label: "ジルコニアクラウン（1本）", amount: "80,000円〜", note: "部位や状態により異なります。" },
    ],
    faq: [
      { q: "銀歯をジルコニアに替えられますか？", a: "はい、既存の銀歯をジルコニアに変えることができます。ご相談ください。" },
      { q: "どのくらい持ちますか？", a: "適切なケアと定期メンテナンスで10年以上使用できる方が多くいます。" },
    ],
  },
  {
    slug: "repro",
    title: "リプロデンチャーシステム",
    subtitle: "噛みやすさにこだわった特殊入れ歯",
    tag: "噛みやすい入れ歯",
    color: "#7eb4d2",
    intro:
      "リプロデンチャーシステムは、顎の動きに合わせて噛み合わせを精密に再現した入れ歯です。従来の入れ歯よりも「噛める」「安定している」と感じていただきやすく、食事の質を高めます。入れ歯の不安定さや噛めないお悩みにお応えします。",
    features: [
      { title: "精密な噛み合わせ設計", body: "顎の動きを記録・再現し、自然な噛み合わせを持つ入れ歯を作製します。" },
      { title: "安定感の向上", body: "精密に適合する設計により、入れ歯のズレや外れが起きにくくなります。" },
      { title: "食事の喜びを取り戻す", body: "しっかり噛めることで、食事の楽しさや栄養バランスの改善につながります。" },
    ],
    steps: [
      { num: "01", title: "詳細な診査・記録", body: "顎の動きや噛み合わせを精密に記録・分析します。" },
      { num: "02", title: "設計・製作", body: "記録したデータをもとに、精密な入れ歯を技工所で製作します。" },
      { num: "03", title: "試適・微調整", body: "仮の状態で装着し、噛み合わせや安定感を細かく確認・調整します。" },
      { num: "04", title: "完成・フォローアップ", body: "完成後も継続的にメンテナンスを行い、快適な状態を保ちます。" },
    ],
    price: [
      { label: "リプロデンチャーシステム", amount: "応相談", note: "歯数・範囲により異なります。まずはご相談ください。" },
    ],
    faq: [
      { q: "今使っている入れ歯から替えられますか？", a: "はい、既存の入れ歯からリプロデンチャーシステムへの移行が可能です。" },
      { q: "保険は使えますか？", a: "自費診療になります。詳しくは診察時にご説明します。" },
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
                    {t.price.map((p, i) => (
                      <tr key={i} className="border-t border-[#e0eff6]">
                        <td className="py-4 px-5">
                          <p className="font-medium text-[#4a4a4a]">{p.label}</p>
                          {p.note && <p className="text-xs text-[#999] mt-1">{p.note}</p>}
                        </td>
                        <td className="py-4 px-5 text-right font-bold text-[#7eb4d2] whitespace-nowrap">{p.amount}</td>
                      </tr>
                    ))}
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
