import { motion } from "framer-motion"
import { CheckCircle, Car, Bus } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "ご予約",
    body: "お電話またはWEB予約にてご予約ください。初めての方・急患の方もお気軽にどうぞ。",
  },
  {
    num: "02",
    title: "ご来院・受付",
    body: "受付にてお名前をお伝えください。問診票にご記入いただきます（約5分）。",
  },
  {
    num: "03",
    title: "検査・診察",
    body: "レントゲン撮影やお口の視診を行います。気になることは何でも遠慮なくお話しください。",
  },
  {
    num: "04",
    title: "治療内容のご説明",
    body: "現在の状態・治療内容・費用・期間をわかりやすくご説明します。ご納得いただいてから治療を開始します。",
  },
]

const items = [
  "健康保険証",
  "各種医療証（お持ちの方）",
  "お薬手帳（お薬を飲んでいる方）",
  "他院での治療中の方はその情報があれば",
]

const BOOKING_URL = "https://functional-prototype.replit.app/book/imaizumi-dental"

export function FirstVisit() {
  return (
    <section id="about" className="py-16 bg-[#f8fbfc] scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#7eb4d2] text-sm tracking-widest mb-2">FIRST VISIT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7eb4d2] mb-3">はじめての方へ</h2>
          <p className="text-[#666] text-sm md:text-base">初めてのご来院も、安心してお越しください。</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 初診の流れ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-[#7eb4d2] mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#7eb4d2] rounded-full inline-block" />
              初診の流れ
            </h3>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#7eb4d2] flex items-center justify-center text-white text-sm font-bold">
                    {s.num}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 border border-[#e0eff6] shadow-sm">
                    <p className="font-bold text-[#4a4a4a] mb-1">{s.title}</p>
                    <p className="text-sm text-[#666] leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] mt-4 ml-14">※ 初診は検査・ご説明を含め約30〜60分程度が目安です。</p>
          </motion.div>

          {/* 持ち物・アクセス */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* 持ち物 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e0eff6] shadow-sm">
              <h3 className="text-lg font-bold text-[#7eb4d2] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7eb4d2] rounded-full inline-block" />
                ご持参いただくもの
              </h3>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#4a4a4a]">
                    <CheckCircle className="h-4 w-4 text-[#7eb4d2] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* アクセス */}
            <div className="bg-white rounded-2xl p-6 border border-[#e0eff6] shadow-sm">
              <h3 className="text-lg font-bold text-[#7eb4d2] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#7eb4d2] rounded-full inline-block" />
                アクセス・駐車場
              </h3>
              <div className="space-y-3 text-sm text-[#4a4a4a]">
                <div className="flex items-start gap-2">
                  <Bus className="h-4 w-4 text-[#7eb4d2] shrink-0 mt-0.5" />
                  <p>バス停「昭和橋」から徒歩2分</p>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="h-4 w-4 text-[#7eb4d2] shrink-0 mt-0.5" />
                  <p>駐車場10台完備（無料）</p>
                </div>
                <p className="text-xs text-[#999] mt-2 pl-6">
                  群馬県桐生市広沢町間ノ島291-5<br />
                  （広沢町エーコープ近く、白色の建物）
                </p>
              </div>
            </div>

            {/* よくある不安 */}
            <div className="bg-[#7eb4d2]/10 rounded-2xl p-6 border border-[#7eb4d2]/20">
              <h3 className="text-base font-bold text-[#7eb4d2] mb-3">こんな不安はありませんか？</h3>
              <div className="space-y-2 text-sm text-[#4a4a4a]">
                {[
                  "「久しぶりで恥ずかしい…」→ 気にしないでください、まずは現状を一緒に確認しましょう。",
                  "「治療費がいくらかかるか不安」→ 治療前に必ずお見積りをご案内します。",
                  "「痛いのが怖い」→ 麻酔を使いながら、できる限り痛みを抑えた治療を心がけています。",
                ].map((text, i) => (
                  <p key={i} className="leading-relaxed">{text}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 感染対策 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-lg font-bold text-[#7eb4d2] mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#7eb4d2] rounded-full inline-block" />
            院内の感染対策
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e0eff6] shadow-sm flex flex-col">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={`${import.meta.env.BASE_URL}clinic-air-purifier.jpeg`}
                  alt="空気清浄機"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#4a4a4a] mb-1">空気清浄機</p>
                <p className="text-sm text-[#666]">院内各所に空気清浄機を設置し、清潔な空気環境を保っています。</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e0eff6] shadow-sm flex flex-col">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={`${import.meta.env.BASE_URL}clinic-humidifier.jpeg`}
                  alt="加湿器"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#4a4a4a] mb-1">加湿器</p>
                <p className="text-sm text-[#666]">適切な湿度管理でウイルス対策にも配慮した院内環境を整えています。</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e0eff6] shadow-sm flex flex-col">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={`${import.meta.env.BASE_URL}clinic-autoclave.jpeg`}
                  alt="オートクレーブ（滅菌機）"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#4a4a4a] mb-1">オートクレーブ（滅菌機）</p>
                <p className="text-sm text-[#666]">治療器具は毎回オートクレーブで完全滅菌。衛生管理を徹底しています。</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://functional-prototype.replit.app/book/imaizumi-dental"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f5a623] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e09520] transition-colors"
          >
            WEB予約はこちら
          </a>
        </motion.div>
      </div>
    </section>
  )
}
