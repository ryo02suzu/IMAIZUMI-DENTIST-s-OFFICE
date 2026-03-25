import { motion } from "framer-motion"

const BASE = import.meta.env.BASE_URL

const features = [
  {
    point: "01",
    img: `${BASE}clinic-reception.jpeg`,
    lines: ["笑顔でお迎えする受付から", "診療まで、ひとりひとりに", "寄り添った対応を心がけています"],
  },
  {
    point: "02",
    img: `${BASE}clinic-unit1.jpeg`,
    lines: ["最新のユニット（治療台）を", "導入し、快適な", "治療環境を整えています"],
  },
  {
    point: "03",
    img: `${BASE}doctor-fun.jpeg`,
    lines: ["写真は少し照れていますが", "話しかけやすく気さくな院長が", "いつでも丁寧に対応します"],
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
              <div className="relative mb-6">
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden relative">
                  <img
                    src={feature.img}
                    alt={`特徴${feature.point}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
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
