import { Navbar } from "@/components/layout/Navbar"
import { BOOKING_URL } from "@/config/booking"
import { Footer } from "@/components/layout/Footer"
import { Link } from "wouter"
import { ChevronRight, Check } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"
import { useJsonLd, faqLd } from "@/lib/useJsonLd"

const causes = [
  { title: "歯周病・歯肉炎", body: "歯周ポケット内の細菌が硫化水素やメチルメルカプタンなどの揮発性硫黄化合物（VSC）を産生します。口臭原因の約90%を占めます。" },
  { title: "舌苔（ぜったい）", body: "舌の上に付着した白いコケ状の汚れ。口腔内細菌の温床となり、強いニオイを発生させます。" },
  { title: "むし歯・不適合補綴物", body: "むし歯の穴や合っていない詰め物・被せ物の隙間に細菌が繁殖し、腐敗臭の原因となります。" },
  { title: "唾液の減少（ドライマウス）", body: "唾液には自浄作用があります。緊張・薬・加齢などで唾液が減ると細菌が増殖しやすくなります。" },
]

const services = [
  {
    name: "精密口臭検査",
    amount: "¥5,500~¥11,000",
    note: "税込",
    body: "専用の測定器でお口から発生する臭い物質を数値化します。「数字で見える化」することで、原因に合わせた最適な対策をご提案できます。自己判断が難しい口臭の悩みに、科学的なアプローチでお応えします。",
  },
  {
    name: "口臭改善・専門クリーニング",
    amount: "¥16,500~¥22,000",
    note: "税込",
    body: "通常のクリーニングでは届かない舌の奥や歯周ポケット深部の細菌を徹底除去します。エアフロー・舌クリーニング・抗菌処置を組み合わせた、口臭に特化した専門コースです。",
  },
]

const faqs = [
  {
    q: "口臭があるかどうか自分ではわかりません。",
    a: "多くの方が同じご不安をお持ちです。当院では専用の測定器で数値化しますので、実際にあるかどうかも含めて客観的にご確認いただけます。",
  },
  {
    q: "口臭は治りますか？",
    a: "原因の大半は口腔内にあるため、適切な治療・クリーニングで改善が期待できます。歯周病・むし歯・舌苔など原因を特定した上で、その方に合った対策をご提案します。",
  },
  {
    q: "受診することが恥ずかしいのですが…",
    a: "口臭は多くの方が抱えるお悩みです。当院ではスタッフ全員がデリケートなお悩みに丁寧に向き合い、プライバシーに配慮した対応を心がけています。どうぞ遠慮なくお越しください。",
  },
  {
    q: "他の病気が原因の場合はありますか？",
    a: "口臭の約90%は口腔内に原因があります。まず歯科的な原因を除外した上で、必要に応じて他科へのご紹介も行っています。",
  },
]

export default function BreathCarePage() {
  useSEO({
    title: "桐生市の口臭外来",
    description: "桐生市の歯医者「今泉歯科医院」の口臭外来。専用測定器による精密口臭検査（¥5,500〜）と舌クリーニング・専門処置で口臭の根本原因を科学的に解決します。一人で悩まず、まずご相談ください。",
    canonicalPath: "/breath-care",
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
              <span className="text-[#4a4a4a]">口臭外来</span>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#e8f4f9] to-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <span className="inline-block bg-[#7eb4d2] text-white text-xs px-3 py-1 rounded-full mb-4">
                口臭が気になる
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3d5f7a] mb-4">
                口臭外来
              </h1>
              <p className="text-[#7eb4d2] text-lg font-medium mb-6">
                気になるお口のニオイを、科学的に解決します
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                「もしかして口臭があるかも…」と不安を抱えながらも、なかなか相談できずにいる方は少なくありません。当院では専用の測定器でニオイを数値化し、原因に合わせた治療・クリーニングをご提案します。一人で悩まず、まずお気軽にご相談ください。
              </p>
            </div>
          </div>
        </section>

        {/* Cause */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">CAUSE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-4 text-center">
              口臭の主な原因
            </h2>
            <p className="text-center text-sm text-[#4a4a4a] mb-10">口臭の約90%は口腔内に原因があります</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {causes.map((c) => (
                <div key={c.title} className="bg-[#f0f8fc] rounded-xl p-6 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#7eb4d2] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#3d5f7a] mb-1">{c.title}</p>
                    <p className="text-sm text-[#4a4a4a] leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services / Price */}
        <section className="py-16 bg-[#f8fbfd]">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">SERVICE & PRICE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-10 text-center">
              診療内容・料金
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {services.map((s) => (
                <div key={s.name} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-6 py-4 bg-[#3d5f7a]">
                    <h3 className="text-white font-bold text-lg">{s.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-white text-2xl font-bold">{s.amount}</span>
                      <span className="text-white/70 text-xs">{s.note}</span>
                    </div>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[#4a4a4a] text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-xs font-semibold text-[#7eb4d2] tracking-widest uppercase mb-2 text-center">FLOW</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d5f7a] mb-10 text-center">
              診療の流れ
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { num: "01", title: "ご予約", body: "お電話またはウェブ予約より「口臭外来」としてご予約ください。" },
                { num: "02", title: "問診・精密口臭検査", body: "生活習慣・気になる症状をうかがいます。測定器でニオイを数値化し、原因を特定します。" },
                { num: "03", title: "原因に合わせた治療・クリーニング", body: "歯周治療・舌クリーニング・専門クリーニングなど、原因に応じた処置を行います。" },
                { num: "04", title: "改善指導・定期メンテナンス", body: "ご自宅でのケア方法をお伝えします。必要に応じて定期的なメンテナンスもご提案します。" },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">一人で悩まず、まずご相談を</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              プライバシーに配慮した環境でご対応します。まずは検査だけのご来院も歓迎です。
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
