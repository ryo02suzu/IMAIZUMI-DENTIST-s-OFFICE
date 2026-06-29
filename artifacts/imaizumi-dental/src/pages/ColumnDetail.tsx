import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { getColumnArticle, columnArticles } from "@/data/columnData"
import { BOOKING_URL } from "@/config/booking"
import { Link, useParams } from "wouter"
import { Home, ChevronRight, Phone } from "lucide-react"
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

          {/* 関連する診療への導線 */}
          {item.related && (
            <div className="mt-8 rounded-2xl border border-[#c8e2ee] bg-[#f8fbfd] p-5 md:p-6">
              <p className="text-sm text-[#7eb4d2] font-semibold mb-1">この症状の診療について</p>
              <Link
                href={item.related.href}
                className="inline-flex items-center gap-1 text-lg font-bold text-[#3d5f7a] hover:underline"
              >
                {item.related.label}
                <ChevronRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-[#666] mt-2 mb-4">
                気になる症状は、無理せず一度ご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0277549893"
                  className="inline-flex items-center justify-center gap-2 bg-[#7eb4d2] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#6aa3c4] transition-colors"
                >
                  <Phone className="h-4 w-4" /> 0277-54-9893
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a623] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#e0961c] transition-colors"
                >
                  WEB予約
                </a>
              </div>
            </div>
          )}

          {/* 関連記事（同カテゴリ） */}
          {(() => {
            const related = columnArticles
              .filter((a) => a.category === item.category && a.slug !== item.slug)
              .slice(0, 3)
            if (related.length === 0) return null
            return (
              <div className="mt-10">
                <h2 className="text-lg font-bold text-[#3d5f7a] mb-3">関連記事</h2>
                <ul className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
                  {related.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/column/${a.slug}`}
                        className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#7eb4d2] text-white shrink-0">
                          {a.category}
                        </span>
                        <span className="text-sm text-[#4a4a4a]">{a.title}</span>
                        <ChevronRight className="h-4 w-4 text-[#7eb4d2] ml-auto shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })()}

          <div className="mt-8 text-center">
            <Link href="/column" className="text-[#7eb4d2] text-sm hover:underline">← コラム一覧へ戻る</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
