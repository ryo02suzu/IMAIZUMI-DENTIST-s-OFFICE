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
            className="flex-1 min-w-0 aspect-[4/3] relative group cursor-pointer overflow-hidden rounded-2xl"
          >
            <img
              src={`${import.meta.env.BASE_URL}clinic-photo.jpeg`}
              alt={item}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#3d5f7a]/30 group-hover:bg-[#3d5f7a]/10 transition-colors" />
            <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-medium drop-shadow">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
