import { motion } from "framer-motion"
import { Link } from "wouter"

const treatments = [
  { tag: "歯が痛い・しみる",   title: "一般歯科",   icon: "general",      slug: "general" },
  { tag: "子供の歯を守りたい", title: "小児歯科",   icon: "pediatric",    slug: "pediatric" },
  { tag: "虫歯予防したい",     title: "予防歯科",   icon: "preventive",   slug: "preventive" },
  { tag: "入れ歯が合わない",   title: "入れ歯",     icon: "denture",      slug: "denture" },
  { tag: "銀歯を白くしたい",   title: "審美歯科",   icon: "aesthetic",    slug: "aesthetic" },
  { tag: "親知らず・外科処置", title: "口腔外科",   icon: "oral-surgery", slug: "oral-surgery" },
  { tag: "歯を白くしたい",     title: "ホワイトニング", icon: "whitening", slug: "whitening" },
  { tag: "ご自宅で診療",       title: "訪問診療",   icon: "home-visit",   slug: "home-visit" },
]

const NAVY = "#3d5f7a"
const YELLOW = "#f5d56e"
const BLUE = "#7eb4d2"

function TreatmentIcon({ type }: { type: string }) {
  const base = "w-20 h-20"
  switch (type) {
    case "general":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          {/* dental mirror */}
          <circle cx="28" cy="20" r="9" stroke={NAVY} strokeWidth="2.5" />
          <line x1="28" y1="29" x2="28" y2="58" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
          {/* explorer probe */}
          <line x1="52" y1="14" x2="52" y2="52" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M52 52 Q56 60 52 66" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="28" cy="20" r="5" fill={YELLOW} opacity="0.6" />
        </svg>
      )
    case "pediatric":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          {/* tooth shape */}
          <path
            d="M40 14 C28 14 20 20 18 30 C15 44 18 58 22 64 C24 68 28 68 30 62 C32 68 34 72 40 72 C46 72 48 68 50 62 C52 68 56 68 58 64 C62 58 65 44 62 30 C60 20 52 14 40 14 Z"
            fill={YELLOW} stroke={NAVY} strokeWidth="2"
          />
          {/* cute eyes */}
          <circle cx="34" cy="36" r="2.5" fill={NAVY} />
          <circle cx="46" cy="36" r="2.5" fill={NAVY} />
          {/* smile */}
          <path d="M34 46 Q40 52 46 46" stroke={NAVY} strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* cheeks */}
          <circle cx="30" cy="44" r="3" fill="#f9a8d4" opacity="0.5" />
          <circle cx="50" cy="44" r="3" fill="#f9a8d4" opacity="0.5" />
        </svg>
      )
    case "preventive":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          {/* toothbrush handle */}
          <rect x="34" y="36" width="12" height="34" rx="6" fill={NAVY} />
          {/* head */}
          <rect x="30" y="12" width="20" height="28" rx="5" fill={NAVY} />
          {/* bristles */}
          <rect x="33" y="14" width="3" height="12" rx="1.5" fill="white" />
          <rect x="38.5" y="14" width="3" height="12" rx="1.5" fill="white" />
          <rect x="44" y="14" width="3" height="12" rx="1.5" fill="white" />
          {/* tooth being brushed */}
          <path d="M14 42 C10 42 8 46 8 50 C7 56 9 62 11 64 C12 66 14 66 15 63 C16 66 17 68 20 68 C23 68 24 66 25 63 C26 66 28 66 29 64 C31 62 33 56 32 50 C32 46 30 42 26 42 Z"
            fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
        </svg>
      )
    case "denture":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          {/* upper denture plate */}
          <path d="M14 34 Q40 22 66 34 L64 40 Q40 30 16 40 Z" fill={BLUE} opacity="0.4" stroke={NAVY} strokeWidth="1.5" />
          {/* upper teeth */}
          <rect x="19" y="28" width="7" height="10" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
          <rect x="28" y="25" width="7" height="13" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
          <rect x="37" y="25" width="7" height="13" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
          <rect x="46" y="28" width="7" height="10" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
          {/* lower denture plate */}
          <path d="M16 50 Q40 62 64 50 L66 56 Q40 68 14 56 Z" fill={BLUE} opacity="0.4" stroke={NAVY} strokeWidth="1.5" />
          {/* lower teeth */}
          <rect x="20" y="50" width="7" height="10" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
          <rect x="29" y="50" width="7" height="13" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
          <rect x="38" y="50" width="7" height="13" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
          <rect x="47" y="50" width="7" height="10" rx="2" fill={YELLOW} stroke={NAVY} strokeWidth="1.5" />
        </svg>
      )
    case "aesthetic":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          <path
            d="M40 10 C28 10 20 18 18 28 C15 42 18 56 22 62 C24 66 28 66 30 60 C32 66 34 70 40 70 C46 70 48 66 50 60 C52 66 56 66 58 62 C62 56 65 42 62 28 C60 18 52 10 40 10 Z"
            fill="white" stroke={NAVY} strokeWidth="2"
          />
          {/* sparkles */}
          <path d="M58 8 L60 14 L66 16 L60 18 L58 24 L56 18 L50 16 L56 14 Z" fill={YELLOW} stroke={NAVY} strokeWidth="1" />
          <path d="M66 26 L67 29 L70 30 L67 31 L66 34 L65 31 L62 30 L65 29 Z" fill={YELLOW} stroke={NAVY} strokeWidth="1" />
        </svg>
      )
    case "oral-surgery":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          {/* scalpel */}
          <path d="M20 60 L50 30" stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
          <path d="M50 30 L58 22 L62 18 L58 26 L54 34 Z" fill={NAVY} />
          {/* tooth outline */}
          <path d="M18 36 C14 36 10 40 10 46 C9 54 12 62 15 65 C17 68 20 67 21 63 C22 67 24 70 28 70 C32 70 34 67 35 63 C36 67 39 68 41 65 C44 62 47 54 46 46 C46 40 42 36 38 36 C34 36 32 38 28 38 C24 38 22 36 18 36 Z"
            fill={YELLOW} stroke={NAVY} strokeWidth="1.5" opacity="0.7" />
        </svg>
      )
    case "whitening":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          <path
            d="M40 12 C28 12 20 20 18 30 C15 44 18 58 22 64 C24 68 28 68 30 62 C32 68 34 72 40 72 C46 72 48 68 50 62 C52 68 56 68 58 64 C62 58 65 44 62 30 C60 20 52 12 40 12 Z"
            fill="white" stroke={NAVY} strokeWidth="2"
          />
          {/* shine rays */}
          <line x1="58" y1="10" x2="62" y2="6"  stroke={YELLOW} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="64" y1="18" x2="70" y2="16" stroke={YELLOW} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="66" y1="28" x2="72" y2="28" stroke={YELLOW} strokeWidth="2.5" strokeLinecap="round" />
          <line x1="62" y1="8"  x2="68" y2="14" stroke={YELLOW} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case "home-visit":
      return (
        <svg className={base} viewBox="0 0 80 80" fill="none">
          {/* house */}
          <path d="M10 38 L40 14 L70 38" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 32 L18 64 L62 64 L62 32" stroke={NAVY} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* door */}
          <rect x="33" y="46" width="14" height="18" rx="2" stroke={NAVY} strokeWidth="2" fill={YELLOW} />
          {/* medical cross */}
          <rect x="37" y="50" width="6" height="10" rx="1" fill={NAVY} />
          <rect x="34" y="53" width="12" height="4" rx="1" fill={NAVY} />
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d5f7a]">診療内容</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {treatments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/treatment/${item.slug}`}
                className="flex flex-col items-center bg-[#e8f4f9] rounded-2xl p-4 md:p-5 hover:shadow-md hover:bg-[#d8ecf5] transition-all cursor-pointer group block h-full"
              >
                {/* tag */}
                <span className="inline-block bg-white text-[#3d5f7a] text-[10px] md:text-[11px] px-3 py-1 rounded-full font-medium mb-3 text-center leading-tight">
                  {item.tag}
                </span>
                {/* icon */}
                <div className="flex justify-center items-center flex-1 py-2">
                  <TreatmentIcon type={item.icon} />
                </div>
                {/* label */}
                <div className="flex items-center justify-center gap-0.5 mt-3">
                  <span className="text-[#3d5f7a] font-bold text-sm md:text-base">{item.title}</span>
                  <span className="text-[#f5a623] font-bold text-lg group-hover:translate-x-1 transition-transform">›</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
