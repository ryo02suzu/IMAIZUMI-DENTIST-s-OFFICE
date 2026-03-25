import { motion, AnimatePresence } from "framer-motion"
import { Train, Calendar, Car, Clock } from "lucide-react"
import { useState, useEffect } from "react"

const badges = [
  { icon: Train, lines: ["昭和橋バス停", "徒歩2分"] },
  { icon: Calendar, lines: ["土曜", "診療あり"] },
  { icon: Car, lines: ["駐車場", "10台完備"] },
]

const schedule = [
  { time: "9:30-12:30", mon: true, tue: true, wed: true, thu: "往診", fri: true, sat: true, sun: false },
  { time: "15:00-19:00", mon: true, tue: true, wed: true, thu: true, fri: true, sat: "▲", sun: false },
]

const slides = [
  { src: "clinic-unit2.jpeg", alt: "診療室全景" },
  { src: "clinic-unit1.jpeg", alt: "診療ユニット" },
  { src: "clinic-photo.jpeg", alt: "院内写真" },
]

function Slideshow({ className, imgClassName }: { className?: string; imgClassName?: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={className}>
      <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
        <AnimatePresence>
          {slides.map((slide, i) =>
            i === current ? (
              <motion.img
                key={i}
                src={`${import.meta.env.BASE_URL}${slide.src}`}
                alt={slide.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 w-full h-full object-cover object-center ${imgClassName ?? ""}`}
              />
            ) : null
          )}
        </AnimatePresence>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-5" : "bg-white/60 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ScheduleTable() {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b-2 border-[#7eb4d2]/30">
          <th className="py-2 px-1 text-left"></th>
          {["月","火","水","木","金","土","日"].map(d => (
            <th key={d} className="py-2 px-2 text-center text-[#4a4a4a] font-medium">{d}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {schedule.map((row, i) => (
          <tr key={i} className="border-b border-gray-100">
            <td className="py-2 px-1 text-[#4a4a4a] text-xs whitespace-nowrap">{row.time}</td>
            <td className="py-2 px-2 text-center">{row.mon ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className="py-2 px-2 text-center">{row.tue ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className="py-2 px-2 text-center">{row.wed ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className="py-2 px-2 text-center">{row.thu === "往診" ? <span className="text-[#999] text-[10px]">往診</span> : row.thu ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className="py-2 px-2 text-center">{row.fri ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className="py-2 px-2 text-center">{row.sat === "▲" ? <span className="text-[#f5a623]">▲</span> : row.sat ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className="py-2 px-2 text-center">{row.sun ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function Hero() {
  return (
    <section className="relative bg-white">

      {/* ── MOBILE layout ── */}
      <div className="lg:hidden">
        {/* Full-width slideshow */}
        <div className="px-4 pt-4">
          <Slideshow className="w-full h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg" />
        </div>

        {/* Catchphrase */}
        <div className="px-6 pt-6 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-xl font-bold text-[#3d5f7a] mb-2 leading-snug">
              桐生のアットホームな歯医者さん
            </h1>
            <p className="text-base text-[#d4a574] font-medium mb-5">
              地域に寄り添い、笑顔をつくる
            </p>
            <div className="flex gap-3">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex-1 max-w-[96px] aspect-square rounded-full bg-[#f5a623] flex flex-col items-center justify-center text-white shadow-md"
                >
                  <badge.icon className="h-6 w-6 mb-1" />
                  {badge.lines.map((line, i) => (
                    <p key={i} className={`text-xs leading-tight text-center ${i === 0 ? "font-bold" : ""}`}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Schedule card */}
        <div className="mx-4 my-5 bg-white rounded-2xl shadow-md border border-gray-100 p-4">
          <div className="flex items-center gap-2 text-[#7eb4d2] mb-3">
            <Clock className="h-5 w-5" />
            <span className="font-semibold text-sm">診療時間</span>
          </div>
          <ScheduleTable />
          <div className="mt-3 text-[11px] text-[#888] space-y-0.5 border-t border-gray-100 pt-3">
            <p>※都合により早く終了している場合がございますのでお電話にてご確認ください。</p>
            <p>▲土曜午後は14：00〜16：00　　木曜午前は往診のみ</p>
          </div>
        </div>
      </div>

      {/* ── PC layout ── */}
      <div className="hidden lg:flex min-h-[600px]">

        {/* Left: content column */}
        <div className="w-[48%] shrink-0 flex flex-col justify-center py-12 px-12 xl:px-16 bg-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl xl:text-4xl font-bold text-[#3d5f7a] mb-3 leading-tight">
              桐生のアットホームな<br />歯医者さん
            </h1>
            <p className="text-xl xl:text-2xl text-[#d4a574] font-medium mb-8">
              地域に寄り添い、笑顔をつくる
            </p>

            {/* Badges */}
            <div className="flex gap-4 mb-10">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="w-28 h-28 rounded-full bg-[#f5a623] flex flex-col items-center justify-center text-white shadow-lg"
                >
                  <badge.icon className="h-8 w-8 mb-1" />
                  {badge.lines.map((line, i) => (
                    <p key={i} className={`text-sm leading-tight text-center ${i === 0 ? "font-bold" : ""}`}>{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Schedule card — inside left column, no overlap */}
            <div className="bg-[#f8fbfd] rounded-2xl border border-[#7eb4d2]/20 p-5">
              <div className="flex items-center gap-2 text-[#7eb4d2] mb-3">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">診療時間</span>
              </div>
              <ScheduleTable />
              <div className="mt-3 text-[11px] text-[#888] space-y-0.5 border-t border-gray-100 pt-3">
                <p>※都合により早く終了している場合がございますのでお電話にてご確認ください。</p>
                <p>▲土曜午後は14：00〜16：00　　木曜午前は往診のみ</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: full photo — no overlapping elements */}
        <div className="flex-1 relative">
          <Slideshow className="absolute inset-4 rounded-3xl shadow-xl overflow-hidden" />
        </div>

      </div>

    </section>
  )
}
