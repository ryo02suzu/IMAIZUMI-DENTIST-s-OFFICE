import { motion } from "framer-motion"
import { Clock, Mail } from "lucide-react"

const schedule = [
  { time: "9:30-12:30", mon: true, tue: true, wed: true, thu: "往診", fri: true, sat: true, sun: false },
  { time: "15:00-19:00", mon: true, tue: true, wed: true, thu: true, fri: true, sat: "▲", sun: false },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#7eb4d2] text-sm tracking-widest mb-2">CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7eb4d2]">ご予約・お問い合わせ</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Phone and Email */}
            <div className="bg-[#f8fbfc] rounded-lg p-6 mb-6">
              <p className="text-[#7eb4d2] text-sm mb-2">ご予約・お問い合わせ</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-[#7eb4d2]">
                  <span className="text-sm">TEL</span>
                  <span className="text-2xl md:text-3xl font-bold ml-1">近日公開</span>
                </div>
                <a
                  href="https://functional-prototype.replit.app/book/imaizumi-dental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f5d56e] text-[#5a4a3a] px-6 py-2 rounded-full hover:bg-[#f0c84a] transition-colors text-sm font-medium"
                >
                  <Mail className="h-4 w-4" />
                  WEB予約はこちら
                </a>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-medium">診療時間</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-3 text-left text-[#4a4a4a] bg-gray-50"></th>
                      <th className="py-3 px-3 text-center text-[#4a4a4a] bg-gray-50">月</th>
                      <th className="py-3 px-3 text-center text-[#4a4a4a] bg-gray-50">火</th>
                      <th className="py-3 px-3 text-center text-[#4a4a4a] bg-gray-50">水</th>
                      <th className="py-3 px-3 text-center text-[#4a4a4a] bg-gray-50">木</th>
                      <th className="py-3 px-3 text-center text-[#4a4a4a] bg-gray-50">金</th>
                      <th className="py-3 px-3 text-center text-[#4a4a4a] bg-gray-50">土</th>
                      <th className="py-3 px-3 text-center text-[#4a4a4a] bg-gray-50">日</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 px-3 text-[#4a4a4a]">{row.time}</td>
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
              
              <div className="mt-4 text-xs text-[#666] space-y-1">
                <p>※都合により早く終了している場合がございますのでお電話にてご確認ください。</p>
                <p>▲土曜午後は14：00〜16：00</p>
                <p>木曜午前は往診のみ</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Clinic Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] bg-gradient-to-br from-[#e0e8ec] to-[#c8d4dc] rounded-lg flex items-center justify-center"
          >
            <p className="text-[#7eb4d2]/50 text-sm">外観写真準備中</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
