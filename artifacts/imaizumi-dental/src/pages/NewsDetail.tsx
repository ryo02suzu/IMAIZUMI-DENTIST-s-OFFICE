import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { useNews } from "@/hooks/useNews"
import { Link, useParams } from "wouter"
import { Home } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"

const categoryColor: Record<string, string> = {
  "診療案内": "bg-[#7eb4d2] text-white",
  "休診案内": "bg-[#f5a623] text-white",
  "お知らせ": "bg-gray-400 text-white",
}

export default function NewsDetail() {
  const { id } = useParams()
  const { items, isLoading } = useNews()
  const item = items.find((n) => n.id === id)
  useSEO({
    title: item?.title,
    description: item?.body?.replace(/\n/g, " ").substring(0, 120),
  })

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#999] mb-4">
              {isLoading ? "読み込み中..." : "記事が見つかりません"}
            </p>
            <Link href="/news" className="text-[#7eb4d2] hover:underline text-sm">← お知らせ一覧へ</Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative bg-[#7eb4d2] pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-white" fill="currentColor">
            <ellipse cx="100" cy="60" rx="28" ry="30" />
            <path d="M55 200 Q60 130 100 120 Q140 130 145 200Z" />
          </svg>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">お知らせ</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Home className="h-3.5 w-3.5" />
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>›</span>
            <Link href="/news" className="hover:text-white transition-colors">お知らせ</Link>
            <span>›</span>
            <span className="truncate max-w-[200px]">{item.title}</span>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-[#f8fbfc] py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="bg-white rounded-lg shadow-sm p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-[#999]">{item.date}</span>
              <span className={`text-xs px-3 py-0.5 rounded-full font-medium ${categoryColor[item.category] ?? "bg-gray-400 text-white"}`}>
                {item.category}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-[#4a4a4a] mb-3">{item.title}</h1>
            <hr className="border-[#7eb4d2] border-t-2 mb-6" />
            <div className="text-sm text-[#555] leading-loose whitespace-pre-line">
              {item.body}
            </div>
          </article>

          <div className="mt-8 text-center">
            <Link href="/news" className="text-[#7eb4d2] text-sm hover:underline">← お知らせ一覧へ戻る</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
