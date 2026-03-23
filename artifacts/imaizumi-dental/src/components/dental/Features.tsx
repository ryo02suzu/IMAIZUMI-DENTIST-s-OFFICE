import { motion } from "framer-motion"

const features = [
  {
    point: "01",
    lines: ["インフォームドコンセントを", "大切にし予防歯科に", "力を入れて治療しております"],
  },
  {
    point: "02",
    lines: ["最新のユニット（治療台）を", "導入し、快適な", "治療環境を整えています"],
  },
  {
    point: "03",
    lines: ["患者さんとの", "コミュニケーションを", "大切にしています"],
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 bg-[#7eb4d2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-white/80 text-sm tracking-widest mb-2">FEATURE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">3つの特徴</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Image placeholder with wave bottom */}
              <div className="relative mb-6">
                <div className="aspect-[4/3] bg-white/20 rounded-t-[40px] flex items-center justify-center">
                  <p className="text-white/50 text-sm">写真準備中</p>
                </div>
                {/* Point badge */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full px-4 py-2 shadow-lg">
                  <p className="text-[#7eb4d2] text-xs">POINT</p>
                  <p className="text-[#7eb4d2] text-2xl font-bold">{feature.point}</p>
                </div>
              </div>

              <div className="pt-8">
                {feature.lines.map((line, i) => (
                  <p key={i} className="text-white text-sm md:text-base leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
