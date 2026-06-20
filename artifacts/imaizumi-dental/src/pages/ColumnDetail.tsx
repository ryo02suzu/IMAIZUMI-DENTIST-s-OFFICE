import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { getColumnArticle } from "@/data/columnData"
import { Link, useParams } from "wouter"
import { Home } from "lucide-react"
import { useSEO } from "@/hooks/useSEO"
import { useJsonLd, breadcrumbLd } from "@/lib/useJsonLd"
import ReactMarkdown from "react-markdown"

const SITE_URL = "https://imaizumi-dentist-office.com"

// 写真スロット（写真が未設定の場所に表示するプレースホルダー）
function PhotoPlaceholder({ label }: { label?: string }) {
  return (
    <span className="not-prose my-6 flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#e8f4f8] to-[#d1e8f0] text-center">
      <span className="text-[#7eb4d2]/70 text-sm font-medium">写真準備中</span>
      {label && <span className="text-[#7eb4d2]/60 text-xs px-4">{label}</span>}
    </span>
  )
}

export default function ColumnDetail() {
  const { slug } = useParams()
  const item = getColumnArticle(slug ?? "")

  useSEO({
    title: item?.title,
    description: item?.excerpt,
    canonicalPath: item ? `/column/${item.slug}` : undefined,
  })
  useJsonLd(
    item
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: item.title,
          datePublished: item.datetime,
          description: item.excerpt,
          author: { "@type": "Organization", name: "今泉歯科医院" },
          publisher: { "@type": "Organization", name: "今泉歯科医院" },
          mainEntityOfPage: `${SITE_URL}/column/${item.slug}`,
        }
      : null,
  )
  useJsonLd(
    item
      ? breadcrumbLd([
          { name: "ホーム", path: "/" },
          { name: "コラム", path: "/column" },
          { name: item.title },
        ])
      : null,
  )

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#999] mb-4">記事が見つかりません</p>
            <Link href="/column" className="text-[#7eb4d2] hover:underline text-sm">← コラム一覧へ</Link>
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
          <h1 className="text-3xl font-bold text-white mb-4">コラム</h1>
          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Home className="h-3.5 w-3.5" />
            <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
            <span>›</span>
            <Link href="/column" className="hover:text-white transition-colors">コラム</Link>
          </div>
        </div>
      </div>

      <main className="flex-1 bg-[#f8fbfc] py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-3 py-0.5 rounded-full bg-[#7eb4d2] text-white">{item.category}</span>
              <span className="text-sm text-[#999]">{item.date}</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-[#4a4a4a] mb-5 leading-relaxed">{item.title}</h1>

            {/* メイン写真（任意。設定があれば表示） */}
            {item.eyecatch && (
              <img
                src={item.eyecatch}
                alt={item.title}
                loading="lazy"
                className="w-full rounded-xl mb-8 object-cover"
              />
            )}

            {/* 本文（Markdown） */}
            <div className="prose prose-slate max-w-none prose-headings:text-[#3d5f7a] prose-a:text-[#7eb4d2] prose-strong:text-[#4a4a4a]">
              <ReactMarkdown
                components={{
                  img: ({ src, alt }) =>
                    !src || src.startsWith("placeholder:") ? (
                      <PhotoPlaceholder label={alt} />
                    ) : (
                      <img src={src} alt={alt ?? ""} loading="lazy" className="rounded-xl w-full" />
                    ),
                }}
              >
                {item.body}
              </ReactMarkdown>
            </div>
          </article>

          <div className="mt-8 text-center">
            <Link href="/column" className="text-[#7eb4d2] text-sm hover:underline">← コラム一覧へ戻る</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
