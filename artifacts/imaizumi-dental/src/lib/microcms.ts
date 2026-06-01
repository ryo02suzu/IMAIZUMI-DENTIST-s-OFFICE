import type { NewsItem } from "@/data/newsData"

// お知らせは Cloudflare の裏方(/api/news)経由で取得する。
// microCMS の APIキーはサーバー側だけに置き、ブラウザには出さない（安全）。

// /api/news（GET）が返す microCMS の生データ
type ApiNews = {
  id: string
  date?: string
  publishedAt?: string
  category?: string | string[]
  title: string
  excerpt?: string
  body: string
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}.${m}.${day}`
}

function toNewsItem(raw: ApiNews): NewsItem {
  const iso = raw.date || raw.publishedAt || ""
  const category = Array.isArray(raw.category)
    ? raw.category[0] ?? "お知らせ"
    : raw.category ?? "お知らせ"
  const body = raw.body ?? ""
  return {
    id: raw.id,
    date: formatDate(iso),
    datetime: iso ? iso.slice(0, 10) : "",
    category,
    title: raw.title,
    excerpt: raw.excerpt?.trim() || body.replace(/\n+/g, " ").slice(0, 120),
    body,
  }
}

export async function fetchNews(): Promise<NewsItem[]> {
  const res = await fetch("/api/news", { headers: { accept: "application/json" } })
  if (!res.ok) {
    throw new Error(`news fetch failed: ${res.status}`)
  }
  const data = (await res.json()) as { contents?: ApiNews[] }
  return (data.contents ?? []).map(toNewsItem)
}
