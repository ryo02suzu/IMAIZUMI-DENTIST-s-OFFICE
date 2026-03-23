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
    <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[560px] md:min-h-[640px] flex">

        {/* Left: white area with catchphrase */}
        <div className="relative z-10 w-full lg:w-[45%] bg-white flex items-center py-14 px-8 md:px-12 lg:px-14 shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#7eb4d2] mb-4 leading-tight whitespace-nowrap">
              桐生のアットホームな歯医者さん
            </h1>
            <p className="text-xl md:text-2xl text-[#d4a574] font-medium mb-10">
              地域に寄り添い、笑顔をつくる
            </p>

            {/* Badges */}
            <div className="flex gap-4 flex-wrap">
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
        <div className="hidden lg:block absolute left-[45%] right-6 top-6 bottom-6 rounded-3xl overflow-hidden shadow-xl">
          <img
            src={`${import.meta.env.BASE_URL}clinic-photo.jpeg`}
            alt="院内写真"
            className="w-full h-full object-cover object-center opacity-80"
          />

        </div>

        {/* Schedule card floating over photo – outside photo div so it's not clipped */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block absolute bottom-10 right-10 z-20 bg-white/95 backdrop-blur-md rounded-3xl p-7 shadow-2xl w-[540px] max-w-[55%]"
        >
          <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
            <Clock className="h-6 w-6" />
            <span className="font-semibold text-lg">診療時間</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-base">
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

        {/* Mobile: show photo below text */}
        <div className="lg:hidden absolute inset-0 -z-10">
          <img
            src={`${import.meta.env.BASE_URL}clinic-photo.jpeg`}
            alt="院内写真"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

      </div>

      {/* Mobile: schedule table below hero */}
      <div className="lg:hidden bg-white px-6 py-6 shadow-inner">
        <div className="flex items-center gap-2 text-[#7eb4d2] mb-3">
          <Clock className="h-5 w-5" />
          <span className="font-semibold">診療時間</span>
        </div>
        <div className="overflow-x-auto">
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
        <div className="mt-3 text-xs text-[#888] space-y-0.5 border-t border-gray-100 pt-3">
          <p>※都合により早く終了している場合がございますのでお電話にてご確認ください。</p>
          <p>▲土曜午後は14：00〜16：00　　木曜午前は往診のみ</p>
        </div>
      </div>

    </section>
  )
}
