import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const message = `桐生の地で育ちながら、地域の皆さまのお口の健康を守ることが私の使命だと感じています。

歯の治療は「怖い」「痛い」というイメージを持たれる方も多いですが、当院では患者さんのお話をしっかり聞き、わかりやすいご説明を心がけています。

お子さまからご高齢の方まで、家族のかかりつけ医として長くお付き合いいただける歯科医院でありたいと思っています。何でもお気軽にご相談ください。`

export function Doctor() {
  return (
    <section id="doctor" className="py-16 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#7eb4d2] text-sm tracking-widest mb-2">DOCTOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7eb4d2]">医師紹介</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden max-w-xs mx-auto shadow-sm">
              <img loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}doctor.jpeg`} alt="今泉淳 院長" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <p className="text-[#7eb4d2] text-xs tracking-widest mb-1">DIRECTOR</p>
              <h3 className="text-3xl font-bold text-[#4a4a4a] mb-1">今泉 淳</h3>
              <p className="text-[#888] text-sm">院長 / Imaizumi Atsushi</p>
            </div>

            <div className="flex items-start gap-2 mb-6 text-sm text-[#4a4a4a]">
              <GraduationCap className="h-4 w-4 text-[#7eb4d2] shrink-0 mt-0.5" />
              <span>日本大学松戸歯学部 卒業</span>
            </div>

            <div className="border-l-4 border-[#7eb4d2] pl-5 space-y-3">
              {message.trim().split("\n\n").map((para, i) => (
                <p key={i} className="text-[#4a4a4a] text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#e0eff6]">
              <p className="text-xs text-[#999]">所属・資格など近日掲載予定</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
