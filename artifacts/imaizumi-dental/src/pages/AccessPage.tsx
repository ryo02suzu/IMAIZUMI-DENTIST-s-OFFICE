import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { BOOKING_PATH } from "@/config/booking"
import { Link } from "wouter"
import { Home, MapPin, Phone, Car, Train, Clock } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"
import { useJsonLd, breadcrumbLd } from "@/lib/useJsonLd"

const schedule = [
  { time: "9:30〜12:30", days: [true, true, true, "往診", true, true, false] },
  { time: "15:00〜19:00", days: [true, true, true, true, true, "▲", false] },
]
const dayHeads = ["月", "火", "水", "木", "金", "土", "日"]

export default function AccessPage() {
  useSEO({
    title: "アクセス・診療時間（桐生市広沢町の歯医者）",
    description:
      "今泉歯科医院（桐生市広沢町間ノ島291-5）へのアクセス・診療時間。駐車場10台完備、昭和橋バス停から徒歩2分。土曜も診療。みどり市・笠懸・新里、太田・足利方面からもどうぞ。",
    canonicalPath: "/access",
  })
  useJsonLd(breadcrumbLd([{ name: "ホーム", path: "/" }, { name: "アクセス" }]))

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative bg-[#7eb4d2] pt-24 pb-16 overflow-hidden">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            アクセス・診療時間
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Home className="h-3.5 w-3.5" />
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>›</span>
            <span>アクセス</span>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-[#f8fbfc] py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {/* 基本情報 */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-sm p-5 flex gap-3">
              <MapPin className="h-5 w-5 text-[#7eb4d2] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-[#888] mb-1">住所</p>
                <p className="text-sm text-[#4a4a4a] font-medium">
                  〒376-0014<br />群馬県桐生市広沢町間ノ島291-5
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-5 flex gap-3">
              <Phone className="h-5 w-5 text-[#7eb4d2] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-[#888] mb-1">電話</p>
                <a href="tel:0277549893" className="text-xl font-bold text-[#7eb4d2]">0277-54-9893</a>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-5 flex gap-3">
              <Car className="h-5 w-5 text-[#7eb4d2] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-[#888] mb-1">駐車場</p>
                <p className="text-sm text-[#4a4a4a] font-medium">10台完備（無料）</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-5 flex gap-3">
              <Train className="h-5 w-5 text-[#7eb4d2] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-[#888] mb-1">最寄り</p>
                <p className="text-sm text-[#4a4a4a] font-medium">昭和橋バス停から徒歩2分</p>
              </div>
            </div>
          </div>

          {/* 診療時間 */}
          <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6">
            <div className="flex items-center gap-2 text-[#7eb4d2] mb-4">
              <Clock className="h-5 w-5" />
              <h2 className="font-bold text-[#3d5f7a]">診療時間</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="py-3 px-3 text-left"></th>
                    {dayHeads.map((d) => (
                      <th key={d} className="py-3 px-2 text-center text-[#4a4a4a]">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-3 text-[#4a4a4a] text-xs whitespace-nowrap">{row.time}</td>
                      {row.days.map((d, j) => (
                        <td key={j} className="py-3 px-2 text-center">
                          {d === "往診" ? (
                            <span className="text-[10px] text-[#999]">往診</span>
                          ) : d === "▲" ? (
                            <span className="text-[#f5a623]">▲</span>
                          ) : d ? (
                            <span className="text-[#7eb4d2]">●</span>
                          ) : (
                            "−"
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-xs text-[#666] space-y-1">
              <p>▲ 土曜午後は 14:00〜16:00</p>
              <p>木曜午前は往診のため、医院での診療はお休みです</p>
              <p>日曜休診／都合により早く終了する場合がありますのでお電話にてご確認ください</p>
            </div>
          </div>

          {/* 地図 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full h-80">
              <iframe
                src="https://maps.google.com/maps?q=今泉歯科医院+群馬県桐生市広沢町間ノ島291-5&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="今泉歯科医院の地図"
              />
            </div>
          </div>

          {/* 周辺エリア */}
          <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6">
            <h2 className="font-bold text-[#3d5f7a] mb-2">周辺エリアからお越しの方へ</h2>
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              桐生市広沢町に位置し、駐車場を10台完備しています。桐生市内はもちろん、みどり市（笠懸・大間々）・新里方面、太田市・足利市方面からもお車でご来院いただけます。土曜も診療していますので、平日はお忙しい方もどうぞお気軽にご利用ください。
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-sm text-[#666] mb-4">ご予約・ご相談はお気軽にどうぞ</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0277549893"
                className="inline-flex items-center justify-center gap-2 bg-[#7eb4d2] text-white px-8 py-3 rounded-full font-bold hover:bg-[#6aa3c4] transition-colors"
              >
                <Phone className="h-5 w-5" /> 0277-54-9893
              </a>
              <a
                href={BOOKING_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#f5a623] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e0961c] transition-colors"
              >
                WEB予約
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
