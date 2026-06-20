import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { columnArticles } from "@/data/columnData"
import { Link } from "wouter"
import { Home, ChevronRight } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"
import { useJsonLd, breadcrumbLd } from "@/lib/useJsonLd"

export default function ColumnPage() {
  useSEO({
    title: "コラム（歯のお役立ち情報）",
    description:
      "桐生市の歯医者「今泉歯科医院」の歯のお役立ちコラム。親知らず・むし歯・予防・お口の健康に関する情報を、わかりやすくお届けします。",
    canonicalPath: "/column",
  })
  useJsonLd(breadcrumbLd([{ name: "ホーム", path: "/" }, { name: "コラム" }]))

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
          <h1 className="text-4xl font-bold text-white mb-4">コラム</h1>
          <p className="text-white/80 text-sm mb-4">歯とお口の健康に役立つ情報をお届けします</p>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Home className="h-3.5 w-3.5" />
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>›</span>
            <span>コラム</span>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-[#f8fbfc] py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {columnArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/column/${item.slug}`}
                className="group block bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* サムネイル写真スロット */}
                {item.eyecatch ? (
                  <img
                    src={item.eyecatch}
                    alt={item.title}
                    loading="lazy"
                    className="w-full aspect-[16/9] object-cover"
                  />
                ) : (
                  <div className="h-2 bg-gradient-to-r from-[#7eb4d2] to-[#a9d2e6]" />
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7eb4d2] text-white">{item.category}</span>
                    <span className="text-xs text-[#999]">{item.date}</span>
                  </div>
                  <h2 className="font-bold text-[#3d5f7a] leading-snug mb-2 group-hover:text-[#7eb4d2] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#666] leading-relaxed line-clamp-3">{item.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-[#7eb4d2] text-sm font-medium mt-3">
                    続きを読む <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/" className="text-[#7eb4d2] text-sm hover:underline">← トップページへ戻る</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
