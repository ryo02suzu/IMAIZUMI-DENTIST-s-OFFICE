import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const treatments = [
  { tag: "歯が痛い・しみる", title: "一般歯科", icon: "dental-tools" },
  { tag: "子供の歯を守りたい", title: "小児歯科", icon: "child-tooth" },
  { tag: "虫歯予防したい", title: "予防歯科", icon: "prevention" },
  { tag: "入れ歯が合わない", title: "入れ歯", icon: "dentures" },
  { tag: "ご自身の歯のように", title: "インプラント", icon: "implant" },
  { tag: "部分入れ歯", title: "ノンクラスプデンチャー", icon: "partial" },
  { tag: "人工ダイヤモンド", title: "ジルコニア", icon: "zirconia" },
  { tag: "噛みやすい入れ歯", title: "リプロデンチャーシステム", icon: "repro" },
]

function TreatmentIcon({ type }: { type: string }) {
  const iconClass = "w-16 h-16 text-[#7eb4d2]"
  
  switch (type) {
    case "dental-tools":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 8v48M44 8v48" />
          <circle cx="20" cy="8" r="4" />
          <circle cx="44" cy="8" r="4" />
          <path d="M20 56l-4 4M44 56l4 4" />
        </svg>
      )
    case "child-tooth":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8c-8 0-14 4-16 10-2 8 0 16 2 24 2 6 4 14 8 14s4-6 6-12c2 6 2 12 6 12s6-8 8-14c2-8 4-16 2-24-2-6-8-10-16-10z" />
          <circle cx="26" cy="24" r="2" fill="currentColor" />
          <circle cx="38" cy="24" r="2" fill="currentColor" />
          <path d="M28 32c2 2 6 2 8 0" />
        </svg>
      )
    case "prevention":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8c-8 0-14 4-16 10-2 8 0 16 2 24 2 6 4 14 8 14s4-6 6-12c2 6 2 12 6 12s6-8 8-14c2-8 4-16 2-24-2-6-8-10-16-10z" />
          <path d="M20 28h24M24 20l16 16M40 20l-16 16" strokeWidth="2" />
        </svg>
      )
    case "dentures":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 28h40M12 36h40" />
          <path d="M16 28v-8c0-4 6-8 16-8s16 4 16 8v8" />
          <path d="M16 36v8c0 4 6 8 16 8s16-4 16-8v-8" />
          <rect x="20" y="24" width="4" height="8" rx="1" />
          <rect x="28" y="24" width="4" height="8" rx="1" />
          <rect x="36" y="24" width="4" height="8" rx="1" />
        </svg>
      )
    case "implant":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8c-6 0-10 3-12 8-1 6 0 12 2 18 1 4 3 10 6 10s3-4 4-8c1 4 1 8 4 8s5-6 6-10c2-6 3-12 2-18-2-5-6-8-12-8z" />
          <path d="M26 44h12v4h-12z" />
          <path d="M24 48l4 12h8l4-12" strokeWidth="2" />
          <path d="M28 52h8M27 56h10" />
        </svg>
      )
    case "partial":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 32c0-12 10-20 24-20s24 8 24 20" />
          <path d="M12 32v8c0 8 8 12 20 12s20-4 20-12v-8" />
          <rect x="16" y="28" width="6" height="10" rx="2" />
          <rect x="26" y="28" width="6" height="10" rx="2" />
          <rect x="36" y="28" width="6" height="10" rx="2" />
          <path d="M22 48v4M32 48v4M42 48v4" strokeDasharray="2 2" />
        </svg>
      )
    case "zirconia":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8c-8 0-14 4-16 10-2 8 0 16 2 24 2 6 4 14 8 14s4-6 6-12c2 6 2 12 6 12s6-8 8-14c2-8 4-16 2-24-2-6-8-10-16-10z" />
          <path d="M26 20l6 8 6-8" />
          <circle cx="32" cy="36" r="4" />
          <path d="M28 32l-4-4M36 32l4-4" />
        </svg>
      )
    case "repro":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="12" y="20" width="40" height="28" rx="4" />
          <path d="M20 28v12M28 28v12M36 28v12M44 28v12" />
          <path d="M16 20v-4h32v4" />
          <path d="M24 48v4M40 48v4" />
          <rect x="20" y="52" width="24" height="4" rx="2" />
        </svg>
      )
    default:
      return null
  }
}

export function Treatment() {
  return (
    <section id="treatment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#7eb4d2] text-sm tracking-widest mb-2">TREATMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7eb4d2]">診療内容</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#f8fbfc] rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="mb-3">
                <span className="inline-block bg-white border border-[#7eb4d2] text-[#7eb4d2] text-[10px] md:text-xs px-2 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="flex justify-center mb-3">
                <TreatmentIcon type={item.icon} />
              </div>
              <div className="flex items-center justify-center gap-1 text-[#7eb4d2] font-medium text-sm md:text-base">
                <span>{item.title}</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
