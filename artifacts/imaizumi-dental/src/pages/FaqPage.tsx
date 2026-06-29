import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BOOKING_URL } from "@/config/booking"
import { Link } from "wouter"
import { Home, Phone } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"
import { useJsonLd, breadcrumbLd, faqLd } from "@/lib/useJsonLd"

const faqs = [
  {
    q: "予約は必要ですか？予約なしでも診てもらえますか？",
    a: "ご予約のうえでのご来院をおすすめしています。お待ち時間を少なくご案内できます。急な痛みなどでお困りの場合は、まずはお電話（0277-54-9893）でご相談ください。",
  },
  {
    q: "急に歯が痛くなったときも診てもらえますか？",
    a: "痛みや腫れなどでお困りの際は、できるだけ対応いたしますので、まずはお電話ください。状況により当日のご案内が難しい場合もありますが、お早めのご連絡をおすすめします。",
  },
  {
    q: "駐車場はありますか？",
    a: "はい、無料の駐車場を10台完備しています。お車でお気軽にお越しください。昭和橋バス停からは徒歩2分です。",
  },
  {
    q: "土曜日も診療していますか？何時までですか？",
    a: "土曜も診療しています。午前は9:30〜12:30、午後は14:00〜16:00です。日曜は休診です。なお木曜午前は往診のため、医院での診療はお休みです。",
  },
  {
    q: "支払い方法は何が使えますか？",
    a: "基本的に現金でのお支払いです。1万円以上のお会計はクレジットカードもご利用いただけます。",
  },
  {
    q: "健康保険は使えますか？",
    a: "保険診療に対応しています。ご来院の際は健康保険証をお持ちください。ホワイトニングや審美治療など一部は自費診療となります。費用はお気軽にお尋ねください。",
  },
  {
    q: "子ども連れでも大丈夫ですか？",
    a: "はい、小児歯科にも対応しており、お子さまからご高齢の方まで幅広く診療しています。アットホームな雰囲気を心がけていますので、ご家族でお気軽にお越しください。",
  },
  {
    q: "英語での対応はできますか？",
    a: "院長が英語でのご対応が可能で、診療時間中は在院しています。受付・スタッフは主に日本語となります。英語のご案内ページもございます。",
  },
  {
    q: "通院が難しいのですが、来てもらうことはできますか？",
    a: "訪問診療を行っています。ご高齢や通院が困難な方のご自宅・施設へ歯科医師がお伺いします。むし歯治療・入れ歯の調整・口腔ケアなどに対応しますので、まずはお電話でご相談ください。",
  },
  {
    q: "どんな治療をしていますか？",
    a: "一般歯科・小児歯科・予防歯科・入れ歯・審美歯科・口腔外科・ホワイトニング・訪問診療に対応しています。親知らずの抜歯など口腔外科にも対応しています。",
  },
]

export default function FaqPage() {
  useSEO({
    title: "よくある質問（桐生市の歯医者）",
    description:
      "今泉歯科医院（桐生市）へのよくある質問。予約・急患・駐車場・土曜診療・支払い方法・保険・お子さま連れ・英語対応・訪問診療などをまとめました。",
    canonicalPath: "/faq",
  })
  useJsonLd(breadcrumbLd([{ name: "ホーム", path: "/" }, { name: "よくある質問" }]))
  useJsonLd(faqLd(faqs))

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative bg-[#7eb4d2] pt-24 pb-16 overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">よくある質問</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Home className="h-3.5 w-3.5" />
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>›</span>
            <span>よくある質問</span>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-[#f8fbfc] py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl shadow-sm p-5 md:p-6">
                <p className="font-bold text-[#3d5f7a] mb-2">Q. {f.q}</p>
                <p className="text-sm text-[#555] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-[#666] mb-4">
              その他ご不明な点は、お気軽にお問い合わせください
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0277549893"
                className="inline-flex items-center justify-center gap-2 bg-[#7eb4d2] text-white px-8 py-3 rounded-full font-bold hover:bg-[#6aa3c4] transition-colors"
              >
                <Phone className="h-5 w-5" /> 0277-54-9893
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f5a623] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e0961c] transition-colors"
              >
                WEB予約
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
