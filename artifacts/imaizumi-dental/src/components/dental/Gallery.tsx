import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const BASE = import.meta.env.BASE_URL

const galleryItems = [
  { label: "待合室",       src: `${BASE}clinic-waiting.jpeg`,    brightness: 1.2  },
  { label: "受付",         src: `${BASE}clinic-reception.jpeg`,  brightness: 1.35 },
  { label: "診療室",       src: `${BASE}clinic-unit2.jpeg`,      brightness: 1.45 },
  { label: "治療中",       src: `${BASE}clinic-treatment.jpeg`,  brightness: 1.35 },
  { label: "消毒スペース", src: `${BASE}clinic-sanitizer.jpeg`,  brightness: 1.25 },
]


function MobileGallery() {
  const [current, setCurrent] = useState(0)
  const [winW, setWinW] = useState(375)
  const touchX = useRef<number | null>(null)
  const n = galleryItems.length

  useEffect(() => {
    setWinW(window.innerWidth)
    const onResize = () => setWinW(window.innerWidth)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % n), 3500)
    return () => clearInterval(timer)
  }, [n])

  const move = (dir: 1 | -1) => setCurrent(c => ((c + dir) % n + n) % n)

  const cardW   = winW * 0.7
  const cardH   = Math.round(cardW * (3 / 4))   // 4:3 比率を維持
  const step    = winW * 0.6
  const marginL = (winW - cardW) / 2

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ height: cardH + 28 }}
      onTouchStart={e => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={e => {
        if (touchX.current === null) return
        const diff = touchX.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 40) move(diff > 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      {galleryItems.map((item, idx) => {
        let offset = idx - current
        const half = Math.floor(n / 2)
        if (offset > half)  offset -= n
        if (offset < -half) offset += n

        const abs    = Math.abs(offset)
        const scale  = abs === 0 ? 1 : 0.78
        const opacity = abs > 1 ? 0 : 1
        const zIndex  = 10 - abs

        return (
          <motion.div
            key={idx}
            className="absolute top-0 overflow-hidden cursor-pointer"
            style={{ width: cardW, height: cardH, left: 0, marginLeft: marginL, borderRadius: 20 }}
            animate={{ x: offset * step, scale, opacity, zIndex }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            onClick={() => { if (offset !== 0) move(offset > 0 ? 1 : -1) }}
          >
            <img loading="lazy" decoding="async"
              src={item.src}
              alt={item.label}
              style={{ filter: `brightness(${item.brightness})` }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 pb-2">
              <p className="text-center text-white text-sm font-bold tracking-wide drop-shadow">
                {item.label}
              </p>
            </div>
          </motion.div>
        )
      })}

      {/* ドットインジケーター */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-1">
        {galleryItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-[#7eb4d2] w-4 h-1.5"
                : "bg-[#7eb4d2]/40 w-1.5 h-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20">
      {/* スマホ：カバーフローカルーセル */}
      <div className="md:hidden bg-[#f0f8fc] pt-5 pb-3">
        <p className="text-center text-xs font-semibold text-[#7eb4d2] tracking-widest mb-3">GALLERY</p>
        <MobileGallery />
      </div>

      {/* PC：5枚横並び */}
      <div className="hidden md:flex gap-1">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 min-w-0 aspect-[4/3] relative group cursor-pointer overflow-hidden rounded-xl"
          >
            <img loading="lazy" decoding="async"
              src={item.src}
              alt={item.label}
              style={{ filter: `brightness(${item.brightness})` }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-6 pb-2 px-1">
              <p className="text-center text-white text-xs font-bold tracking-wide drop-shadow">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
