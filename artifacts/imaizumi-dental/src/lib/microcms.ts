import type { NewsItem } from "@/data/newsData"

// microCMS（お知らせ管理）の接続設定。
// Cloudflare Pages のビルド環境変数として設定する。未設定なら microCMS は使わず、
// src/data/newsData.ts のお知らせがそのまま表示される（移行前と同じ状態）。
const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN as
  | string
  | undefined
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY as string | undefined
// microCMS で作成する「お知らせ」API のエンドポイント ID。既定は "news"。
const ENDPOINT =
  (import.meta.env.VITE_MICROCMS_NEWS_ENDPOINT as string | undefined) || "news"

export const isMicroCMSConfigured = Boolean(SERVICE_DOMAIN && API_KEY)

// microCMS が返すお知らせ1件の生データ（API スキーマと対応）
type MicroCMSNews = {
  id: string
  date?: string // 日付フィールド（ISO 文字列）。未設定なら publishedAt を使う
  publishedAt?: string
  category?: string | string[] // セレクトフィールドは配列で返る
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

function toNewsItem(raw: MicroCMSNews): NewsItem {
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
    // 抜粋が未入力なら本文の先頭から自動生成
    excerpt: raw.excerpt?.trim() || body.replace(/\n+/g, " ").slice(0, 120),
    body,
  }
}

export async function fetchNews(): Promise<NewsItem[]> {
  if (!isMicroCMSConfigured) return []
  const res = await fetch(
    `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${ENDPOINT}?limit=100&orders=-date`,
    { headers: { "X-MICROCMS-API-KEY": API_KEY as string } },
  )
  if (!res.ok) {
    throw new Error(`microCMS request failed: ${res.status}`)
  }
  const data = (await res.json()) as { contents: MicroCMSNews[] }
  return data.contents.map(toNewsItem)
}
