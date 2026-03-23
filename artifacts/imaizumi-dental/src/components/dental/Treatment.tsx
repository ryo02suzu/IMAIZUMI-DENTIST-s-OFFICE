import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const treatments = [
  { tag: "歯が痛い・しみる", title: "一般歯科", icon: "dental-tools", slug: "general" },
  { tag: "子供の歯を守りたい", title: "小児歯科", icon: "child-tooth", slug: "pediatric" },
  { tag: "虫歯予防したい", title: "予防歯科", icon: "prevention", slug: "preventive" },
  { tag: "入れ歯が合わない", title: "入れ歯", icon: "dentures", slug: "denture" },
  { tag: "人工ダイヤモンド", title: "ジルコニア", icon: "zirconia", slug: "zirconia" },
  { tag: "親知らず・外科処置", title: "口腔外科", icon: "oral-surgery", slug: "oral-surgery" },
  { tag: "歯を白くしたい", title: "ホワイトニング", icon: "whitening", slug: "whitening" },
  { tag: "ご自宅で診療", title: "訪問診療", icon: "home-visit", slug: "home-visit" },
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
    case "zirconia":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8c-8 0-14 4-16 10-2 8 0 16 2 24 2 6 4 14 8 14s4-6 6-12c2 6 2 12 6 12s6-8 8-14c2-8 4-16 2-24-2-6-8-10-16-10z" />
          <path d="M26 20l6 8 6-8" />
          <circle cx="32" cy="36" r="4" />
          <path d="M28 32l-4-4M36 32l4-4" />
        </svg>
      )
    case "oral-surgery":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 52l28-28" strokeWidth="2" strokeLinecap="round" />
          <path d="M34 16l10 10-4 4-10-10 4-4z" />
          <path d="M40 12l4 4" strokeLinecap="round" />
          <circle cx="18" cy="44" r="4" />
          <path d="M26 46c-4 4-10 6-14 4" strokeLinecap="round" />
        </svg>
      )
    case "whitening":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 10c-8 0-14 4-16 10-2 8 0 16 2 24 2 6 4 12 8 12s4-6 6-12c2 6 2 12 6 12s6-6 8-12c2-8 4-16 2-24-2-6-8-10-16-10z" />
          <path d="M46 8l2-4M50 12l4-2M48 16l4 1" strokeLinecap="round" />
          <path d="M52 6l-2 2" strokeLinecap="round" />
        </svg>
      )
    case "home-visit":
      return (
        <svg className={iconClass} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 28L32 10l24 18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 24v28h36V24" />
          <rect x="24" y="36" width="16" height="16" rx="2" />
          <path d="M32 36v16" />
          <path d="M24 44h16" />
          <circle cx="50" cy="18" r="8" />
          <path d="M50 14v4l2 2" strokeLinecap="round" strokeLinejoin="round" />
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
            <motion.a
              key={index}
              href={`/treatment/${item.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#f8fbfc] rounded-xl p-4 md:p-6 hover:shadow-lg hover:bg-white transition-all cursor-pointer group border border-transparent hover:border-[#7eb4d2]/20 block"
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
