import { motion } from "framer-motion"
import { Link } from "wouter"

const BASE = import.meta.env.BASE_URL

type TreatmentItem = {
  tag: string
  title: string
  href: string
  icon?: string
  emoji?: string
  badge?: string
}

const treatments: TreatmentItem[] = [
  { tag: "歯が痛い・しみる",   title: "一般歯科",           icon: "general",      href: "/treatment/general" },
  { tag: "子供の歯を守りたい", title: "小児歯科",           icon: "pediatric",    href: "/treatment/pediatric" },
  { tag: "虫歯予防したい",     title: "予防歯科",           icon: "preventive",   href: "/treatment/preventive" },
  { tag: "入れ歯が合わない",   title: "入れ歯",             icon: "denture",      href: "/treatment/denture" },
  { tag: "銀歯を白くしたい",   title: "審美歯科",           icon: "aesthetic",    href: "/treatment/aesthetic" },
  { tag: "親知らず・外科処置", title: "口腔外科",           icon: "oral-surgery", href: "/treatment/oral-surgery" },
  { tag: "歯を白くしたい",     title: "ホワイトニング",     icon: "whitening",    href: "/treatment/whitening" },
  { tag: "ご自宅で診療",       title: "訪問診療",           icon: "home-visit",   href: "/treatment/home-visit" },
  { tag: "月額¥3,300〜",       title: "クリーニング定期コース", emoji: "🦷",       href: "/subscription", badge: "NEW" },
  { tag: "口臭が気になる",     title: "口臭外来",           emoji: "🌿",          href: "/breath-care", badge: "NEW" },
]

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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 max-w-5xl mx-auto">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className="relative flex flex-col items-center bg-white rounded-3xl p-4 md:p-5 border border-[#c8e2ee] hover:shadow-lg hover:border-[#7eb4d2] transition-all cursor-pointer group block h-full"
              >
                {item.badge && (
                  <span className="absolute top-2 right-2 bg-[#f5a623] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                <span className="inline-block bg-[#e8f4f9] text-[#3d5f7a] text-[10px] md:text-[11px] px-3 py-1 rounded-full font-medium mb-3 text-center leading-tight">
                  {item.tag}
                </span>
                <div className="flex justify-center items-center flex-1 py-1">
                  {item.icon ? (
                    <img
                      src={`${BASE}icons/${item.icon}.jpeg`}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                  ) : (
                    <div className="w-20 h-20 flex items-center justify-center bg-[#f0f8fc] rounded-full text-4xl">
                      {item.emoji}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center gap-0.5 mt-3">
                  <span className="text-[#3d5f7a] font-bold text-sm md:text-base text-center leading-tight">{item.title}</span>
                  <span className="text-[#f5a623] font-bold text-lg group-hover:translate-x-1 transition-transform inline-block shrink-0">›</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
