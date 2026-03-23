import { motion } from "framer-motion"

export function MapSection() {
  return (
    <section id="access" className="bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full h-[400px] bg-[#e8f4f8]"
      >
        <iframe
          src="https://maps.google.com/maps?q=36.388928,139.339040&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="今泉歯科医院の地図"
          className="grayscale-[30%]"
        />
      </motion.div>
    </section>
  )
}
