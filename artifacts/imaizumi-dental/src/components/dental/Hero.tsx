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

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative min-h-[580px] md:min-h-[680px]">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}clinic-photo.jpeg`} alt="院内写真" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/55" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-0">

            {/* Left: Catchphrase card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 bg-white/85 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-xl w-full lg:w-[54%]"
            >
              {/* Accent bar */}
              <div className="w-10 h-1.5 rounded-full bg-[#f5a623] mb-5" />

              <h1 className="text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#7eb4d2] mb-3 leading-tight">
                桐生のアットホームな歯医者さん
              </h1>
              <p className="text-lg md:text-xl text-[#d4a574] font-medium mb-8">
                地域に寄り添い、笑顔をつくる
              </p>

              {/* Badges */}
              <div className="flex gap-3 flex-wrap">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="w-24 h-24 rounded-full bg-[#f5a623] flex flex-col items-center justify-center text-white shadow-lg"
                  >
                    <badge.icon className="h-7 w-7 mb-1" />
                    {badge.lines.map((line, i) => (
                      <p key={i} className={`text-xs leading-tight ${i === 0 ? "font-bold" : ""}`}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Schedule card – overlaps left card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative z-20 bg-white/97 backdrop-blur-md rounded-3xl p-6 shadow-2xl w-full lg:w-[50%] lg:-ml-6 lg:mt-12"
              style={{ backdropFilter: "blur(12px)" }}
            >
              <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-semibold text-base">診療時間</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#7eb4d2]/30">
                      <th className="py-2 px-1 text-left text-[#4a4a4a]"></th>
                      {["月","火","水","木","金","土","日"].map(d => (
                        <th key={d} className="py-2 px-2 text-center text-[#4a4a4a] font-medium">{d}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-3 px-1 text-[#4a4a4a] text-xs whitespace-nowrap">{row.time}</td>
                        <td className="py-3 px-2 text-center">{row.mon ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                        <td className="py-3 px-2 text-center">{row.tue ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                        <td className="py-3 px-2 text-center">{row.wed ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                        <td className="py-3 px-2 text-center">{row.thu === "往診" ? <span className="text-[#999] text-[10px]">往診</span> : row.thu ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                        <td className="py-3 px-2 text-center">{row.fri ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                        <td className="py-3 px-2 text-center">{row.sat === "▲" ? <span className="text-[#f5a623]">▲</span> : row.sat ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
                        <td className="py-3 px-2 text-center">{row.sun ? <span className="text-[#7eb4d2]">●</span> : "−"}</td>
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
        </div>
      </div>
    </section>
  )
}
