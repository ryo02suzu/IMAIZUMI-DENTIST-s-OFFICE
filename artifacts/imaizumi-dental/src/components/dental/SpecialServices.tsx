import { Link } from "wouter"
import { ArrowRight, Users } from "lucide-react"

const roles = [
  { label: "歯科助手", detail: "バイト・パート｜時給¥1,050〜", href: "/recruit" },
  { label: "歯科衛生士", detail: "バイト・パート・正社員｜時給¥1,300〜", href: "/recruit" },
]

export function SpecialServices() {
  return (
    <section className="py-16 bg-[#3d5f7a]">
      <div className="container mx-auto px-4">
        <p className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-2 text-center">RECRUIT</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
          スタッフ募集中
        </h2>
        <p className="text-white/70 text-center text-sm mb-10">
          一緒に地域の笑顔を守りませんか？未経験OK！
        </p>

        <div className="max-w-3xl mx-auto">
          <Link
            href="/recruit"
            className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-40 bg-[#f0f8fc] flex items-center justify-center p-6 shrink-0">
                <Users className="w-16 h-16 text-[#7eb4d2]" />
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="bg-[#f5a623] text-white text-[10px] px-2 py-0.5 rounded-full">採用情報</span>
                    <h3 className="text-[#3d5f7a] text-xl font-bold mt-1">採用情報を見る</h3>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#7eb4d2] group-hover:translate-x-1 transition-transform shrink-0 mt-1" />
                </div>
                <div className="space-y-2">
                  {roles.map((r) => (
                    <div key={r.label} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] shrink-0"></span>
                      <span className="text-[#3d5f7a] font-medium text-sm">{r.label}</span>
                      <span className="text-[#6b7280] text-xs">— {r.detail}</span>
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
