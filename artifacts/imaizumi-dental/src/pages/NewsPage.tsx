import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { newsItems, categories, getArchiveMonths } from "@/data/newsData"
import { Link } from "wouter"
import { ChevronRight, Home } from "lucide-react"

function MiniCalendar() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const weeks: (number | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <p className="text-center text-sm font-bold text-[#4a4a4a] mb-3">
        {year}年{month + 1}月
      </p>
      <table className="w-full text-xs text-center">
        <thead>
          <tr>
            {["日", "月", "火", "水", "木", "金", "土"].map((d, i) => (
              <th
                key={d}
                className={`py-1 font-medium ${i === 0 ? "text-red-400" : i === 6 ? "text-[#7eb4d2]" : "text-[#4a4a4a]"}`}
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {Array.from({ length: 7 }).map((_, di) => {
                const day = week[di] ?? null
                const isToday = day === today.getDate()
                return (
                  <td key={di} className="py-1">
                    {day ? (
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs
                          ${isToday ? "bg-[#7eb4d2] text-white font-bold" : ""}
                          ${di === 0 ? "text-red-400" : di === 6 ? "text-[#7eb4d2]" : "text-[#4a4a4a]"}
                          ${isToday ? "!text-white" : ""}
                        `}
                      >
                        {day}
                      </span>
                    ) : null}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function NewsPage() {
  const archiveMonths = getArchiveMonths()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative bg-[#7eb4d2] pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 flex items-center justify-center"
          aria-hidden="true"
        >
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-white" fill="currentColor">
            <ellipse cx="100" cy="60" rx="28" ry="30" />
            <path d="M55 200 Q60 130 100 120 Q140 130 145 200Z" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">お知らせ</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Home className="h-3.5 w-3.5" />
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>›</span>
            <span>お知らせ</span>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-[#f8fbfc] py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-[240px_1fr] gap-8">

            {/* Sidebar */}
            <aside className="space-y-6">
              <MiniCalendar />

              {/* Recent articles */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-bold text-[#4a4a4a] mb-3 pb-2 border-b border-gray-100">最新の記事</h3>
                <ul className="space-y-2">
                  {newsItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/news/${item.id}`}
                        className="flex items-start gap-2 text-xs text-[#4a4a4a] hover:text-[#7eb4d2] transition-colors leading-relaxed"
                      >
                        <ChevronRight className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#7eb4d2]" />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-bold text-[#4a4a4a] mb-3 pb-2 border-b border-gray-100">カテゴリ</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <span className="flex items-center gap-2 text-xs text-[#4a4a4a]">
                        <ChevronRight className="h-3.5 w-3.5 text-[#7eb4d2]" />
                        {cat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monthly archive */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="text-sm font-bold text-[#4a4a4a] mb-3 pb-2 border-b border-gray-100">月別アーカイブ</h3>
                <ul className="space-y-2">
                  {archiveMonths.map((m) => (
                    <li key={m.key}>
                      <span className="flex items-center gap-2 text-xs text-[#4a4a4a]">
                        <ChevronRight className="h-3.5 w-3.5 text-[#7eb4d2]" />
                        {m.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <div className="space-y-10">
              {newsItems.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-lg md:text-xl font-bold text-[#4a4a4a] mb-3">
                      {item.title}
                    </h2>
                    <hr className="border-[#7eb4d2] border-t-2 mb-4" />
                    <p className="text-sm text-[#555] leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/news/${item.id}`}
                        className="text-sm text-[#7eb4d2] hover:underline font-medium"
                      >
                        ≫続きを読む
                      </Link>
                      <p className="text-xs text-[#999]">Posted on {item.date} | 今泉歯科医院</p>
                    </div>
                  </div>
                </article>
              ))}

              <div className="text-center">
                <Link href="/" className="text-[#7eb4d2] text-sm hover:underline">
                  ← トップページへ戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
