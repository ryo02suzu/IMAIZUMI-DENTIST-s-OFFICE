import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { newsItems } from "@/data/newsData"

const categoryColor: Record<string, string> = {
  "診療案内": "bg-[#7eb4d2] text-white",
  "休診案内": "bg-[#f5a623] text-white",
  "お知らせ": "bg-gray-400 text-white",
}

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 bg-[#f8fbfc]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10">
            <p className="text-[#7eb4d2] text-sm tracking-widest mb-1">NEWS & TOPICS</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#7eb4d2]">お知らせ</h1>
          </div>

          <ul className="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
            {newsItems.map((item, index) => (
              <li key={index} className="px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="text-[#999] text-sm whitespace-nowrap">{item.date}</span>
                <span
                  className={`text-xs px-3 py-0.5 rounded-full font-medium whitespace-nowrap ${categoryColor[item.category] ?? "bg-gray-400 text-white"}`}
                >
                  {item.category}
                </span>
                <span className="text-[#4a4a4a] text-sm md:text-base">{item.content}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <a href="/" className="text-[#7eb4d2] text-sm hover:underline">← トップページへ戻る</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
