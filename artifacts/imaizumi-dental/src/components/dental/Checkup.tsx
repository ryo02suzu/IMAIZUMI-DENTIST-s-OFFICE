import { motion } from "framer-motion"

export function Checkup() {
  return (
    <section className="py-16 bg-[#7eb4d2]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/80 text-sm tracking-widest mb-2">CHECK UP</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              定期健診・メンテナンス
            </h2>
            
            <h3 className="text-xl text-white font-medium mb-4">
              3ヶ月に一度の「定期健診」を
            </h3>
            
            <div className="text-white/90 leading-loose space-y-3 text-sm md:text-base">
              <p>一生健康な歯を維持するために子供はもちろん大人まで。</p>
              <p>定期的に歯科医院でクリーニングや歯石取りなどを受けることにより、</p>
              <p>未然に虫歯や歯周病にならないように防ぐための診療です。</p>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}clinic-treatment.jpeg`} alt="定期健診・メンテナンス" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
