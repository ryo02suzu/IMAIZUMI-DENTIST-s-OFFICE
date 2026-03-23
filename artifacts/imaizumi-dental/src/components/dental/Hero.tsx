import { motion } from "framer-motion"
import { Train, Calendar, Car, Clock } from "lucide-react"

const badges = [
  { icon: Train, lines: ["昭和橋バス停", "徒歩2分"] },
  { icon: Calendar, lines: ["土曜", "診療あり"] },
  { icon: Car, lines: ["駐車場", "10台完備"] },
]

const schedule = [
  { time: "9:30-12:30", mon: true, tue: true, wed: true, thu: "往診", fri: true, sat: true, sun: false },
  { time: "15:00-19:00", mon: true, tue: true, wed: true, thu: true, fri: true, sat: "▲", sun: false },
]

function ScheduleTable({ compact = false }: { compact?: boolean }) {
  const px = compact ? "px-2" : "px-3"
  const py = compact ? "py-2" : "py-3"
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b-2 border-[#7eb4d2]/30">
          <th className="py-2 px-1 text-left"></th>
          {["月","火","水","木","金","土","日"].map(d => (
            <th key={d} className={`py-2 ${px} text-center text-[#4a4a4a] font-medium`}>{d}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {schedule.map((row, i) => (
          <tr key={i} className="border-b border-gray-100">
            <td className={`${py} px-1 text-[#4a4a4a] text-xs whitespace-nowrap`}>{row.time}</td>
            <td className={`${py} ${px} text-center`}>{row.mon ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className={`${py} ${px} text-center`}>{row.tue ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className={`${py} ${px} text-center`}>{row.wed ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className={`${py} ${px} text-center`}>{row.thu === "往診" ? <span className="text-[#999] text-[10px]">往診</span> : row.thu ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className={`${py} ${px} text-center`}>{row.fri ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className={`${py} ${px} text-center`}>{row.sat === "▲" ? <span className="text-[#f5a623]">▲</span> : row.sat ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
            <td className={`${py} ${px} text-center`}>{row.sun ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ── MOBILE layout ── */}
      <div className="lg:hidden">
        {/* Photo banner */}
        <div className="px-4 pt-4">
        <div className="relative w-full h-52 overflow-hidden rounded-2xl">
          <img
            src={`${import.meta.env.BASE_URL}clinic-photo.jpeg`}
            alt="院内写真"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60" />
        </div>
        </div>

        {/* Catchphrase */}
        <div className="px-6 pt-5 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-xl font-bold text-[#3d5f7a] mb-2 leading-snug whitespace-nowrap">
              桐生のアットホームな歯医者さん
            </h1>
            <p className="text-base text-[#d4a574] font-medium mb-5">
              地域に寄り添い、笑顔をつくる
            </p>

            {/* Badges */}
            <div className="flex gap-3">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="w-24 h-24 rounded-full bg-[#f5a623] flex flex-col items-center justify-center text-white shadow-md"
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
          <ScheduleTable compact />
          <div className="mt-3 text-[11px] text-[#888] space-y-0.5 border-t border-gray-100 pt-3">
            <p>※都合により早く終了している場合がございますのでお電話にてご確認ください。</p>
            <p>▲土曜午後は14：00〜16：00　　木曜午前は往診のみ</p>
          </div>
        </div>
      </div>

      {/* ── PC layout ── */}
      <div className="hidden lg:flex relative min-h-[640px]">

        {/* Left: white area with catchphrase */}
        <div className="relative z-10 w-full lg:w-[45%] bg-white flex items-center py-14 px-14 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl xl:text-4xl font-bold text-[#3d5f7a] mb-4 leading-tight whitespace-nowrap">
              桐生のアットホームな歯医者さん
            </h1>
            <p className="text-xl xl:text-2xl text-[#d4a574] font-medium mb-10">
              地域に寄り添い、笑顔をつくる
            </p>

            {/* Badges */}
            <div className="flex gap-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="w-28 h-28 rounded-full bg-[#f5a623] flex flex-col items-center justify-center text-white shadow-lg"
                >
                  <badge.icon className="h-8 w-8 mb-1" />
                  {badge.lines.map((line, i) => (
                    <p key={i} className={`text-sm leading-tight ${i === 0 ? "font-bold" : ""}`}>{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <div className="absolute left-[45%] right-6 top-6 bottom-6 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={`${import.meta.env.BASE_URL}clinic-photo.jpeg`}
            alt="院内写真"
            className="w-full h-full object-cover object-center opacity-60"
          />
        </div>

        {/* Schedule card floating over photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute bottom-10 right-10 z-20 bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl w-[600px] max-w-[58%]"
        >
          <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
            <Clock className="h-6 w-6" />
            <span className="font-semibold text-lg">診療時間</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-lg">
              <thead>
                <tr className="border-b-2 border-[#7eb4d2]/30">
                  <th className="py-2 px-1 text-left text-[#4a4a4a]"></th>
                  {["月","火","水","木","金","土","日"].map(d => (
                    <th key={d} className="py-2 px-3 text-center text-[#4a4a4a] font-medium">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 px-1 text-[#4a4a4a] text-xs whitespace-nowrap">{row.time}</td>
                    <td className="py-3 px-3 text-center">{row.mon ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                    <td className="py-3 px-3 text-center">{row.tue ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                    <td className="py-3 px-3 text-center">{row.wed ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                    <td className="py-3 px-3 text-center">{row.thu === "往診" ? <span className="text-[#999] text-[10px]">往診</span> : row.thu ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                    <td className="py-3 px-3 text-center">{row.fri ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                    <td className="py-3 px-3 text-center">{row.sat === "▲" ? <span className="text-[#f5a623]">▲</span> : row.sat ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                    <td className="py-3 px-3 text-center">{row.sun ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-[#888] space-y-0.5 border-t border-gray-100 pt-3">
            <p>※都合により早く終了している場合がございますのでお電話にてご確認ください。</p>
            <p>▲土曜午後は14：00〜16：00　　木曜午前は往診のみ</p>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
