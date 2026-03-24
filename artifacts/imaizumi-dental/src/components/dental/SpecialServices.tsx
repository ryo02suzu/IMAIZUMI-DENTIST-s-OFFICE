import { Link } from "wouter"
import { ArrowRight } from "lucide-react"

export function SpecialServices() {
  return (
    <section className="py-16 bg-[#3d5f7a]">
      <div className="container mx-auto px-4">
        <p className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-2 text-center">SPECIAL</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
          当院の専門サービス
        </h2>
        <p className="text-white/70 text-center text-sm mb-10">
          保険診療の枠を超えた、こだわりのメニューをご用意しています
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Subscription */}
          <Link href="/subscription" className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-[#7eb4d2] px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-white/80 text-xs">月額¥3,300〜 ｜ いつでも解約OK</p>
                <h3 className="text-white text-xl font-bold mt-0.5">クリーニング定期コース</h3>
              </div>
              <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
            <div className="px-6 py-5">
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">
                PMTCやエアフローなど、保険では受けられない専門クリーニングを月額定額でご提供。家族割引あり。
              </p>
              <div className="flex gap-2 flex-wrap">
                {["ライト ¥3,300/月", "スタンダード ¥5,500/月", "プレミアム ¥8,800/月"].map((p) => (
                  <span key={p} className="bg-[#f0f8fc] text-[#3d5f7a] text-xs px-2 py-1 rounded-full">{p}</span>
                ))}
              </div>
            </div>
          </Link>

          {/* Breath Care */}
          <Link href="/breath-care" className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-[#5a8fa8] px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-white/80 text-xs">精密検査で原因を数値化</p>
                <h3 className="text-white text-xl font-bold mt-0.5">口臭外来</h3>
              </div>
              <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
            <div className="px-6 py-5">
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">
                気になるお口のニオイを専用測定器で科学的に解決。舌クリーニング・歯周治療など原因に合わせた処置を行います。
              </p>
              <div className="flex gap-2 flex-wrap">
                {["精密口臭検査 ¥5,500~", "専門クリーニング ¥16,500~"].map((p) => (
                  <span key={p} className="bg-[#f0f8fc] text-[#3d5f7a] text-xs px-2 py-1 rounded-full">{p}</span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
