import { Navbar } from "@/components/layout/Navbar"
import { BOOKING_URL } from "@/config/booking"
import { Footer } from "@/components/layout/Footer"
import { Link } from "wouter"
import { ChevronRight, Check, Star } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"
import { useJsonLd, faqLd } from "@/lib/useJsonLd"

const plans = [
  {
    id: 1,
    name: "ライトプラン",
    subtitle: "基本の予防コース",
    monthly: "¥3,300",
    popular: false,
    color: "#7eb4d2",
    items: [
      "3ヶ月に1回のPMTC（専門的クリーニング）",
      "高濃度フッ素塗布",
      "歯科医師による検診",
      "ケア用品 10% OFF",
    ],
    catch: "無理なく続けたい方へ。保険診療の枠を超えた丁寧なクリーニングで、むし歯・歯周病の再発を徹底的に防ぎます。",
  },
  {
    id: 2,
    name: "スタンダードプラン",
    subtitle: "着色・口臭 徹底ケア",
    monthly: "¥5,500",
    popular: true,
    color: "#f5a623",
    items: [
      "2ヶ月に1回のPMTC＋エアフロー（着色除去）",
      "舌クリーニング・口臭ケア指導",
      "高濃度フッ素塗布",
      "歯科医師による検診",
      "ケア用品 20% OFF",
    ],
    catch: "コーヒーや紅茶を好む方、口臭が気になる方へ。常にツルツルの白い歯と清潔な息をキープしたい方に最適なプランです。",
  },
  {
    id: 3,
    name: "プレミアムプラン",
    subtitle: "審美・トータル美白コース",
    monthly: "¥8,800",
    popular: false,
    color: "#3d5f7a",
    items: [
      "毎月のPMTC＋エアフロー（着色除去）",
      "ホームホワイトニング薬剤（ジェル1本/月）",
      "ガムピーリング（歯茎の黒ずみ除去）年1回",
      "ケア用品 30% OFF",
    ],
    catch: "自分への投資として、最高レベルの清潔感と白さを手に入れたい方へ。毎月のメンテナンスとホワイトニングをセットにした特別コースです。",
  },
]

const faqs = [
  {
    q: "いつでも解約できますか？",
    a: "はい、最低継続期間はありません。いつでもお気軽に解約いただけます。解約ご希望の場合は次回来院時または電話にてお申し出ください。",
  },
  {
    q: "家族で入る場合は割引がありますか？",
    a: "はい、家族割引をご用意しています。同一世帯の2人目以降は月額より500円引きにてご利用いただけます。ご家族みなさまでぜひご活用ください。",
  },
  {
    q: "途中でプランを変更できますか？",
    a: "もちろん可能です。ライフスタイルや口内の状態に合わせて、いつでもプランのアップグレード・ダウングレードができます。",
  },
  {
    q: "初回はどのような流れになりますか？",
    a: "まず口内の状態を診査し、最適なプランをご提案します。その後ご希望のプランに登録いただき、クリーニングを行います。所要時間は初回約60〜90分です。",
  },
  {
    q: "子供も入れますか？",
    a: "はい、お子様のプランもご用意しています。お子様の年齢・口内の状態に応じてご案内しますので、まずはご相談ください。",
  },
]

export default function SubscriptionPage() {
  useSEO({
    title: "桐生市の歯のクリーニング定期コース",
    description: "桐生市の歯医者「今泉歯科医院」のクリーニング定期コース（月額¥3,300〜）。PMTC・エアフロー・フッ素塗布など専門クリーニングで健康な歯を維持。いつでも解約可能・家族割あり。",
    canonicalPath: "/subscription",
  })
  useJsonLd(faqLd(faqs))

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-[#f0f8fc] py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-1 text-sm text-[#7eb4d2]">
              <Link href="/" className="hover:underline">ホーム</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/dental-esthetics" className="hover:underline">お口のエステ</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[#4a4a4a]">クリーニング定期コース</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#e8f4f9] to-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block bg-[#f5a623] text-white text-xs px-3 py-1 rounded-full mb-4">
              お口のエステ
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3d5f7a] mb-4">
              クリーニング定期コース
            </h1>
            <p className="text-[#7eb4d2] text-lg font-medium mb-6">
              月額¥3,300〜 ｜ いつでも解約OK ｜ 家族割あり
            </p>
            <p className="text-[#4a4a4a] max-w-2xl mx-auto leading-relaxed">
              歯科医院でのクリーニングを「続けやすい月額制」でご提供します。プロの手で毎回リセットされる清潔なお口が、健康と自信の土台になります。
            </p>
          </div>
        </section>

        {/* Why Subscription */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">WHY</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-10 text-center">
              定期コースが選ばれる理由
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "いつでも解約OK",
                  body: "最低継続期間はありません。プレッシャーなく始められ、ライフスタイルの変化にも対応できます。",
                },
                {
                  title: "家族みんなで割引",
                  body: "2人目以降は月額500円引きの家族割を適用。ご家族全員の歯の健康を、まとめてサポートします。",
                },
                {
                  title: "保険診療を超えたケア",
                  body: "エアフローや舌クリーニングなど、保険では受けられない専門的な処置を毎回受けられます。",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#f0f8fc] rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-[#7eb4d2] flex items-center justify-center mb-4">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-[#3d5f7a] mb-2">{item.title}</h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">PLANS</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-3 text-center">
              料金プラン
            </h2>
            <p className="text-center text-sm text-[#4a4a4a] mb-10">すべて税込 ｜ 家族2人目以降 月額-¥500</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-2xl shadow-md overflow-hidden flex flex-col ${plan.popular ? "ring-2 ring-[#f5a623] shadow-lg" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#f5a623] text-white text-xs font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
                      <Star className="h-3 w-3 fill-white" />
                      一番人気
                    </div>
                  )}
                  <div className="p-6 border-b border-gray-100">
                    <p className="text-xs text-[#7eb4d2] font-semibold mb-1">{plan.subtitle}</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: plan.color }}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-[#3d5f7a]">{plan.monthly}</span>
                      <span className="text-sm text-[#4a4a4a]">/ 月（税込）</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[#4a4a4a]">
                          <Check className="h-4 w-4 text-[#7eb4d2] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-[#6b7280] leading-relaxed border-t border-gray-100 pt-4">{plan.catch}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to start */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">FLOW</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-10 text-center">
              ご登録の流れ
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { num: "01", title: "ご予約", body: "お電話またはウェブ予約より「定期コース体験」としてご予約ください。" },
                { num: "02", title: "口内診査・カウンセリング", body: "現在の口内状態を確認し、最適なプランをご提案します。" },
                { num: "03", title: "プラン登録", body: "ご希望のプランに登録いただき、初回クリーニングを行います（初回約60〜90分）。" },
                { num: "04", title: "定期来院", body: "プランの頻度に合わせてお知らせします。次回予約をその場でお取りいただけます。" },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start bg-[#f8fbfd] rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-[#7eb4d2] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">{step.num}</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#3d5f7a] mb-1">{step.title}</p>
                    <p className="text-sm text-[#4a4a4a]">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-10 text-center">よくあるご質問</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="font-bold text-[#3d5f7a] mb-2">Q. {faq.q}</p>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#3d5f7a] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは一度、ご相談ください</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              「どのプランが合うかわからない」という方も、診察時にゆっくりご説明します。お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-[#f5a623] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e0961c] transition-colors">WEB予約</a>
              <a
                href="tel:0277549893"
                className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                0277-54-9893
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
