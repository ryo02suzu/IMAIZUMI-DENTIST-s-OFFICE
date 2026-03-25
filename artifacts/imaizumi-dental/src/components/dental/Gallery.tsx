import { motion } from "framer-motion"

const BASE = import.meta.env.BASE_URL

const galleryItems = [
  { label: "待合室", src: `${BASE}clinic-waiting.jpeg` },
  { label: "受付", src: `${BASE}clinic-reception.jpeg` },
  { label: "診療室", src: `${BASE}clinic-unit2.jpeg` },
  { label: "治療中", src: `${BASE}clinic-treatment.jpeg` },
  { label: "消毒スペース", src: `${BASE}clinic-sanitizer.jpeg` },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-0 scroll-mt-20">
      <div className="flex gap-1">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 min-w-0 aspect-[4/3] relative group cursor-pointer overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* 明るさを診療室に合わせる */}
            <div className="absolute inset-0 bg-black/20" />
            {/* 下部グラデーション＋ラベル */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 pb-2 px-1">
              <p className="text-center text-white text-xs font-bold tracking-wide drop-shadow">{item.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
