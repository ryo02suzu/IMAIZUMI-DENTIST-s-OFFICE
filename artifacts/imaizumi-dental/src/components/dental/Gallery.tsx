import { motion } from "framer-motion"

const galleryItems = [
  "受付",
  "待合室",
  "スタッフ",
  "診療室",
  "設備",
]

export function Gallery() {
  return (
    <section id="facility" className="py-0">
      <div className="flex overflow-hidden">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 min-w-0 aspect-[4/3] bg-gradient-to-br from-[#e0e8ec] to-[#c8d4dc] flex items-center justify-center relative group cursor-pointer"
          >
            <p className="text-[#7eb4d2]/50 text-xs">{item}</p>
            <div className="absolute inset-0 bg-[#7eb4d2]/0 group-hover:bg-[#7eb4d2]/20 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
