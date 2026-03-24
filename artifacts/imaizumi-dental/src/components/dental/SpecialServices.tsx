import { Link } from "wouter"
import { ArrowRight } from "lucide-react"

const subMenus = [
  { label: "ホワイトニング", desc: "薬剤で歯を白く明るく", href: "/treatment/whitening" },
  { label: "クリーニング定期コース", desc: "月額¥3,300〜 ｜ いつでも解約OK", href: "/subscription" },
  { label: "口臭外来", desc: "専用測定器で原因を数値化", href: "/breath-care" },
]

export function SpecialServices() {
  return (
    <section className="py-16 bg-[#3d5f7a]">
      <div className="container mx-auto px-4">
        <p className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-2 text-center">ESTHETICS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
          歯のエステ
        </h2>
        <p className="text-white/70 text-center text-sm mb-10">
          白く、清潔に、自信ある笑顔へ
        </p>

        <div className="max-w-3xl mx-auto">
          <Link
            href="/dental-esthetics"
            className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image side */}
              <div className="md:w-40 bg-[#e8f4f9] flex items-center justify-center p-6 shrink-0">
                <img
                  src="/icons/dental-esthetics.jpeg"
                  alt="歯のエステ"
                  className="w-24 h-24 object-contain"
                />
              </div>
              {/* Content side */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="bg-[#f5a623] text-white text-[10px] px-2 py-0.5 rounded-full">キレイ・スッキリしたい</span>
                    <h3 className="text-[#3d5f7a] text-xl font-bold mt-1">3つのメニューを見る</h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#7eb4d2] group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                </div>
                <div className="space-y-2">
                  {subMenus.map((m) => (
                    <div key={m.label} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] shrink-0"></span>
                      <span className="text-[#3d5f7a] font-medium text-sm">{m.label}</span>
                      <span className="text-[#6b7280] text-xs">— {m.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
