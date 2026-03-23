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
    <section className="relative">
      {/* Hero Image */}
      <div className="relative min-h-[500px] md:min-h-[600px]">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}clinic-photo.jpeg`} alt="院内写真" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Catchphrase and Badges */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3f5a] mb-4 leading-tight">
                  桐生のアットホームな歯医者さん
                </h1>
                <p className="text-xl md:text-2xl text-[#3d5f7a] font-medium mb-8">
                  地域に寄り添い、笑顔をつくる
                </p>
              </motion.div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-4 flex-wrap"
              >
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="w-28 h-28 rounded-full bg-[#f5a623] flex flex-col items-center justify-center text-white shadow-lg"
                  >
                    <badge.icon className="h-8 w-8 mb-1" />
                    {badge.lines.map((line, i) => (
                      <p key={i} className={`text-sm ${i === 0 ? "font-bold" : ""}`}>{line}</p>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Schedule Table */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/95 backdrop-blur rounded-lg shadow-xl p-6"
            >
              <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-medium">診療時間</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#7eb4d2]/30">
                      <th className="py-2 px-2 text-left text-[#4a4a4a]"></th>
                      <th className="py-2 px-2 text-center text-[#4a4a4a]">月</th>
                      <th className="py-2 px-2 text-center text-[#4a4a4a]">火</th>
                      <th className="py-2 px-2 text-center text-[#4a4a4a]">水</th>
                      <th className="py-2 px-2 text-center text-[#4a4a4a]">木</th>
                      <th className="py-2 px-2 text-center text-[#4a4a4a]">金</th>
                      <th className="py-2 px-2 text-center text-[#4a4a4a]">土</th>
                      <th className="py-2 px-2 text-center text-[#4a4a4a]">日</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 px-2 text-[#4a4a4a]">{row.time}</td>
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
              
              <div className="mt-4 text-xs text-[#666] space-y-1">
                <p>※都合により早く終了している場合がございますのでお電話にてご確認ください。</p>
                <p>▲土曜午後は14：00〜16：00</p>
                <p>木曜午前は往診のみ</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
