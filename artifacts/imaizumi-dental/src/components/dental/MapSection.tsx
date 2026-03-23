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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.8!2d139.33!3d36.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI0JzM2LjAiTiAxMznCsDE5JzQ4LjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
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
